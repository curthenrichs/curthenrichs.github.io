import React from "react";
import { render, screen } from "@testing-library/react";
import ExternalLink from "./ExternalLink";

// Every link that leaves the site says so the same way: a real href (so the
// browser shows the destination on hover), a new tab with the noopener guard,
// an outward-arrow icon, and hidden text for screen readers.
test("renders a guarded new-tab anchor with the visible label", () => {
  render(<ExternalLink href="https://example.com/">Elsewhere</ExternalLink>);
  const a = screen.getByText("Elsewhere").closest("a");
  expect(a).toHaveAttribute("href", "https://example.com/");
  expect(a).toHaveAttribute("target", "_blank");
  expect(a).toHaveAttribute("rel", "noopener noreferrer");
});

test("marks the exit with an icon hidden from assistive tech and text hidden from sight", () => {
  const { container } = render(<ExternalLink href="https://example.com/">Elsewhere</ExternalLink>);
  const icon = container.querySelector(".external-link-icon");
  expect(icon).not.toBeNull();
  expect(icon).toHaveAttribute("aria-hidden", "true");
  const hidden = container.querySelector(".visually-hidden");
  expect(hidden).toHaveTextContent("opens in a new tab");
  // Accessible name = label + hidden text, no icon noise.
  expect(container.querySelector("a")).toHaveAccessibleName("Elsewhere (opens in a new tab)");
});

test("passes id, className, and style through to the anchor", () => {
  const { container } = render(
    <ExternalLink href="https://example.com/" id="x" className="nav-bar" style={{ display: "block" }}>
      E
    </ExternalLink>
  );
  const a = container.querySelector("a");
  expect(a).toHaveAttribute("id", "x");
  expect(a).toHaveClass("nav-bar");
  expect(a.style.display).toBe("block");
});
