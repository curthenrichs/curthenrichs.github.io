import React from "react";
import { render } from "@testing-library/react";
import SectionContact from "./Contact";
import data from "../../content/contact";

// The Contact section carries its own social strip (icon-only links). The
// custom Bluesky and X icons have no label of their own, so each anchor
// needs a name or axe's link-name rule (WCAG 2.4.4) fails on the page.
test("every social link in the contact tray has an accessible name", () => {
  const { container } = render(<SectionContact />);
  const anchors = Array.from(container.querySelectorAll(".social-tray a"));
  expect(anchors.map((a) => a.getAttribute("href"))).toEqual([
    data.github.link,
    data.linkedin.link,
    data.bluesky.link,
    data.twitter.link
  ]);
  expect(anchors.map((a) => a.getAttribute("aria-label"))).toEqual([
    "GitHub",
    "LinkedIn",
    "Bluesky",
    "X"
  ]);
});
