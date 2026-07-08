import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SectionAccessibilityPolicy from "./Accessibility";
import SectionPrivacyPolicy from "./Privacy";
import SectionTermsOfUse from "./TermsOfUse";
import SectionAttribution from "./Attribution";
import SectionContact from "./Contact";
import SectionContracting from "./Contracting";
import SectionReturnHome from "./ReturnHome";
import contactData from "../../content/contact";
import { WidthContext } from "../../contexts";

// Smoke coverage for the static prose/CTA sections. Rendering depth is
// deliberately shallow: these wrappers carry no logic beyond wiring, and the
// prerender + hydration gates exercise their real markdown end-to-end. The
// mock renders any `email` extraComponent so LegalDocument's ContactEmailLink
// wiring executes, and exposes the extraComponent keys for assertion.
jest.mock("../../components/MarkdownContent", () => {
  const M = (props) => (
    <div
      data-testid="markdown-content"
      data-path={props.markdownPath}
      data-extra={props.extraComponents ? Object.keys(props.extraComponents).join(",") : ""}
    >
      {props.extraComponents && props.extraComponents.email
        ? props.extraComponents.email()
        : null}
    </div>
  );
  M.displayName = "MarkdownContent";
  return M;
});

test.each([
  ["accessibility", SectionAccessibilityPolicy, "AccessibilityPolicy"],
  ["privacy", SectionPrivacyPolicy, "PrivacyPolicy"],
  ["terms", SectionTermsOfUse, "TermsOfUse"]
])("legal section %s renders its markdown with the email directive wired", (_, Section, mdName) => {
  render(<Section />);
  const md = screen.getByTestId("markdown-content");
  expect(md.getAttribute("data-path")).toContain(mdName);
  expect(md.getAttribute("data-extra")).toContain("email");
  // The email extraComponent rendered ContactEmailLink:
  expect(screen.getByText(contactData.email.text)).toBeInTheDocument();
});

test("attribution section renders its markdown with the icons directive wired", () => {
  render(<SectionAttribution />);
  const md = screen.getByTestId("markdown-content");
  expect(md.getAttribute("data-path")).toContain("Attribution");
  expect(md.getAttribute("data-extra")).toContain("icons");
});

test("contact section renders email, location, and protected social links", () => {
  const { container } = render(<SectionContact />);
  const email = screen.getByText(contactData.email.text).closest("a");
  expect(email).toHaveAttribute("href", contactData.email.link);
  expect(screen.getByText(contactData.location.text)).toBeInTheDocument();
  const socials = Array.from(container.querySelectorAll("a[target='_blank']"));
  const hrefs = socials.map((a) => a.getAttribute("href"));
  [contactData.github.link, contactData.linkedin.link, contactData.twitter.link].forEach(
    (link) => expect(hrefs).toContain(link)
  );
  socials.forEach((a) => expect(a).toHaveAttribute("rel", "noopener noreferrer"));
});

test("contracting section renders its header at wide and narrow widths", () => {
  const at = (width) =>
    render(
      <MemoryRouter>
        <WidthContext.Provider value={width}>
          <SectionContracting />
        </WidthContext.Provider>
      </MemoryRouter>
    );
  const { unmount } = at(1200);
  expect(
    screen.getByText("Building Real Things for Real People")
  ).toBeInTheDocument();
  unmount();
  at(500);
  expect(
    screen.getByText("Building Real Things for Real People")
  ).toBeInTheDocument();
});

test("return-home section renders the home link", () => {
  render(
    <MemoryRouter>
      <SectionReturnHome />
    </MemoryRouter>
  );
  expect(screen.getByText("Take Me Back Home").closest("a")).toHaveAttribute("href", "/");
});
