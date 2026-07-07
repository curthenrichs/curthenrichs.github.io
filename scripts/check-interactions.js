/**
 * Interaction smoke gate: serves build/ (per-route static files, like
 * check-hydration) and drives REAL clicks on hydrated pages. Exists because
 * check:hydration only loads pages -- a regression that leaves the page
 * rendering fine but swallowing clicks (e.g. a modal mask that never hides)
 * is invisible to it. Requires a fresh `npm run build`.
 * Run: `npm run check:interactions`.
 */
const fs = require("fs");
const http = require("http");
const path = require("path");
const handler = require("serve-handler");
const puppeteer = require("puppeteer");

const BUILD_DIR = path.resolve(__dirname, "..", "build");
const DESKTOP = { width: 1280, height: 800 };
// Home page collapses section buttons into the hamburger menu below
// BP_NAV_COLLAPSE (1500px, src/breakpoints.js, applied in src/pages/MainPage.jsx)
// -- verified via debug screenshot that .nav-bar-btn is not in the DOM at all
// under that width. Use a viewport past the breakpoint so the header renders
// the section buttons directly, matching the asserted behavior.
const DESKTOP_WIDE = { width: 1600, height: 900 };
const MOBILE = { width: 390, height: 844 };
const VEIL_TIMEOUT_MS = 10000;

let failed = false;
function fail(message) {
  console.error(`check:interactions FAILED: ${message}`);
  failed = true;
}

function startServer() {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => handler(req, res, { public: BUILD_DIR }));
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

async function waitFor(page, predicate, label, timeoutMs = 5000) {
  const start = Date.now();
  for (;;) {
    if (await page.evaluate(predicate)) return true;
    if (Date.now() - start > timeoutMs) {
      fail(label);
      return false;
    }
    await new Promise((r) => setTimeout(r, 100));
  }
}

async function loadPage(page, base, route, viewport, errors) {
  await page.setViewport(viewport);
  await page.goto(`${base}${route}`, { waitUntil: "networkidle0", timeout: 60000 });
  const veil = await waitForVeilDismissed(page, VEIL_TIMEOUT_MS);
  if (veil !== "gone") fail(`${route}: veil not dismissed before interactions`);
  errors.length = 0; // only count errors caused by interactions
}

(async () => {
  if (!fs.existsSync(path.join(BUILD_DIR, "index.html"))) {
    fail("build/index.html not found -- run `npm run build` first");
    process.exit(1);
  }

  const server = await startServer();
  const base = `http://localhost:${server.address().port}`;
  const browser = await puppeteer.launch();

  try {
    const page = await browser.newPage();
    const errors = [];
    page.on("pageerror", (e) => errors.push(String(e)));
    page.on("console", (m) => {
      if (m.type() === "error" && !/Failed to load resource/.test(m.text())) {
        errors.push(m.text());
      }
    });

    // --- 1. Card -> modal -> close -> REOPEN (the maskStyle failure mode) ---
    await loadPage(page, base, "/education", DESKTOP, errors);
    const modalVisible = () => {
      const m = document.querySelector(".ant-modal");
      return !!m && m.getBoundingClientRect().height > 0;
    };
    const modalGone = () => {
      const wrap = document.querySelector(".ant-modal-wrap");
      return !wrap || wrap.style.display === "none" ||
        getComputedStyle(wrap).display === "none";
    };

    await page.click(".ant-card");
    if (await waitFor(page, modalVisible, "/education: modal did not open on card click")) {
      console.log("checked /education -- card click opens modal");
    }
    await page.click(".ant-modal-close");
    if (await waitFor(page, modalGone, "/education: modal did not close")) {
      console.log("checked /education -- modal closes");
    }
    // Reopen proves the dismissed mask no longer intercepts clicks:
    await new Promise((r) => setTimeout(r, 400)); // close animation
    await page.click(".ant-card");
    if (await waitFor(page, modalVisible, "/education: modal did not REOPEN (mask intercepting clicks?)")) {
      console.log("checked /education -- modal reopens (mask released)");
    }

    // --- 2. Header section button scrolls and selects ---
    await loadPage(page, base, "/", DESKTOP_WIDE, errors);
    const target = await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll(".nav-bar-btn"));
      const btn = btns.find((b) => !b.classList.contains("nav-bar-btn-selected"));
      return btn ? btn.id : null;
    });
    if (!target) {
      fail("/: no unselected section button found in header");
    } else {
      await page.click(`#${target}`);
      const scrolled = await waitFor(
        page,
        () => window.scrollY > 0,
        "/: section button click did not scroll the page"
      );
      if (scrolled) console.log(`checked / -- section button #${target} scrolls`);
      // page.evaluate also accepts a plain expression string; waitFor passes
      // its predicate straight through, so a string predicate works here.
      const selectedOk = await waitFor(
        page,
        `document.getElementById(${JSON.stringify(target)}).classList.contains("nav-bar-btn-selected")`,
        `/: clicked section button #${target} never gained the selected class`
      );
      if (selectedOk) console.log(`checked / -- section button #${target} selected`);
    }

    // --- 3. Mobile drawer: open, close, navigate ---
    await loadPage(page, base, "/career", MOBILE, errors);
    const drawerVisible = () => {
      const d = document.querySelector(".ant-drawer");
      return !!d && !d.classList.contains("ant-drawer-hidden") &&
        d.getBoundingClientRect().width > 0;
    };
    await page.click("#collapsed-menu");
    if (await waitFor(page, drawerVisible, "/career: drawer did not open")) {
      console.log("checked /career -- drawer opens");
    }
    // drawerVisible goes true as soon as the drawer's width is set, which is
    // before its slide-in transition settles -- the close button sits
    // off-viewport (verified via debug screenshot: x=414 on a 390px-wide
    // viewport) until the animation finishes, so a puppeteer click on it
    // right after waitFor throws "not clickable". Give the transition time.
    await new Promise((r) => setTimeout(r, 400));
    await page.click(".ant-drawer-close");
    await waitFor(
      page,
      () => {
        const d = document.querySelector(".ant-drawer");
        return !d || d.getBoundingClientRect().width === 0 ||
          !!d.querySelector(".ant-drawer-content-wrapper-hidden") ||
          getComputedStyle(d).visibility === "hidden";
      },
      "/career: drawer did not close"
    );
    console.log("checked /career -- drawer closes");

    await new Promise((r) => setTimeout(r, 400));
    await page.click("#collapsed-menu");
    await waitFor(page, drawerVisible, "/career: drawer did not reopen");
    // Click a route button that navigates away (client-side). Internal route
    // buttons (PageNavButton, src/components/Navigation/PageNavButton.jsx)
    // render as a <div id="..."> with an onClick->useNavigate() handler, not
    // an <a href>, so they can't be found via `.ant-drawer a[href=...]`.
    // Verified via debug screenshot of /career's drawer at 390px: the only
    // internal (non-external-link) route button present is #home-btn, which
    // navigates to "/" -- CareerPage's route options
    // (src/content/primaryRouteOptions.js, secondaryRouteOptions.js) do not
    // include a /projects entry, so that route is not reachable from this
    // drawer at all. #home-btn exercises the identical regression this check
    // guards against (reopened-drawer route buttons still trigger real
    // client-side navigation).
    const navigated = await page.evaluate(() => {
      const link = document.querySelector(".ant-drawer #home-btn");
      if (!link) return false;
      link.click();
      return true;
    });
    if (!navigated) {
      fail("/career: no #home-btn route button found in drawer");
    } else {
      const arrived = await waitFor(
        page,
        () => window.location.pathname === "/",
        "/career: drawer navigation to / did not happen"
      );
      if (arrived) console.log("checked /career -- drawer navigates to /");
    }

    if (errors.length > 0) {
      fail(`console/page errors during interactions:\n  ${errors.join("\n  ")}`);
    }
  } finally {
    await browser.close();
    server.close();
  }

  if (failed) {
    console.error("check:interactions: FAILED");
    process.exit(1);
  }
  console.log("check:interactions: all interaction checks clean");
})().catch((err) => {
  console.error("check:interactions FAILED:", err);
  process.exit(1);
});
