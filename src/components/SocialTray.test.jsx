import React from "react";
import { render } from "@testing-library/react";
import SocialTray from "./SocialTray";

// SocialTray is the compact social strip under the name in Biography. Every
// external link must open in a new tab with the noopener/noreferrer guard;
// the mailto link is the deliberate exception (see comment in component).
const links = {
  githubLink: "https://github.com/example",
  emailLink: "mailto:someone@example.com",
  linkedinLink: "https://www.linkedin.com/in/example/",
  twitterLink: "https://twitter.com/example",
  blueskyLink: "https://bsky.app/profile/example.bsky.social"
};

test("renders every social link, external ones guarded and in a new tab", () => {
  const { container } = render(<SocialTray {...links} />);
  const anchors = Array.from(container.querySelectorAll("a"));
  const hrefs = anchors.map((a) => a.getAttribute("href"));
  expect(hrefs).toEqual([
    links.githubLink,
    links.emailLink,
    links.linkedinLink,
    links.blueskyLink,
    links.twitterLink
  ]);
  anchors
    .filter((a) => !a.getAttribute("href").startsWith("mailto:"))
    .forEach((a) => {
      expect(a).toHaveAttribute("target", "_blank");
      expect(a).toHaveAttribute("rel", "noopener noreferrer");
    });
});

test("mailto link opens in the same tab", () => {
  const { container } = render(<SocialTray {...links} />);
  const mail = container.querySelector(`a[href="${links.emailLink}"]`);
  expect(mail).not.toHaveAttribute("target");
});

// Icon-only links need their own name: the custom Bluesky and X icons carry
// none, so without a label those anchors fail axe's link-name rule
// (WCAG 2.4.4). Every link gets one so the tray reads consistently.
test("every social link has an accessible name", () => {
  const { container } = render(<SocialTray {...links} />);
  const labels = Array.from(container.querySelectorAll("a")).map((a) =>
    a.getAttribute("aria-label")
  );
  expect(labels).toEqual(["GitHub", "Email", "LinkedIn", "Bluesky", "X"]);
});
