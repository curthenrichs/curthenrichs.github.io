import React from "react";
import { render, screen } from "@testing-library/react";
import SectionEducationPhilosophy from "./EducationPhilosophy";

// MarkdownContent pulls in react-markdown's ESM-only dependency tree, which
// CRA's Jest transform can't parse. The behavior under test is this section's
// composition (title + markdown wiring), not markdown rendering itself (that
// end-to-end path is exercised by check:hydration).
jest.mock("../../components/MarkdownContent", () => {
  const MockMarkdownContent = (props) => (
    <div data-testid="markdown-content" data-path={props.markdownPath} />
  );
  MockMarkdownContent.displayName = "MarkdownContent";
  return MockMarkdownContent;
});

test("renders the section title and wires the philosophy markdown", () => {
  render(<SectionEducationPhilosophy />);
  expect(screen.getByText("A Triple Helix")).toBeInTheDocument();
  const md = screen.getByTestId("markdown-content");
  expect(md.getAttribute("data-path")).toContain("EducationPhilosophy");
});
