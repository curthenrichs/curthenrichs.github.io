/**
 * Accessibility gate: serves build/ (per-route static files, like
 * check-hydration) and runs axe-core in headless Chrome on every hydrated
 * content route plus the prerendered 404, at desktop width and, for the
 * pages whose chrome reflows most, at phone width. WCAG 2.1 A and AA rules
 * only, so every failure maps to a success criterion; axe's best-practice
 * rules are left out on purpose. Then walks the keyboard focus order of the
 * home page and requires every stop to show a visible focus change.
 *
 * The accessibility policy's WCAG 2.1 AA claim rests on this running green.
 * Requires a fresh `npm run build`. Run: `npm run check:a11y`.
 */
const fs = require("fs");
const http = require("http");
const path = require("path");
const handler = require("serve-handler");
const puppeteer = require("puppeteer");

const BUILD_DIR = path.resolve(__dirname, "..", "build");
const AXE_PATH = require.resolve("axe-core/axe.min.js");
const DESKTOP = { width: 1280, height: 800 };
const PHONE = { width: 390, height: 844 };
const VEIL_TIMEOUT_MS = 10000;
const MAX_FOCUS_STOPS = 300;

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
  runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"] }
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

// Every Tab stop on the home page must look different focused than
// blurred: outline, box-shadow, border, background, or text decoration.
// That is what "a visible focus indicator" (WCAG 2.4.7) means in practice.
async function focusWalk(page) {
  // Cycle detection marks each visited element in the DOM; a text-based key
  // would collapse two identical-looking links into one stop.
  const unringed = [];
  let stops = 0;
  for (let i = 0; i < MAX_FOCUS_STOPS; i++) {
    await page.keyboard.press("Tab");
    const stop = await page.evaluate(() => {
      const el = document.activeElement;
      if (!el || el === document.body) return null;
      const pick = (s) => [s.outlineStyle, s.outlineWidth, s.outlineColor, s.boxShadow, s.borderColor, s.backgroundColor, s.textDecorationLine, s.color].join("|");
      if (el.dataset.a11yStop) return { cycled: true };
      el.dataset.a11yStop = "1";
      const focused = pick(getComputedStyle(el));
      const tag = `${el.tagName.toLowerCase()}${el.id ? "#" + el.id : ""}${el.className && typeof el.className === "string" ? "." + el.className.trim().split(/\s+/).slice(0, 2).join(".") : ""}`;
      const text = (el.getAttribute("aria-label") || el.textContent || "").trim().slice(0, 40);
      const key = `${tag} ${text}`;
      el.blur();
      const blurred = pick(getComputedStyle(el));
      el.focus({ preventScroll: true });
      return { key, ringed: focused !== blurred };
    });
    if (!stop || stop.cycled) break; // back at the start
    stops++;
    if (!stop.ringed) unringed.push(stop.key);
  }
  if (stops === 0) fail("focus walk: Tab never reached a focusable element on /");
  if (unringed.length > 0) {
    fail(`focus walk: ${unringed.length} of ${stops} Tab stop(s) on / show no visible focus change:\n  ${unringed.join("\n  ")}`);
  } else {
    console.log(`focus walk: all ${stops} Tab stops on / show a visible focus change`);
  }
}

(async () => {
  if (!fs.existsSync(path.join(BUILD_DIR, "index.html"))) {
    fail("build/index.html not found -- run `npm run build` first");
    process.exit(1);
  }
  const server = await startServer();
  const port = server.address().port;
  const browser = await puppeteer.launch();
  try {
    const page = await browser.newPage();
    for (const route of ROUTES) {
      if (await open(page, port, route, DESKTOP)) await audit(page, route, "desktop");
    }
    for (const route of PHONE_ROUTES) {
      if (await open(page, port, route, PHONE)) await audit(page, route, "phone");
    }
    if (await open(page, port, "/", DESKTOP)) await focusWalk(page);
  } finally {
    await browser.close();
    server.close();
  }
  if (failed) {
    console.error("check:a11y: FAILED");
    process.exit(1);
  }
  console.log(`check:a11y: ${ROUTES.length} routes clean at desktop, ${PHONE_ROUTES.length} at phone, focus walk clean`);
})().catch((err) => {
  console.error("check:a11y FAILED:", err);
  process.exit(1);
});
