import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ExpandSection from "./index";

const generator = (expand) => ({
  shouldCollapse: true,
  children: (expand ? ["a", "b", "c", "d"] : ["a", "b"]).map((t) => (
    <div key={t} data-testid={`item-${t}`}>{t}</div>
  ))
});

test("collapsed: abbreviated children render and the last one fades out", () => {
  render(<ExpandSection generator={generator} />);
  expect(screen.getByTestId("item-a")).toBeInTheDocument();
  expect(screen.getByTestId("item-b")).toHaveClass("fade-out");
  expect(screen.getByTestId("item-a")).not.toHaveClass("fade-out");
  expect(screen.queryByTestId("item-c")).toBeNull();
});

test("expand click renders the full set; collapse click returns to abbreviated", () => {
  render(<ExpandSection generator={generator} />);
  fireEvent.click(screen.getByRole("button"));
  expect(screen.getByTestId("item-d")).toBeInTheDocument();
  expect(screen.getByTestId("item-d")).not.toHaveClass("fade-out"); // expanded: no fade
  fireEvent.click(screen.getByRole("button"));
  expect(screen.queryByTestId("item-c")).toBeNull();
});

test("shouldCollapse false: all children, no fade, no button", () => {
  const flat = () => ({
    shouldCollapse: false,
    children: ["a", "b"].map((t) => <div key={t} data-testid={`item-${t}`}>{t}</div>)
  });
  render(<ExpandSection generator={flat} />);
  expect(screen.getByTestId("item-b")).not.toHaveClass("fade-out");
  expect(screen.queryByRole("button")).toBeNull();
});
