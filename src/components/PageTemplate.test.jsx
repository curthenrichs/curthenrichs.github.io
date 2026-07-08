import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
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

describe("PageTemplate wiring", () => {
  let scrollToSpy;
  const ORIGINAL_INNER_WIDTH = window.innerWidth;
  beforeEach(() => {
    scrollToSpy = jest.spyOn(window, "scrollTo").mockImplementation(() => {});
  });
  afterEach(() => {
    scrollToSpy.mockRestore();
    jest.restoreAllMocks();
    // The resize test mutates window.innerWidth; restore so later tests in
    // this file see jsdom's default width.
    window.innerWidth = ORIGINAL_INNER_WIDTH;
  });

  const HEADER_WITH_BUTTONS = {
    simple: false,
    pageName: "Test",
    // collapseWidth: 0 -- reconciliation: jsdom's default window.innerWidth
    // (1024) is compared against collapseWidth in NavHeader as
    // `width >= collapseWidth`; with collapseWidth left undefined that
    // comparison is always false (>= undefined is NaN-false), so the
    // section buttons never render and #two-btn wouldn't exist to click.
    collapseWidth: 0,
    sectionButtons: [
      { id: "one-btn", flexPx: 150, content: "One" },
      { id: "two-btn", flexPx: 150, content: "Two" }
    ],
    primaryRouteButtons: [],
    secondaryRouteButtons: []
  };
  const TWO_SECTIONS = [
    { name: "sect-one", navItem: "one-btn", sectionType: "type-a", scrollProperties: { duration: 0 }, content: <div /> },
    { name: "sect-two", navItem: "two-btn", sectionType: "type-b", scrollProperties: { duration: 0 }, content: <div /> }
  ];
  const renderWired = () =>
    render(
      <MemoryRouter>
        <PageTemplate header={HEADER_WITH_BUTTONS} sections={TWO_SECTIONS} />
      </MemoryRouter>
    );

  test("window resize updates the provided WidthContext value", () => {
    const widths = [];
    const Probe = () => {
      widths.push(React.useContext(WidthContext));
      return null;
    };
    render(
      <MemoryRouter>
        <PageTemplate
          header={HEADER_WITH_BUTTONS}
          sections={[{ name: "s", navItem: "", sectionType: "type-a", scrollProperties: null, content: <Probe /> }]}
        />
      </MemoryRouter>
    );
    act(() => {
      window.innerWidth = 555;
      window.dispatchEvent(new Event("resize"));
    });
    expect(widths[widths.length - 1]).toBe(555);
  });

  test("header section button click scrolls to its section", () => {
    const { scroller } = jest.requireActual("react-scroll");
    const spy = jest.spyOn(scroller, "scrollTo").mockImplementation(() => {});
    renderWired();
    fireEvent.click(document.querySelector("#two-btn"));
    expect(spy).toHaveBeenCalledWith("sect-two", expect.any(Object));
  });

  test("hamburger opens the drawer; drawer close button closes it", () => {
    renderWired();
    fireEvent.click(document.querySelector("#collapsed-menu"));
    // reconciliation: antd 4.24 (via rc-drawer ~6.3) renders the drawer root
    // with a "${prefixCls}-open" class driven synchronously off the `open`
    // prop (see node_modules/rc-drawer/lib/DrawerPopup.js), independent of
    // the leave-motion timer -- so ".ant-drawer-open" is present/absent in
    // lockstep with open/closed state even without advancing fake timers.
    expect(document.querySelector(".ant-drawer-open, .ant-drawer:not(.ant-drawer-hidden)")).not.toBeNull();
    fireEvent.click(document.querySelector(".ant-drawer-close"));
    expect(document.querySelector(".ant-drawer-open")).toBeNull();
  });

  test("document scroll re-selects the most visible section's nav item", () => {
    renderWired();
    const rects = {
      "sect-one": { top: -2000, bottom: -1500 }, // off-screen
      "sect-two": { top: 100, bottom: 500 }      // fully visible
    };
    for (const [id, rect] of Object.entries(rects)) {
      jest
        .spyOn(document.getElementById(id), "getBoundingClientRect")
        .mockReturnValue({ ...rect, left: 0, right: 0, width: 0, height: rect.bottom - rect.top });
    }
    act(() => {
      document.dispatchEvent(new Event("scroll"));
    });
    expect(document.querySelector("#two-btn")).toHaveClass("nav-bar-btn-selected");
  });
});
