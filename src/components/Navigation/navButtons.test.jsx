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

test("PageNavButton navigates on click", () => {
  renderPageBtn();
  fireEvent.click(screen.getByText("Go"));
  expect(screen.getByTestId("loc").textContent).toBe("/career");
});

test("PageNavButton navigates on Enter", () => {
  renderPageBtn();
  fireEvent.keyDown(screen.getByText("Go"), { key: "Enter" });
  expect(screen.getByTestId("loc").textContent).toBe("/career");
});

test("PageNavButton ignores non-Enter keys", () => {
  renderPageBtn();
  fireEvent.keyDown(screen.getByText("Go"), { key: "a" });
  expect(screen.queryByTestId("loc")).toBeNull();
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
