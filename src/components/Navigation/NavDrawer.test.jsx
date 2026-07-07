import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavDrawer from "./NavDrawer";
import { WidthContext } from "../../contexts";
import { BP_NAV_DRAWER_FULL } from "../../breakpoints";

const SECTIONS = [{ id: "s1", content: "SectionOne" }];
const PRIMARY = [{ id: "p1", content: "PrimaryOne", route: "/career", isLink: false }];
const SECONDARY = [{ id: "x1", content: "SecondaryOne", route: "/terms", isLink: false }];

const renderDrawer = (width, props = {}) =>
  render(
    <MemoryRouter>
      <WidthContext.Provider value={width}>
        <NavDrawer
          open
          sectionButtons={SECTIONS}
          primaryRouteButtons={PRIMARY}
          secondaryRouteButtons={SECONDARY}
          selected="s1"
          optionSelectCallback={jest.fn()}
          menuCloseCallback={jest.fn()}
          {...props}
        />
      </WidthContext.Provider>
    </MemoryRouter>
  );

test("renders all three button groups with two dividers between non-empty groups", () => {
  renderDrawer(1200);
  expect(screen.getByText("SectionOne")).toBeInTheDocument();
  expect(screen.getByText("PrimaryOne")).toBeInTheDocument();
  expect(screen.getByText("SecondaryOne")).toBeInTheDocument();
  expect(document.querySelectorAll(".ant-divider").length).toBe(2);
});

test("empty leading groups: no dividers before the only populated group", () => {
  renderDrawer(1200, { sectionButtons: null, primaryRouteButtons: null });
  expect(screen.getByText("SecondaryOne")).toBeInTheDocument();
  expect(document.querySelectorAll(".ant-divider").length).toBe(0);
});

test("drawer takes full viewport width below BP_NAV_DRAWER_FULL", () => {
  renderDrawer(BP_NAV_DRAWER_FULL - 50);
  const wrap = document.querySelector(".ant-drawer-content-wrapper");
  expect(wrap.style.width).toBe(`${BP_NAV_DRAWER_FULL - 50}px`);
});

test("drawer uses the antd default width at or above BP_NAV_DRAWER_FULL", () => {
  renderDrawer(BP_NAV_DRAWER_FULL + 200);
  const wrap = document.querySelector(".ant-drawer-content-wrapper");
  expect(wrap.style.width).not.toBe(`${BP_NAV_DRAWER_FULL + 200}px`);
});

test("close button fires menuCloseCallback", () => {
  const closeCb = jest.fn();
  renderDrawer(1200, { menuCloseCallback: closeCb });
  fireEvent.click(document.querySelector(".ant-drawer-close"));
  expect(closeCb).toHaveBeenCalled();
});
