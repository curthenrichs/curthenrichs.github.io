import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SectionCareer from "./Career";
import SectionEducation from "./Education";
import SectionProjects from "./Projects";
import SectionPublications from "./Publications";
import careerData from "../../content/career";
import educationData from "../../content/education";
import projectData from "../../content/projects";
import publicationData from "../../content/publications";
import detailPathByContentId from "../../content/detailPaths";
import { WidthContext } from "../../contexts";
import { BP_CARD_HORIZONTAL } from "../../breakpoints";

jest.mock("../../components/MarkdownContent", () => {
  const M = (props) => <div data-testid="markdown-content" data-path={props.markdownPath} />;
  M.displayName = "MarkdownContent";
  return M;
});

const cardAnchorIds = (container) =>
  Array.from(container.querySelectorAll("a[id]")).map((a) => a.id);

test("career section renders every entry newest-first with detail links", () => {
  const { container } = render(<SectionCareer />);
  const expected = Object.values(careerData).slice().reverse();
  expect(cardAnchorIds(container)).toEqual(expected.map((e) => e.id));
  expected.forEach((e) => {
    const anchor = container.querySelector(`a#${e.id}`);
    expect(anchor).toHaveAttribute("href", detailPathByContentId[e.id]);
  });
});

test("career cards list publication chips as 'short (venue)' and newest position first", () => {
  // Publications/positions render only in ItemCardTemplate's wide-card
  // layout (LongCardContent), gated behind WidthContext >= BP_CARD_HORIZONTAL.
  // Default WidthContext (0) renders the narrow layout, which omits both --
  // so a wide width must be supplied to exercise this content at all.
  render(
    <WidthContext.Provider value={BP_CARD_HORIZONTAL}>
      <SectionCareer />
    </WidthContext.Provider>
  );
  Object.values(careerData).forEach((e) => {
    e.publications.forEach((pubId) => {
      const pub = publicationData[pubId];
      expect(
        screen.getAllByText(`${pub.short} (${pub.venue})`).length
      ).toBeGreaterThan(0);
    });
  });
  // Newest-position-first inside a card: UW-Madison entry lists RA before TA.
  const research = careerData["career-research"];
  const titles = research.positions.map((p) => p.title).reverse();
  const all = screen.getAllByText(new RegExp(titles.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"))).map((el) => el.textContent);
  expect(all.indexOf(titles[0])).toBeLessThan(all.indexOf(titles[titles.length - 1]));
});

test("education section renders every entry newest-first with detail links", () => {
  const { container } = render(<SectionEducation title="" />);
  const expected = Object.values(educationData).slice().reverse();
  expect(cardAnchorIds(container)).toEqual(expected.map((e) => e.id));
});

test("projects section renders in module order; notableOnly filters", () => {
  const { container, unmount } = render(<SectionProjects />);
  expect(cardAnchorIds(container)).toEqual(Object.values(projectData).map((e) => e.id));
  unmount();
  const { container: c2 } = render(<SectionProjects notableOnly />);
  expect(cardAnchorIds(c2)).toEqual(
    Object.values(projectData).filter((p) => p.notable).map((e) => e.id)
  );
});

test("publications section renders a card per publication; click opens the link", () => {
  const openSpy = jest.spyOn(window, "open").mockImplementation(() => {});
  render(<SectionPublications />);
  const pubs = Object.values(publicationData);
  pubs.forEach((p) => {
    expect(screen.getByText(p.title)).toBeInTheDocument();
    expect(screen.getAllByText(p.status).length).toBeGreaterThan(0);
  });
  fireEvent.click(screen.getByText(pubs[0].title));
  expect(openSpy).toHaveBeenCalledWith(pubs[0].link);
  openSpy.mockRestore();
});
