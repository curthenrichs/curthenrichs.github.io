import React from "react";
import { render } from "@testing-library/react";
import GlitchedHenry from "./GlitchedHenry";

test("renders an inline svg with the passed className and aria-label", () => {
  const { container } = render(<GlitchedHenry className="x" />);
  const svg = container.querySelector("svg");
  expect(svg).not.toBeNull();
  expect(svg.getAttribute("class")).toContain("x");
  expect(svg.getAttribute("aria-label")).toBe("A glitched robot");
});
