import { dismissPrerenderVeil, holdPrerenderVeil } from "./prerenderVeil";

function makeVeil() {
  const veil = document.createElement("div");
  veil.id = "prerender-veil";
  document.body.appendChild(veil);
  return veil;
}

describe("dismissPrerenderVeil", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    // Run both requestAnimationFrame callbacks synchronously so the class is
    // applied and listeners are attached within the test's synchronous flow.
    jest
      .spyOn(window, "requestAnimationFrame")
      .mockImplementation((cb) => {
        cb(0);
        return 0;
      });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("does nothing when no veil element is present", () => {
    expect(() => dismissPrerenderVeil()).not.toThrow();
  });

  test("hides the veil, then removes the node on transitionend", () => {
    const veil = makeVeil();

    dismissPrerenderVeil();

    // Hidden but still in the DOM immediately after dismissal.
    expect(veil.classList.contains("prv-hidden")).toBe(true);
    expect(document.getElementById("prerender-veil")).not.toBeNull();

    // The transition completing removes the node.
    veil.dispatchEvent(new Event("transitionend"));
    expect(document.getElementById("prerender-veil")).toBeNull();
  });
});

describe("holdPrerenderVeil", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  test("does nothing when no veil element is present", () => {
    expect(() => holdPrerenderVeil()).not.toThrow();
  });

  test("cancels the injected CSS download-failsafe animation", () => {
    const veil = makeVeil();
    holdPrerenderVeil();
    expect(veil.style.animation).toBe("none");
  });

  test("reveals the veil via a boot-relative failsafe if hydration never dismisses it", () => {
    const veil = makeVeil();

    holdPrerenderVeil();
    expect(veil.classList.contains("prv-hidden")).toBe(false); // still up right after boot

    jest.advanceTimersByTime(10000);
    expect(veil.classList.contains("prv-hidden")).toBe(true); // failsafe forced it open
  });

  test("a normal dismiss clears the boot failsafe so it does not fire", () => {
    jest
      .spyOn(window, "requestAnimationFrame")
      .mockImplementation((cb) => {
        cb(0);
        return 0;
      });
    const clearSpy = jest.spyOn(window, "clearTimeout");
    const veil = makeVeil();

    holdPrerenderVeil();
    dismissPrerenderVeil(); // hydration completed first
    expect(clearSpy).toHaveBeenCalled();
    expect(veil.classList.contains("prv-hidden")).toBe(true);

    // Node removed on transition end; advancing past the failsafe must be a no-op.
    veil.dispatchEvent(new Event("transitionend"));
    expect(document.getElementById("prerender-veil")).toBeNull();
    expect(() => jest.advanceTimersByTime(10000)).not.toThrow();
    expect(document.getElementById("prerender-veil")).toBeNull();
  });
});
