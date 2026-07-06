import React from "react";
import { render, screen } from "@testing-library/react";
import SectionIntro from "./SectionIntro";

// MarkdownContent pulls in react-markdown's ESM-only dependency tree, which
// CRA's Jest transform can't parse. The behavior under test is this section's
// composition (title + markdown wiring), not markdown rendering itself (that
// end-to-end path is exercised by check:hydration).
jest.mock("./MarkdownContent", () => {
  const MockMarkdownContent = (props) => (
    <div data-testid="markdown-content" data-path={props.markdownPath} />
  );
  MockMarkdownContent.displayName = "MarkdownContent";
  return MockMarkdownContent;
});

test("renders the title at the given level and wires the markdown path", () => {
  render(
    <SectionIntro title="A Triple Helix" level={3} markdownPath="/md/intro.md" />
  );
  expect(
    screen.getByRole("heading", { name: "A Triple Helix", level: 3 })
  ).toBeInTheDocument();
  expect(screen.getByTestId("markdown-content").getAttribute("data-path")).toBe(
    "/md/intro.md"
  );
});

test("omits the title when none is given", () => {
  render(<SectionIntro markdownPath="/md/only.md" />);
  expect(screen.queryByRole("heading")).toBeNull();
  expect(screen.getByTestId("markdown-content")).toBeInTheDocument();
});
