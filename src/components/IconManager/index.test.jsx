import React from "react";
import { render } from "@testing-library/react";
import { Angular, Bluesky, Twitter, Menu, GithubFilled } from "./index";

// Custom SVG icons render through antd's Icon, which stamps role="img" on the
// wrapper span. Every custom icon on the site sits beside visible text or
// inside a labeled control, so they are decorative: hidden from assistive
// tech, or axe's role-img-alt rule (WCAG 1.1.1) flags each one.
test.each([
  ["Angular", Angular],
  ["Bluesky", Bluesky],
  ["Twitter", Twitter],
  ["Menu", Menu]
])("custom icon %s is decorative (aria-hidden on the role=img span)", (_, IconComponent) => {
  const { container } = render(<IconComponent />);
  const span = container.querySelector("span[role='img']");
  expect(span).not.toBeNull();
  expect(span).toHaveAttribute("aria-hidden", "true");
});

test("antd built-in icons keep their own aria-label", () => {
  const { container } = render(<GithubFilled />);
  const span = container.querySelector("span[role='img']");
  expect(span).toHaveAttribute("aria-label", "github");
});
