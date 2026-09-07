/**
 * The one place headless Chrome is launched for prerender and the check:*
 * scripts. Locally Puppeteer uses the Chrome it downloaded at install; on
 * CI the workflow points PUPPETEER_EXECUTABLE_PATH at the runner's
 * preinstalled Chrome (Puppeteer reads that variable itself) and skips the
 * download.
 *
 * Flags mirror @half-built/tooling's test-kit, which the blog and
 * half-built-ui run on the same runners:
 *  - CI runners restrict the user namespaces Chrome's sandbox needs, so
 *    the launch dies before a page opens; the runner is a throwaway VM,
 *    so the sandbox is dropped there and only there.
 *  - Headless Chrome on a machine with no input devices reports
 *    (hover: none) and (pointer: none), which can pass locally and fail on
 *    the runner for anything gated on those media queries. Blink's own
 *    settings are the only lever (CDP media emulation ignores them):
 *    hover type 2 = hover, pointer type 4 = fine.
 */
const puppeteer = require("puppeteer");

function launchBrowser() {
  return puppeteer.launch({
    headless: true,
    args: [
      "--blink-settings=primaryHoverType=2,availableHoverTypes=2,primaryPointerType=4,availablePointerTypes=4",
      ...(process.env.CI ? ["--no-sandbox", "--disable-setuid-sandbox"] : [])
    ]
  });
}

module.exports = { launchBrowser };
