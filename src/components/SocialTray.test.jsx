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
