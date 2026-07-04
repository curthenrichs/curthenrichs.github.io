import { dismissPrerenderVeil } from "./prerenderVeil";

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
    const veil = document.createElement("div");
    veil.id = "prerender-veil";
    document.body.appendChild(veil);

    dismissPrerenderVeil();

    // Hidden but still in the DOM immediately after dismissal.
    expect(veil.classList.contains("prv-hidden")).toBe(true);
    expect(document.getElementById("prerender-veil")).not.toBeNull();

    // The transition completing removes the node.
    veil.dispatchEvent(new Event("transitionend"));
    expect(document.getElementById("prerender-veil")).toBeNull();
  });
});
