import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { WidthContext } from "../../contexts";
import Footer, { packFooterLines, FOOTER_LINKS } from "./NavFooter";
import { ECOSYSTEM } from "../../content/ecosystem";
import contactData from "../../content/contact";

const CHAR_PX = 8;
const SEP_PX = 24;
const ICON_PX = 20;

const itemWidth = (link) => link.label.length * CHAR_PX + (link.href ? ICON_PX : 0);
const estimatedLineWidth = (line) =>
  line.reduce((sum, link, i) => sum + itemWidth(link) + (i > 0 ? SEP_PX : 0), 0);
const keyOf = (link) => link.to || link.href;

describe("FOOTER_LINKS", () => {
  test("every entry is internal (to) or external (href), never both", () => {
    for (const link of FOOTER_LINKS) {
      expect(Boolean(link.to) !== Boolean(link.href)).toBe(true);
    }
  });

  test("the blog is not in the site map; it lives in the Ecosystem group", () => {
    expect(FOOTER_LINKS.map((l) => l.label)).not.toContain("Blog");
    expect(FOOTER_LINKS.map(keyOf)).not.toContain("/blog");
  });

  test("the resume points straight at the PDF and says so", () => {
    const resume = FOOTER_LINKS.find((l) => /resume/i.test(l.label));
    expect(resume.label).toBe("Resume (PDF)");
    expect(resume.href).toBe(contactData.resume.link);
    expect(resume.to).toBeUndefined();
  });
});

describe("packFooterLines", () => {
  test("keeps every link exactly once, in order, at any width", () => {
    for (const width of [320, 360, 390, 700, 1280, 1920]) {
      const flat = packFooterLines(FOOTER_LINKS, width).flat();
      expect(flat.map(keyOf)).toEqual(FOOTER_LINKS.map(keyOf));
    }
  });

  test("no multi-item line exceeds the available width, icon included for external links", () => {
    for (let width = 320; width <= 1920; width += 20) {
      const available = Math.max(width - 100, 160);
      for (const line of packFooterLines(FOOTER_LINKS, width)) {
        if (line.length > 1) {
          expect(estimatedLineWidth(line)).toBeLessThanOrEqual(available);
        }
      }
    }
  });

  test("an external link is packed with room for its icon", () => {
    // Two labels that fit side by side as plain text but not once one carries an icon.
    const links = [{ label: "aaaaaaaaaa", to: "/a" }, { label: "bbbbbbbbbb", href: "https://b/" }];
    const plainWidth = 2 * 10 * CHAR_PX + SEP_PX; // 184
    expect(packFooterLines(links, plainWidth + 100).length).toBe(2);
    expect(packFooterLines(links, plainWidth + 100 + ICON_PX).length).toBe(1);
  });

  test("narrow viewports pack more lines than wide ones", () => {
    expect(packFooterLines(FOOTER_LINKS, 320).length).toBeGreaterThan(packFooterLines(FOOTER_LINKS, 1280).length);
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
    const sitemapLines = packFooterLines(FOOTER_LINKS, 320);
    const pipes = (container.textContent.match(/\|/g) || []).length;
    // Sitemap: n links on a line -> n-1 pipes. Ecosystem: one line, so n-1 more.
    expect(pipes).toBe(FOOTER_LINKS.length - sitemapLines.length + (ECOSYSTEM.length - 1));
  });

  test("Home links to /home through the router", () => {
    renderAt(320);
    expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "/home");
  });

  test("the resume is an external link to the PDF, marked as leaving the site", () => {
    renderAt(1280);
    const a = screen.getByText("Resume (PDF)").closest("a");
    expect(a).toHaveAttribute("href", contactData.resume.link);
    expect(a).toHaveAttribute("target", "_blank");
    expect(a).toHaveAttribute("rel", "noopener noreferrer");
    expect(a).toHaveAccessibleName("Resume (PDF) (opens in a new tab)");
  });

  test("stacks copyright, credit, sitemap, then the Ecosystem group in that order", () => {
    const { container } = renderAt(1280);
    const text = container.textContent;
    const order = ["Curt Henrichs LLC", "Created with", "Home", "Ecosystem", "Half-Built Robots"].map((s) =>
      text.indexOf(s)
    );
    expect(order.every((i) => i >= 0)).toBe(true);
    expect([...order].sort((a, b) => a - b)).toEqual(order);
  });

  test("Ecosystem lists the blog as an external link and unshipped sites unlinked", () => {
    renderAt(1280);
    const blog = ECOSYSTEM.find((e) => e.key === "blog");
    const a = screen.getByText(blog.label).closest("a");
    expect(a).toHaveAttribute("href", contactData.blog.link);
    expect(a).toHaveAttribute("target", "_blank");
    for (const entry of ECOSYSTEM.filter((e) => !e.href)) {
      expect(screen.getByText(entry.label).closest("a")).toBeNull();
    }
  });
});
