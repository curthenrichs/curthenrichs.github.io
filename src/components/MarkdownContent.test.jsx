import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import MarkdownContent from "./MarkdownContent";

// react-markdown (and its remark/unified dependency tree) ships ESM-only
// builds that CRA's default Jest transform can't parse (`Unexpected token
// 'export'`). The behavior under test here is MarkdownContent's own
// `components` overrides (the `a` swap for disableLinks/internal-links, and
// the `extraComponents` merge), not react-markdown's parser itself (that
// end-to-end path is already exercised by check:hydration/puppeteer), so a
// minimal mock that resolves markdown links and `:name[]`-style directives
// against the `components` map is sufficient and keeps this a fast, isolated
// unit test. The other ESM-only imports are only ever used to build the
// (now-mocked) remarkPlugins/rehypePlugins arrays, so trivial stand-ins keep
// the module importable under Jest.
jest.mock("remark-gfm", () => () => {});
jest.mock("remark-directive", () => () => {});
jest.mock("unist-util-visit", () => ({ visit: () => {} }));
jest.mock("hastscript", () => ({ h: () => ({ tagName: "", properties: {} }) }));
jest.mock("react-markdown", () => {
  const ReactActual = require("react");
  // Matches a markdown link `[label](href)` or a directive
  // `:name[]{key="value" ...}` (attrs now parsed so `image` directives can
  // resolve against the images prop).
  const TOKEN_RE = /\[([^\]]+)\]\(([^)]+)\)|:([a-zA-Z][\w-]*)(?:\[\])?(?:\{([^}]*)\})?/g;

  return function ReactMarkdownMock({ children, components }) {
    const text = children || "";
    const parts = [];
    let lastIndex = 0;
    let key = 0;
    let match;
    while ((match = TOKEN_RE.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      if (match[1] !== undefined) {
        // Markdown link
        const label = match[1];
        const href = match[2];
        const A =
          (components && components.a) ||
          ((props) => ReactActual.createElement("a", { href: props.href }, props.children));
        parts.push(
          ReactActual.createElement(ReactActual.Fragment, { key: key++ }, A({ href, children: label }))
        );
      } else if (match[3] !== undefined) {
        const Comp = components && components[match[3]];
        if (Comp) {
          const attrs = {};
          const attrText = match[4] || "";
          const ATTR_RE = /(\w+)="([^"]*)"/g;
          let attrMatch;
          while ((attrMatch = ATTR_RE.exec(attrText)) !== null) {
            attrs[attrMatch[1]] = attrMatch[2];
          }
          parts.push(ReactActual.createElement(ReactActual.Fragment, { key: key++ }, Comp(attrs)));
        }
      }
      lastIndex = TOKEN_RE.lastIndex;
    }
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }
    return ReactActual.createElement(ReactActual.Fragment, null, ...parts);
  };
});

jest.mock("./ImageCarousel", () => {
  const M = (props) => (
    <div data-testid="image-carousel" data-ids={props.options.map((o) => o.id).join(",")} />
  );
  M.displayName = "ImageCarousel";
  return M;
});

const LINK_MARKDOWN = "[x](https://example.com)";

// Seed the prerender cache so MarkdownContent renders synchronously (no fetch).
function renderMd(path, text, extra) {
  window.__PRERENDER_MD__ = { [path]: text };
  return render(
    <MarkdownContent markdownPath={path} images={[]} extraComponents={extra} />
  );
}

afterEach(() => {
  delete window.__PRERENDER_MD__;
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

test("internal links render same-tab; external links open a new tab", async () => {
  renderMd("t1", "[in](/attribution) and [out](https://example.com)");
  const internal = (await screen.findByText("in")).closest("a");
  const external = (await screen.findByText("out")).closest("a");
  expect(internal).not.toHaveAttribute("target");
  expect(external).toHaveAttribute("target", "_blank");
  expect(external).toHaveAttribute("rel", "noopener noreferrer");
});

test("extraComponents supplies a custom directive renderer", async () => {
  renderMd("t2", "Reach me at :email[] today.", {
    email: () => <a href="mailto:x@y.z">x@y.z</a>
  });
  const link = (await screen.findByText("x@y.z")).closest("a");
  expect(link).toHaveAttribute("href", "mailto:x@y.z");
});

describe("MarkdownContent fetch/cache lifecycle", () => {
  afterEach(() => {
    delete window.__PRERENDER_MD__;
    jest.restoreAllMocks();
  });

  test("cache miss fetches the path, renders it, and records it into the cache", async () => {
    const fetchSpy = jest.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      text: () => Promise.resolve("fetched body")
    });
    render(<MarkdownContent markdownPath="/md/miss.md" images={[]} />);
    await waitFor(() => expect(screen.getByText("fetched body")).toBeInTheDocument());
    expect(fetchSpy).toHaveBeenCalledWith("/md/miss.md", expect.any(Object));
    expect(window.__PRERENDER_MD__["/md/miss.md"]).toBe("fetched body");
  });

  test("cache hit renders synchronously with zero fetches", () => {
    const fetchSpy = jest.spyOn(global, "fetch");
    window.__PRERENDER_MD__ = { "/md/hit.md": "cached body" };
    render(<MarkdownContent markdownPath="/md/hit.md" images={[]} />);
    expect(screen.getByText("cached body")).toBeInTheDocument();
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  test("non-ok response renders the error tile instead of content", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({ ok: false, status: 404 });
    const { container } = render(
      <MarkdownContent markdownPath="/md/broken.md" images={[]} />
    );
    await waitFor(() =>
      expect(container.querySelector(".markdown-error-tile")).not.toBeNull()
    );
    expect(screen.getByText(/The content wandered off/)).toBeInTheDocument();
  });

  test("rejected fetch renders the error tile", async () => {
    jest.spyOn(global, "fetch").mockRejectedValue(new TypeError("network down"));
    const { container } = render(
      <MarkdownContent markdownPath="/md/net.md" images={[]} />
    );
    await waitFor(() =>
      expect(container.querySelector(".markdown-error-tile")).not.toBeNull()
    );
  });

  test("unmount during fetch aborts the request without noise", async () => {
    const abortSpy = jest.spyOn(AbortController.prototype, "abort");
    let resolveFetch;
    jest.spyOn(global, "fetch").mockReturnValue(new Promise((r) => { resolveFetch = r; }));
    const { unmount } = render(
      <MarkdownContent markdownPath="/md/slow.md" images={[]} />
    );
    unmount();
    expect(abortSpy).toHaveBeenCalled();
    // Resolve after unmount: the AbortError path must swallow silently.
    resolveFetch({ ok: true, text: () => Promise.resolve("late") });
    await Promise.resolve();
  });

  test("markdownPath change after mount switches to the new cached content", () => {
    window.__PRERENDER_MD__ = { "/md/a.md": "alpha body", "/md/b.md": "beta body" };
    const { rerender } = render(<MarkdownContent markdownPath="/md/a.md" images={[]} />);
    expect(screen.getByText("alpha body")).toBeInTheDocument();
    rerender(<MarkdownContent markdownPath="/md/b.md" images={[]} />);
    expect(screen.getByText("beta body")).toBeInTheDocument();
    expect(screen.queryByText("alpha body")).toBeNull();
  });

  test(":image directive with a matching id renders the carousel; unmatched renders nothing", () => {
    window.__PRERENDER_MD__ = {
      "/md/img.md": 'before :image[]{id="img-x"} after :image[]{id="img-missing"} end'
    };
    render(
      <MarkdownContent
        markdownPath="/md/img.md"
        images={[{ id: "img-x", img: "/x.jpg", carousel: true }]}
      />
    );
    const carousels = screen.getAllByTestId("image-carousel");
    expect(carousels).toHaveLength(1);
    expect(carousels[0].getAttribute("data-ids")).toBe("img-x");
  });
});
