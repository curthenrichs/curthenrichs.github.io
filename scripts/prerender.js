/**
 * Prerenders the built SPA into static HTML per route so crawlers and
 * AI agents that do not execute JavaScript can read the site, and so
 * GitHub Pages serves every route with HTTP 200 instead of the 404
 * redirect hack. Runs automatically via the npm `postbuild` hook.
 */
const fs = require("fs");
const http = require("http");
const path = require("path");
const handler = require("serve-handler");
const puppeteer = require("puppeteer");

const BUILD_DIR = path.resolve(__dirname, "..", "build");
const PORT = 5050;
const VIEWPORT = { width: 390, height: 844 }; // must match PageTemplate's marker handling
const SETTLE_MS = 500; // extra wait after network idle for animations/layout
const MIN_ROOT_CHARS = 500; // captured #root smaller than this fails the build

// Henry's animated geometry/animation, vendored from the henry-mascot submodule
// (synced to src/vendor/henry). Inlined into the veil below so the veil robot
// and the React CuteRobot share one source of truth -- no hand-copied geometry.
const VENDORED_HENRY_CSS = fs.readFileSync(
  path.join(__dirname, "..", "src", "vendor", "henry", "henry-animated.css"),
  "utf8"
);

// Base content routes are shared with scripts/check-hydration.js via
// base-routes.json. Keep titles in sync with src/content/pageMeta.js and paths
// with src/index.jsx.
const ROUTES = [
  ...require("./base-routes.json"),
  // Any unknown path renders NotFoundPage; captured once as the real 404 page.
  // Prerender-only (not a navigable route), so it lives here, not in the shared file.
  { path: "/__prerender-404__", file: "404.html", title: "Curt Henrichs | Portfolio | Page Not Found" }
];

// Detail pages: single-sourced from the app's route manifest.
const detailRoutes = require(path.join(__dirname, "..", "src", "content", "detailRoutes.json"));
detailRoutes.forEach((r) => {
  ROUTES.push({
    path: r.path,
    file: `${r.path.slice(1)}/index.html`,
    title: r.title
  });
});

// Routes whose components call window.open — served as static redirect pages instead.
const REDIRECTS = [
  {
    file: "resume/index.html",
    target: "/docs/curt-henrichs-resume.pdf",
    label: "Curt Henrichs' resume (PDF)"
  },
  {
    file: "blog/index.html",
    target: "https://www.half-built-robots.com/",
    label: "Half-Built Robots, Curt Henrichs' blog"
  },
  {
    file: "home/index.html",
    target: "/",
    label: "Curt Henrichs' portfolio home"
  }
];

const SITE_ORIGIN = "https://curthenrichs.github.io";

const MARKER =
  `<script>window.__PRERENDERED_WIDTH__=${VIEWPORT.width};` +
  `window.__PRERENDERED_HEIGHT__=${VIEWPORT.height};</script>`;

// Full-viewport veil: humans never see the mobile snapshot re-layout during
// hydration. Normally dismissed by PageTemplate (prv-hidden class) once hydration
// and the width reflow have painted. Failsafes: noscript hides it entirely when
// JS is off; the app cancels the CSS keyframe below the moment its bundle boots
// (src/utils/prerenderVeil.js holdPrerenderVeil) and arms a boot-relative timer
// instead — so this 20s keyframe only fires if the bundle never boots at all
// (kept long so a slow download can't lift the veil before hydration).
// The robot fades in after 300ms so fast loads see only a blank blink.
// Veil chrome (container, entrance, timeout, scale, label) -- NOT Henry. Henry's
// geometry/animation is inlined from the vendored henry-animated.css below, so
// there is one source of truth. Scale 0.59 matches the veil's prior 64px head
// (vendored cute-robot-head is 109px). The cute-robot- rules only affect the
// veil's own instance (the veil is removed at hydration).
const VEIL_STYLE = `<style>
#prerender-veil{position:fixed;inset:0;z-index:10000;background:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;opacity:1;transition:opacity .35s ease;animation:prv-timeout .35s ease 20s forwards}
#prerender-veil.prv-hidden{opacity:0;pointer-events:none}
@keyframes prv-timeout{to{opacity:0;visibility:hidden}}
#prerender-veil .prv-scale{transform:scale(.59);transform-origin:center}
#prerender-veil .prv-robot{opacity:0;animation:prv-appear .3s ease .3s forwards,prv-bob 1.6s ease-in-out .3s infinite}
@keyframes prv-appear{to{opacity:1}}
@keyframes prv-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
#prerender-veil .prv-label{margin-top:18px;opacity:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:14px;color:#555;letter-spacing:.08em;animation:prv-appear .3s ease .3s forwards}
@media (prefers-reduced-motion:reduce){#prerender-veil .prv-robot{opacity:1;animation:none}#prerender-veil .prv-label{opacity:1;animation:none}}
${VENDORED_HENRY_CSS}
</style>`;

// Friendly pose (eyes + antenna, no question marks), vendored cute-robot- markup.
const VEIL_HTML =
  `<div id="prerender-veil" aria-hidden="true">` +
  `<div class="prv-scale"><div class="prv-robot">` +
  `<span class="cute-robot-container"><span class="cute-robot-robot">` +
  `<span class="cute-robot-antenna"></span>` +
  `<span class="cute-robot-head"><span class="cute-robot-eye"></span><span class="cute-robot-eye"></span></span>` +
  `</span></span>` +
  `</div></div>` +
  `<div class="prv-label">Loading&#8230;</div>` +
  `</div>` +
  `<noscript><style>#prerender-veil{display:none}</style></noscript>`;

function fail(message) {
  console.error(`prerender FAILED: ${message}`);
  process.exit(1);
}

function redirectHtml(target, label) {
  // <link rel="canonical"> must be an absolute URL per spec; relative
  // targets (e.g. the /resume PDF, /home) need the site origin prefixed.
  const canonical = target.startsWith("/") ? `${SITE_ORIGIN}${target}` : target;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<meta http-equiv="refresh" content="0;url=${target}">
<link rel="canonical" href="${canonical}">
<title>Redirecting to ${label}</title>
</head>
<body>
<p>Redirecting to <a href="${target}">${label}</a>.</p>
</body>
</html>
`;
}

function startServer() {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) =>
      handler(req, res, {
        public: BUILD_DIR,
        // SPA fallback: unknown paths serve the app shell (files on disk win)
        rewrites: [{ source: "**", destination: "/index.html" }]
      })
    );
    server.on("error", reject);
    server.listen(PORT, () => resolve(server));
  });
}

(async () => {
  if (!fs.existsSync(path.join(BUILD_DIR, "index.html"))) {
    fail("build/index.html not found — run the build first");
  }

  const server = await startServer();
  const browser = await puppeteer.launch();
  const captures = [];

  try {
    const page = await browser.newPage();
    await page.setViewport(VIEWPORT);
    // Capture settled animation states, not mid-flight frames
    await page.emulateMediaFeatures([
      { name: "prefers-reduced-motion", value: "reduce" }
    ]);

    for (const route of ROUTES) {
      await page.goto(`http://localhost:${PORT}${route.path}`, {
        waitUntil: "networkidle0",
        timeout: 60000
      });
      await new Promise((r) => setTimeout(r, SETTLE_MS));

      const title = await page.title();
      const rootChars = await page.evaluate(
        () => document.getElementById("root").innerHTML.length
      );
      if (title !== route.title) {
        fail(`${route.path}: expected title "${route.title}", got "${title}"`);
      }
      if (rootChars < MIN_ROOT_CHARS) {
        fail(`${route.path}: #root has only ${rootChars} chars of content`);
      }

      // Markdown fetched during this capture (recorded by MarkdownContent
      // into window.__PRERENDER_MD__, keyed by fetch URL). Baked into the
      // head so the client's first hydration render emits the same markdown
      // synchronously instead of racing an async fetch (an empty first
      // render vs. the populated snapshot aborts hydration). Injected only
      // when non-empty to keep markdown-free pages clean.
      const mdCache = await page.evaluate(() => window.__PRERENDER_MD__ || {});
      // Escape "<" so markdown content can never break out via </script>.
      const mdScript =
        Object.keys(mdCache).length > 0
          ? `<script>window.__PRERENDER_MD__=${JSON.stringify(mdCache).replace(/</g, "\\u003c")};</script>`
          : "";

      let html = await page.content();
      // Replacer-function form: a plain string replacement would treat any
      // "$&"/"$`"/"$'"/"$$" inside the injected content (markdown cache is
      // arbitrary text) as a special pattern and silently corrupt the output.
      html = html.replace("<head>", () => `<head>${mdScript}${MARKER}${VEIL_STYLE}`);
      // Veil sits OUTSIDE #root so hydration never sees it
      html = html.replace("</body>", () => `${VEIL_HTML}</body>`);

      if (!html.includes("__PRERENDERED_WIDTH__") || !html.includes('id="prerender-veil"')) {
        fail(`${route.path}: marker/veil injection self-check failed`);
      }

      captures.push({ route, html, rootChars });
      console.log(`prerendered ${route.path} (${rootChars} chars)`);
    }
  } finally {
    await browser.close();
    server.close();
  }

  // Write only after every route captured cleanly, so a partial crawl never
  // overwrites build/index.html (which also serves as the crawl's SPA fallback).
  for (const { route, html } of captures) {
    const outPath = path.join(BUILD_DIR, route.file);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, html);
  }
  for (const redirect of REDIRECTS) {
    const outPath = path.join(BUILD_DIR, redirect.file);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, redirectHtml(redirect.target, redirect.label));
    console.log(`wrote redirect ${redirect.file} -> ${redirect.target}`);
  }

  console.log(`prerender complete: ${captures.length} pages + ${REDIRECTS.length} redirects`);
})().catch((err) => {
  console.error("prerender FAILED:", err);
  process.exit(1);
});
