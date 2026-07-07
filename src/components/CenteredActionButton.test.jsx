import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CenteredActionButton from "./CenteredActionButton";

// Existing indirect renders (via ItemModalContent's primaryLink prop) only
// ever pass `link`, never `callback`, so the onClick branch is otherwise
// unexercised.

test("renders button text without a description by default", () => {
  render(<CenteredActionButton text="Go" />);
  expect(screen.getByRole("button", { name: "Go" })).toBeInTheDocument();
  expect(screen.queryByRole("heading")).toBeNull();
});

test("renders the description above the button when provided", () => {
  render(<CenteredActionButton text="Go" description="Read more" />);
  expect(screen.getByText("Read more")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Go" })).toBeInTheDocument();
});

test("link prop sets href, target=_blank, and rel=noopener noreferrer", () => {
  render(<CenteredActionButton text="Go" link="https://example.com" />);
  // antd's Button renders an <a> (role "link") once an href is supplied.
  const anchor = screen.getByRole("link", { name: "Go" });
  expect(anchor).toHaveAttribute("href", "https://example.com");
  expect(anchor).toHaveAttribute("target", "_blank");
  expect(anchor).toHaveAttribute("rel", "noopener noreferrer");
});

test("without a link, no href is rendered", () => {
  render(<CenteredActionButton text="Go" />);
  expect(screen.getByRole("button", { name: "Go" })).not.toHaveAttribute("href");
});

test("callback prop is invoked on click", () => {
  const callback = jest.fn();
  render(<CenteredActionButton text="Go" callback={callback} />);
  fireEvent.click(screen.getByRole("button", { name: "Go" }));
  expect(callback).toHaveBeenCalledTimes(1);
});

test("without a callback, click does not throw", () => {
  render(<CenteredActionButton text="Go" />);
  expect(() => fireEvent.click(screen.getByRole("button", { name: "Go" }))).not.toThrow();
});
