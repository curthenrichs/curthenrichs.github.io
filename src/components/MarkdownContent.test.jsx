import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import MarkdownContent from "./MarkdownContent";

const LINK_MARKDOWN = "[x](https://example.com)";

// react-markdown (and its remark/unified dependency tree) ships ESM-only
// builds that CRA's default Jest transform can't parse (`Unexpected token
// 'export'`). The behavior under test here is MarkdownContent's own `a`
// component swap for `disableLinks`, not react-markdown's parser itself
// (that end-to-end path is already exercised by check:hydration/puppeteer),
// so a minimal mock that resolves the `components.a` override is sufficient
// and keeps this a fast, isolated unit test. The other ESM-only imports are
// only ever used to build the (now-mocked) remarkPlugins/rehypePlugins
// arrays, so trivial stand-ins keep the module importable under Jest.
jest.mock("remark-gfm", () => () => {});
jest.mock("remark-directive", () => () => {});
jest.mock("unist-util-visit", () => ({ visit: () => {} }));
jest.mock("hastscript", () => ({ h: () => ({ tagName: "", properties: {} }) }));
jest.mock("react-markdown", () => {
  const ReactActual = require("react");
  return function ReactMarkdownMock({ children, components }) {
    const match = /^\[([^\]]+)\]\(([^)]+)\)$/.exec((children || "").trim());
    if (!match) {
      return ReactActual.createElement(ReactActual.Fragment, null, children);
    }
    const [, label, href] = match;
    const A =
      (components && components.a) ||
      ((props) => ReactActual.createElement("a", { href: props.href }, props.children));
    return A({ href, children: label });
  };
});

describe("MarkdownContent disableLinks", () => {
  let fetchSpy;

  beforeEach(() => {
    fetchSpy = jest.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      text: () => Promise.resolve(LINK_MARKDOWN)
    });
  });

  afterEach(() => {
    fetchSpy.mockRestore();
  });

  test("renders a plain span (no anchor) when disableLinks is set", async () => {
    const { container } = render(
      <MarkdownContent markdownPath="/fake/card.md" images={[]} disableLinks />
    );

    await waitFor(() => expect(screen.getByText("x")).toBeInTheDocument());
    expect(container.querySelector("a")).toBeNull();
  });

  test("renders a real link when disableLinks is not set", async () => {
    const { container } = render(
      <MarkdownContent markdownPath="/fake/detail.md" images={[]} />
    );

    await waitFor(() => expect(screen.getByText("x")).toBeInTheDocument());
    const anchor = container.querySelector("a");
    expect(anchor).not.toBeNull();
    expect(anchor.getAttribute("href")).toBe("https://example.com");
  });
});
