import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PageTemplate from "./PageTemplate";
import { WidthContext } from "../contexts";

const HEADER = {
  simple: true,
  pageName: "Test",
  sectionButtons: [],
  primaryRouteButtons: [],
  secondaryRouteButtons: []
};

function renderTemplate(probeWidths) {
  const Probe = () => {
    probeWidths.push(React.useContext(WidthContext));
    return null;
  };
  return render(
    <MemoryRouter>
      <PageTemplate
        header={HEADER}
        sections={[
          {
            name: "sect-test",
            navItem: "",
            sectionType: "type-a",
            scrollProperties: { duration: 0, smooth: false, offset: 0 },
            content: <Probe />
          }
        ]}
      />
    </MemoryRouter>
  );
}

describe("PageTemplate prerender viewport handling", () => {
  let scrollToSpy;

  beforeEach(() => {
    // jsdom does not implement window.scrollTo; react-scroll's scroller.scrollTo
    // (invoked from componentDidMount) calls it and jsdom logs a "not implemented"
    // error via its own VirtualConsole channel (not interceptable via
    // console.error mocking). Stub scrollTo so it's never called in the first
    // place -- this is jsdom/react-scroll test-environment noise, not app behavior.
    scrollToSpy = jest.spyOn(window, "scrollTo").mockImplementation(() => {});
  });

  afterEach(() => {
    delete window.__PRERENDERED_WIDTH__;
    delete window.__PRERENDERED_HEIGHT__;
    scrollToSpy.mockRestore();
  });

  test("first render uses marker width, then swaps to real viewport and clears flags", () => {
    window.__PRERENDERED_WIDTH__ = 390;
    window.__PRERENDERED_HEIGHT__ = 844;

    const widths = [];
    renderTemplate(widths);

    expect(widths[0]).toBe(390); // snapshot-matching first render
    expect(widths[widths.length - 1]).toBe(window.innerWidth); // corrected after mount
    expect(window.__PRERENDERED_WIDTH__).toBeUndefined();
    expect(window.__PRERENDERED_HEIGHT__).toBeUndefined();
  });

  test("without marker, uses real viewport from the start", () => {
    const widths = [];
    renderTemplate(widths);

    expect(widths[0]).toBe(window.innerWidth);
  });

  test("dismisses the prerender veil after correcting the viewport", () => {
    window.__PRERENDERED_WIDTH__ = 390;
    window.__PRERENDERED_HEIGHT__ = 844;
    const veil = document.createElement("div");
    veil.id = "prerender-veil";
    document.body.appendChild(veil);
    const rafSpy = jest
      .spyOn(window, "requestAnimationFrame")
      .mockImplementation((cb) => {
        cb(0);
        return 0;
      });

    renderTemplate([]);

    expect(veil.classList.contains("prv-hidden")).toBe(true);
    rafSpy.mockRestore();
    veil.remove();
  });
});
