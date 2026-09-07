/**
 * Accessibility gate: serves build/ (per-route static files, like
 * check-hydration) and runs axe-core in headless Chrome on every hydrated
 * content route plus the prerendered 404, at desktop width and, for the
 * pages whose chrome reflows most, at phone width. WCAG 2.1 Level A rules
 * only (decision 2026-09-06: the brand blue stays as-is and the focus ring
 * antd 4 strips from links is not being restored, so the AA criteria for
 * contrast and focus visibility are out of scope), and every failure maps
 * to a success criterion; axe's best-practice rules are left out on
 * purpose.
 *
 * The accessibility policy's conformance claim rests on this running green.
 * Requires a fresh `npm run build`. Run: `npm run check:a11y`.
 */
const fs = require("fs");
const http = require("http");
const path = require("path");
const handler = require("serve-handler");
const { launchBrowser } = require("./launch-browser");

const BUILD_DIR = path.resolve(__dirname, "..", "build");
const AXE_PATH = require.resolve("axe-core/axe.min.js");
const DESKTOP = { width: 1280, height: 800 };
const PHONE = { width: 390, height: 844 };
const VEIL_TIMEOUT_MS = 10000;

// Same route sources as prerender and check-hydration. The 404 is served
// by its own file: serve-handler has no rewrites, so /404.html is the only
// way to reach the prerendered not-found page.
const baseRoutes = require(path.join(__dirname, "base-routes.json"));
const ROUTES = baseRoutes.map((r) => r.path);
const detailRoutes = require(path.join(__dirname, "..", "src", "content", "detailRoutes.json"));
detailRoutes.forEach((r) => ROUTES.push(r.path));
ROUTES.push("/404.html");

// The phone chrome is a different DOM (collapsed nav); the home page and
// one detail page get a second pass.
const PHONE_ROUTES = ["/", detailRoutes[0].path];

const AXE_OPTIONS = {
  runOnly: { type: "tag", values: ["wcag2a", "wcag21a"] }
};

let failed = false;
function fail(message) {
  console.error(`check:a11y FAILED: ${message}`);
  failed = true;
}

function startServer() {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => handler(req, res, { public: BUILD_DIR }));
    server.on("error", reject);
    server.listen(0, () => resolve(server));
  });
}

async function waitForVeilDismissed(page) {
  const start = Date.now();
  for (;;) {
    const gone = await page.evaluate(() => !document.getElementById("prerender-veil"));
    if (gone || Date.now() - start > VEIL_TIMEOUT_MS) return gone;
    await new Promise((r) => setTimeout(r, 100));
  }
}

async function open(page, port, route, viewport) {
  await page.setViewport(viewport);
  await page.goto(`http://localhost:${port}${route}`, { waitUntil: "networkidle0", timeout: 60000 });
  const gone = await waitForVeilDismissed(page);
  if (!gone) fail(`${route}: prerender veil never dismissed; not auditing a half-hydrated page`);
  return gone;
}

function describeViolations(route, label, violations) {
  const lines = violations.map((v) => {
    const targets = v.nodes.slice(0, 3).map((n) => n.target.join(" ")).join(" | ");
    const more = v.nodes.length > 3 ? ` (+${v.nodes.length - 3} more)` : "";
    return `  [${v.impact}] ${v.id}: ${v.help}\n    ${v.helpUrl}\n    ${targets}${more}`;
  });
  return `${route} @ ${label}: ${violations.length} violation(s)\n${lines.join("\n")}`;
}

async function audit(page, route, label) {
  await page.addScriptTag({ path: AXE_PATH });
  const results = await page.evaluate((options) => window.axe.run(document, options), AXE_OPTIONS);
  if (results.violations.length > 0) {
    fail(describeViolations(route, label, results.violations));
  } else {
    console.log(`axe clean ${route} @ ${label} (${results.passes.length} rules passed)`);
  }
}

(async () => {
  if (!fs.existsSync(path.join(BUILD_DIR, "index.html"))) {
    fail("build/index.html not found -- run `npm run build` first");
    process.exit(1);
  }
  const server = await startServer();
  const port = server.address().port;
  const browser = await launchBrowser();
  try {
    const page = await browser.newPage();
    for (const route of ROUTES) {
      if (await open(page, port, route, DESKTOP)) await audit(page, route, "desktop");
    }
    for (const route of PHONE_ROUTES) {
      if (await open(page, port, route, PHONE)) await audit(page, route, "phone");
    }
  } finally {
    await browser.close();
    server.close();
  }
  if (failed) {
    console.error("check:a11y: FAILED");
    process.exit(1);
  }
  console.log(`check:a11y: ${ROUTES.length} routes clean at desktop, ${PHONE_ROUTES.length} at phone`);
})().catch((err) => {
  console.error("check:a11y FAILED:", err);
  process.exit(1);
});
