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

// Keep titles in sync with src/content/pageMeta.js and paths with src/index.jsx.
const ROUTES = [
  { path: "/", file: "index.html", title: "Curt Henrichs | Portfolio | Home" },
  { path: "/career", file: "career/index.html", title: "Curt Henrichs | Portfolio | Career" },
  { path: "/education", file: "education/index.html", title: "Curt Henrichs | Portfolio | Education" },
  { path: "/projects", file: "projects/index.html", title: "Curt Henrichs | Portfolio | Projects" },
  { path: "/publications", file: "publications/index.html", title: "Curt Henrichs | Portfolio | Publications" },
  { path: "/contract", file: "contract/index.html", title: "Curt Henrichs | Portfolio | Contracting" },
  { path: "/attribution", file: "attribution/index.html", title: "Curt Henrichs | Portfolio | Attribution" },
  { path: "/terms", file: "terms/index.html", title: "Curt Henrichs | Portfolio | Terms of Use" },
  { path: "/accessibility", file: "accessibility/index.html", title: "Curt Henrichs | Portfolio | Accessibility" },
  { path: "/privacy", file: "privacy/index.html", title: "Curt Henrichs | Portfolio | Privacy Policy" },
  // Any unknown path renders NotFoundPage; captured once as the real 404 page.
  { path: "/__prerender-404__", file: "404.html", title: "Curt Henrichs | Portfolio | Page Not Found" }
];

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
  }
];

const MARKER =
  `<script>window.__PRERENDERED_WIDTH__=${VIEWPORT.width};` +
  `window.__PRERENDERED_HEIGHT__=${VIEWPORT.height};</script>`;

// Full-viewport veil: humans never see the mobile snapshot re-layout during
// hydration. Dismissed by PageTemplate (prv-hidden class); pure-CSS failsafes:
// noscript hides it entirely, and a 5s keyframe auto-fades it if JS never runs.
// The robot fades in after 300ms so fast loads see only a blank blink.
const VEIL_STYLE = `<style>
#prerender-veil{position:fixed;inset:0;z-index:10000;background:#fff;display:flex;align-items:center;justify-content:center;opacity:1;transition:opacity .35s ease;animation:prv-timeout .35s ease 5s forwards}
#prerender-veil.prv-hidden{opacity:0;pointer-events:none}
@keyframes prv-timeout{to{opacity:0;visibility:hidden}}
.prv-robot{position:relative;opacity:0;animation:prv-appear .3s ease .3s forwards,prv-bob 1.6s ease-in-out .3s infinite}
@keyframes prv-appear{to{opacity:1}}
@keyframes prv-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
.prv-antenna{width:4px;height:14px;background:#555;margin:0 auto;border-radius:2px;position:relative}
.prv-antenna::before{content:"";position:absolute;top:-10px;left:-3px;width:10px;height:10px;background:#1890ff;border-radius:50%;animation:prv-glow 1.6s ease-in-out infinite}
@keyframes prv-glow{0%,100%{opacity:.5}50%{opacity:1}}
.prv-head{width:64px;height:46px;border:3px solid #555;border-radius:12px;display:flex;align-items:center;justify-content:center;gap:12px;background:#fff}
.prv-eye{width:10px;height:10px;background:#1890ff;border-radius:50%;animation:prv-blink 3.2s infinite}
@keyframes prv-blink{0%,92%,100%{transform:scaleY(1)}96%{transform:scaleY(.1)}}
</style>`;

const VEIL_HTML =
  `<div id="prerender-veil" aria-hidden="true">` +
  `<div class="prv-robot"><div class="prv-antenna"></div>` +
  `<div class="prv-head"><div class="prv-eye"></div><div class="prv-eye"></div></div>` +
  `</div></div>` +
  `<noscript><style>#prerender-veil{display:none}</style></noscript>`;

function fail(message) {
  console.error(`prerender FAILED: ${message}`);
  process.exit(1);
}

function redirectHtml(target, label) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<meta http-equiv="refresh" content="0;url=${target}">
<link rel="canonical" href="${target}">
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

      let html = await page.content();
      html = html.replace("<head>", `<head>${MARKER}${VEIL_STYLE}`);
      // Veil sits OUTSIDE #root so hydration never sees it
      html = html.replace("</body>", `${VEIL_HTML}</body>`);
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
