/**
 * Loading-veil lifecycle. scripts/prerender.js injects a full-viewport veil
 * (#prerender-veil) into the static HTML so humans never see the 390px mobile
 * snapshot re-layout to the real viewport during hydration.
 *
 * Release paths, in order of preference:
 *   1. dismissPrerenderVeil() — the normal path, called from PageTemplate once
 *      hydration and the width reflow have committed and painted.
 *   2. A boot-relative JS failsafe armed by holdPrerenderVeil() when the app
 *      bundle starts executing: reveals the veil if hydration never completes,
 *      so a stalled/failed hydration can't strand the user behind an opaque veil.
 *   3. A pure-CSS timeout in the injected styles (scripts/prerender.js): the
 *      only failsafe when the bundle never boots at all. holdPrerenderVeil()
 *      cancels it on boot so a slow *download* (the bundle can take well over
 *      5s on slow 4G) never lifts the veil before hydration — the prior bug.
 *   4. A <noscript> rule hides the veil entirely when JS is disabled.
 */

// How long after the bundle boots to wait for hydration before force-revealing.
const POST_BOOT_FAILSAFE_MS = 10000;

let failsafeTimer = null;

function hide(veil) {
  veil.classList.add("prv-hidden");
  veil.addEventListener("transitionend", () => veil.remove(), { once: true });
  // Belt-and-suspenders: remove even if transitionend never fires.
  window.setTimeout(() => veil.remove(), 1000);
}

/**
 * Call as the app bundle begins executing, before hydration. Cancels the CSS
 * download-failsafe (the bundle is alive, so a slow download must no longer be
 * able to lift the veil) and arms a boot-relative failsafe against a hung
 * hydration. No-op when there is no veil (e.g. the dev server).
 */
export function holdPrerenderVeil() {
  const veil = document.getElementById("prerender-veil");
  if (!veil) return;
  veil.style.animation = "none"; // cancel the injected CSS download-failsafe
  failsafeTimer = window.setTimeout(() => {
    failsafeTimer = null;
    hide(veil);
  }, POST_BOOT_FAILSAFE_MS);
}

/**
 * Normal release: called once hydration and the width reflow have committed.
 * Clears any boot-relative failsafe, then fades and removes the veil.
 */
export function dismissPrerenderVeil() {
  const veil = document.getElementById("prerender-veil");
  if (!veil) return;
  if (failsafeTimer !== null) {
    window.clearTimeout(failsafeTimer);
    failsafeTimer = null;
  }
  // Two frames: let React commit and the browser paint the corrected layout.
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      hide(veil);
    });
  });
}
