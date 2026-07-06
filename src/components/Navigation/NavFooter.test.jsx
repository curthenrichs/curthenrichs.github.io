import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { WidthContext } from "../../contexts";
import Footer, { packFooterLines, FOOTER_LINKS } from "./NavFooter";

const CHAR_PX = 8;
const SEP_PX = 24;

const estimatedLineWidth = (line) =>
  line.reduce(
    (sum, link, i) => sum + link.label.length * CHAR_PX + (i > 0 ? SEP_PX : 0),
    0
  );

describe("packFooterLines", () => {
  test("keeps every link exactly once, in order, at any width", () => {
    for (const width of [320, 360, 390, 700, 1280, 1920]) {
      const flat = packFooterLines(FOOTER_LINKS, width).flat();
      expect(flat.map((l) => l.to)).toEqual(FOOTER_LINKS.map((l) => l.to));
    }
  });

  test("no line's estimated width exceeds the available width", () => {
    for (let width = 320; width <= 1920; width += 20) {
      const available = Math.max(width - 100, 160);
      for (const line of packFooterLines(FOOTER_LINKS, width)) {
        // A single too-long link may exceed on its own line; multi-item lines must fit.
        if (line.length > 1) {
          expect(estimatedLineWidth(line)).toBeLessThanOrEqual(available);
        }
      }
    }
  });

  test("narrow viewports pack more lines than wide ones", () => {
    const narrow = packFooterLines(FOOTER_LINKS, 320).length;
    const wide = packFooterLines(FOOTER_LINKS, 1280).length;
    expect(narrow).toBeGreaterThan(wide);
  });
});

describe("Footer", () => {
  const renderAt = (width) =>
    render(
      <MemoryRouter>
        <WidthContext.Provider value={width}>
          <Footer />
        </WidthContext.Provider>
      </MemoryRouter>
    );

  test("renders every sitemap link once, with pipes only within lines", () => {
    const { container } = renderAt(320);
    for (const { label } of FOOTER_LINKS) {
      expect(screen.getAllByText(label)).toHaveLength(1);
    }
    const lines = packFooterLines(FOOTER_LINKS, 320);
    const pipes = (container.textContent.match(/\|/g) || []).length;
    // n links on a line -> n-1 pipes; no leading/trailing pipes anywhere.
    expect(pipes).toBe(FOOTER_LINKS.length - lines.length);
  });

  test("Home links to /home", () => {
    renderAt(320);
    expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "/home");
  });
});
