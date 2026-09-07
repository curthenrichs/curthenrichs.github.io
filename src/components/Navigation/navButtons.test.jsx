import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route, useLocation } from "react-router-dom";
import PageNavButton from "./PageNavButton";
import LinkNavButton from "./LinkNavButton";
import InnerNavButton from "./InnerNavButton";

const LocationProbe = () => <div data-testid="loc">{useLocation().pathname}</div>;

const renderPageBtn = () =>
  render(
    <MemoryRouter initialEntries={["/start"]}>
      <Routes>
        <Route path="/start" element={<PageNavButton id="go-btn" content="Go" route="/career" />} />
        <Route path="/career" element={<LocationProbe />} />
      </Routes>
    </MemoryRouter>
  );

// PageNavButton is a real link (router Link): the browser gets an href for
// hover, middle-click, and new-tab, while a plain click stays client-side.
test("PageNavButton renders an anchor with the route as href", () => {
  renderPageBtn();
  const a = screen.getByText("Go");
  expect(a.tagName).toBe("A");
  expect(a).toHaveAttribute("href", "/career");
  expect(a).toHaveAttribute("id", "go-btn");
  expect(a).toHaveClass("nav-bar", "nav-bar-ext-link");
  expect(a).not.toHaveAttribute("role");
});

test("PageNavButton navigates client-side on click", () => {
  renderPageBtn();
  fireEvent.click(screen.getByText("Go"));
  expect(screen.getByTestId("loc").textContent).toBe("/career");
});

test("InnerNavButton fires its callback on click and Enter, ignores other keys", () => {
  const cb = jest.fn();
  render(<InnerNavButton id="inner-btn" content="Inner" active={false} callback={cb} />);
  const btn = screen.getByText("Inner");
  fireEvent.click(btn);
  fireEvent.keyDown(btn, { key: "Enter" });
  fireEvent.keyDown(btn, { key: "a" });
  expect(cb).toHaveBeenCalledTimes(2);
  expect(btn).not.toHaveClass("nav-bar-btn-selected");
});

test("LinkNavButton renders a protected external anchor", () => {
  render(<LinkNavButton id="ext" content="Blog" route="https://example.com" />);
  const a = screen.getByText("Blog");
  expect(a).toHaveAttribute("href", "https://example.com");
  expect(a).toHaveAttribute("target", "_blank");
  expect(a).toHaveAttribute("rel", "noopener noreferrer");
});
