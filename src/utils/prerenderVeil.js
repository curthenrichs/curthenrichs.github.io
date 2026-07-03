/**
 * The prerender script injects a full-viewport veil (#prerender-veil) into
 * static HTML so humans never see the snapshot layout reorganize during
 * hydration. Dismissed here once the corrected layout has painted; pure-CSS
 * failsafes in the injected styles cover JS-disabled and never-booted cases.
 */
export function dismissPrerenderVeil() {
  const veil = document.getElementById("prerender-veil");
  if (!veil) return;

  // Two frames: let React commit and the browser paint the corrected layout
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      veil.classList.add("prv-hidden");
      veil.addEventListener("transitionend", () => veil.remove(), { once: true });
      setTimeout(() => veil.remove(), 1000); // fallback if transitionend never fires
    });
  });
}
