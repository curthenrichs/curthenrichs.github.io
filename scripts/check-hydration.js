/**
 * Headless hydration check: serves build/ via serve-handler (no SPA
 * rewrite, so each route's own static file wins on disk -- this mirrors
 * GitHub Pages' real per-route file serving; `npm run serve` uses a
 * blanket "**" rewrite and does NOT emulate this) and puppeteer-visits
 * every content route, asserting hydration completes with no console
 * errors or React hydration-mismatch messages, and that the prerender
 * veil/markers are cleared.
 *
 * NOT wired into the build -- run manually: `npm run check:hydration`.
 * Requires Node >= 22.12 (puppeteer).
 */
const fs = require("fs");
const http = require("http");
const path = require("path");
const handler = require("serve-handler");
const puppeteer = require("puppeteer");

const BUILD_DIR = path.resolve(__dirname, "..", "build");
const VIEWPORT = { width: 1280, height: 800 };
const VEIL_TIMEOUT_MS = 10000;

// The 10 prerendered content routes (excludes the 404 pseudo-route and the
// static redirect stubs in scripts/prerender.js). Keep in sync with that
// file's ROUTES list.
const ROUTES = [
  "/",
  "/career",
  "/education",
  "/projects",
  "/publications",
  "/contract",
  "/attribution",
  "/terms",
  "/accessibility",
  "/privacy"
];

const detailRoutes = require(path.join(__dirname, "..", "src", "content", "detailRoutes.json"));
detailRoutes.forEach((r) => ROUTES.push(r.path));

// Routes checked for prerender marker consumption (window.__PRERENDERED_WIDTH__
// deleted by PageTemplate.componentDidMount after hydration).
const MARKER_CHECK_ROUTES = ["/", "/career"];

const MISMATCH_PATTERN = /hydrat|did not match|#418|#423|#425/i;

// Resource-load failures (missing images etc.) are pre-existing content
// issues, not hydration defects: surfaced as warnings, exempt from failing
// the run. Only applies to console-type "error" messages; page JS errors
// and any MISMATCH_PATTERN match at any level still fail.
const RESOURCE_LOAD_PATTERN = /Failed to load resource.*(404|net::)/i;

let failed = false;

function fail(message) {
  console.error(`check:hydration FAILED: ${message}`);
  failed = true;
}

function startServer() {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) =>
      // No rewrites: real per-route static files win, like GitHub Pages.
      handler(req, res, { public: BUILD_DIR })
    );
    server.on("error", reject);
    server.listen(0, () => resolve(server));
  });
}

async function waitForVeilDismissed(page, timeoutMs) {
  const start = Date.now();
  for (;;) {
    const state = await page.evaluate(() => {
      const veil = document.getElementById("prerender-veil");
      if (!veil) return "gone";
      return veil.classList.contains("prv-hidden") ? "hidden" : "present";
    });
    if (state === "gone" || Date.now() - start > timeoutMs) return state;
    await new Promise((r) => setTimeout(r, 100));
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
    await page.setViewport(VIEWPORT);

    for (const route of ROUTES) {
      const messages = [];
      const onConsole = (msg) => {
        // Resource-load failures carry the failing URL in location(), not text().
        const url = (msg.location() || {}).url;
        const text = url ? `${msg.text()} (${url})` : msg.text();
        messages.push({ kind: msg.type(), text });
      };
      const onPageError = (err) => messages.push({ kind: "pageerror", text: String(err) });
      page.on("console", onConsole);
      page.on("pageerror", onPageError);

      await page.goto(`http://localhost:${port}${route}`, {
        waitUntil: "networkidle0",
        timeout: 60000
      });

      // Keep listeners attached through the veil wait: hydration errors can
      // surface during this window, after networkidle0.
      const veilState = await waitForVeilDismissed(page, VEIL_TIMEOUT_MS);

      page.off("console", onConsole);
      page.off("pageerror", onPageError);

      if (veilState !== "gone") {
        const reason =
          veilState === "hidden"
            ? "hidden but never removed from the DOM"
            : "never dismissed";
        fail(`${route}: prerender veil ${reason} within ${VEIL_TIMEOUT_MS}ms`);
      }

      const resourceWarnings = messages.filter(
        (m) =>
          m.kind === "error" &&
          RESOURCE_LOAD_PATTERN.test(m.text) &&
          !MISMATCH_PATTERN.test(m.text)
      );
      const bad = messages.filter(
        (m) =>
          !resourceWarnings.includes(m) &&
          (m.kind === "error" || m.kind === "pageerror" || MISMATCH_PATTERN.test(m.text))
      );
      for (const m of resourceWarnings) {
        console.warn(`warn: [${route}] ${m.text}`);
      }
      if (bad.length > 0) {
        fail(`${route}: console error(s):\n  ${bad.map((m) => `[${m.kind}] ${m.text}`).join("\n  ")}`);
      }

      if (MARKER_CHECK_ROUTES.includes(route)) {
        const markerConsumed = await page.evaluate(
          () => window.__PRERENDERED_WIDTH__ === undefined
        );
        if (!markerConsumed) {
          fail(`${route}: __PRERENDERED_WIDTH__ marker not consumed`);
        }
      }

      const warnNote =
        resourceWarnings.length > 0 ? `, ${resourceWarnings.length} resource warning(s)` : "";
      console.log(
        `checked ${route} -- veil ${veilState}, ${bad.length === 0 ? "no console errors" : `${bad.length} console error(s)`}${warnNote}`
      );
    }
  } finally {
    await browser.close();
    server.close();
  }

  if (failed) {
    console.error("check:hydration: FAILED");
    process.exit(1);
  }

  console.log(`check:hydration: all ${ROUTES.length} routes clean`);
})().catch((err) => {
  console.error("check:hydration FAILED:", err);
  process.exit(1);
});
