import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavHeader from "./NavHeader";
import { WidthContext } from "../../contexts";
import { BP_NAV_HEADER_TEXT } from "../../breakpoints";

const SECTIONS = [
  { id: "sect-a-btn", flexPx: 150, content: "Alpha" },
  { id: "sect-b-btn", flexPx: 150, content: "Beta" }
];

const renderHeader = (width, props = {}) =>
  render(
    <MemoryRouter>
      <WidthContext.Provider value={width}>
        <NavHeader
          simple
          pageName="TestPage"
          sectionButtons={SECTIONS}
          selected="sect-a-btn"
          optionSelectCallback={jest.fn()}
          collapseWidth={800}
          menuClickedCallback={jest.fn()}
          {...props}
        />
      </WidthContext.Provider>
    </MemoryRouter>
  );

test("simple mode shows the page name at wide widths and hides it below the breakpoint", () => {
  renderHeader(BP_NAV_HEADER_TEXT + 100);
  expect(screen.getByText("TestPage")).toBeInTheDocument();
});

test("simple mode below BP_NAV_HEADER_TEXT drops the page name but keeps the menu", () => {
  renderHeader(BP_NAV_HEADER_TEXT - 100);
  expect(screen.queryByText("TestPage")).toBeNull();
  expect(document.querySelector("#collapsed-menu")).not.toBeNull();
});

test("non-simple wide: section buttons render, selection class applied, clicks call back", () => {
  const cb = jest.fn();
  renderHeader(1200, { simple: false, optionSelectCallback: cb });
  const alpha = screen.getByText("Alpha").closest("div[role='button']");
  expect(alpha).toHaveClass("nav-bar-btn-selected");
  fireEvent.click(screen.getByText("Beta").closest("div[role='button']"));
  // InnerNavButton wires `callback` straight to onClick, so the callback
  // receives the click EVENT (not the section entry). Pin which button was
  // clicked via the event, not the (incorrect) entry-object shape.
  expect(cb).toHaveBeenCalledTimes(1);
  const event = cb.mock.calls[0][0];
  expect(event.target.closest("[id]").id).toBe("sect-b-btn");
});

test("non-simple below collapseWidth: section buttons collapse away, menu remains", () => {
  renderHeader(700, { simple: false });
  expect(screen.queryByText("Alpha")).toBeNull();
  expect(document.querySelector("#collapsed-menu")).not.toBeNull();
});

test("menu button fires on click and on Enter", () => {
  const menuCb = jest.fn();
  renderHeader(1200, { menuClickedCallback: menuCb });
  const menu = document.querySelector("#collapsed-menu");
  fireEvent.click(menu);
  fireEvent.keyDown(menu, { key: "Enter" });
  expect(menuCb).toHaveBeenCalledTimes(2);
});
