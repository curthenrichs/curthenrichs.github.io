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
  // NOTE: the indexOf comparison below relies on each matched element's
  // textContent equaling the bare title. The position row's wrapper div has a
  // leading space (the literal {" "} between the caret icon and the Text), so
  // indexOf locks onto the leaf Text span, not the wrapper. If that markup
  // whitespace changes, prefer within()-scoping each positions list instead.
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

test("notableOnly actually excludes a non-notable project (injected entry)", () => {
  // Every live project is currently notable, which makes the data-derived
  // assertion above vacuous against a broken filter. Temporarily inject a
  // non-notable entry into the live module object (restored in finally; each
  // Jest test file gets its own module registry, so nothing leaks) to
  // exercise the exclusion path regardless of live content.
  projectData["p-drop"] = {
    id: "p-drop",
    title: "p-drop",
    type: "personal",
    brief: "",
    notable: false,
    descriptionMarkdownPath: "/md/p-drop.md",
    modalMarkdownPath: "/md/p-drop-modal.md",
    publications: [],
    skills: [],
    images: [],
    thumbnail: null,
    primaryLink: null
  };
  try {
    const { container, unmount } = render(<SectionProjects notableOnly />);
    expect(container.querySelector("#p-drop")).toBeNull();
    unmount();
    const { container: c2 } = render(<SectionProjects />);
    expect(c2.querySelector("#p-drop")).not.toBeNull();
  } finally {
    delete projectData["p-drop"];
  }
});

test("sections render their default titles and wide-viewport centering padding", () => {
  const { unmount } = render(<SectionEducation />);
  expect(screen.getByText("Education")).toBeInTheDocument();
  unmount();
  // Above BP_CONTENT_MAX_WIDTH the section pads both sides to center the
  // card column: (width - max) / 2.
  const { container } = render(
    <WidthContext.Provider value={2000}>
      <SectionCareer />
    </WidthContext.Provider>
  );
  expect(container.firstChild.style.paddingLeft).toBe("125px");
  expect(container.firstChild.style.paddingRight).toBe("125px");
});

test("project type icons: coursework maps to an icon, unknown types render none (injected entries)", () => {
  const stub = (id, type) => ({
    id,
    title: id,
    type,
    brief: "",
    notable: true,
    descriptionMarkdownPath: `/md/${id}.md`,
    modalMarkdownPath: `/md/${id}-modal.md`,
    publications: [],
    skills: [],
    images: [],
    thumbnail: null,
    primaryLink: null
  });
  projectData["p-course"] = stub("p-course", "coursework");
  projectData["p-mystery"] = stub("p-mystery", "someday-a-new-type");
  try {
    const { container } = render(<SectionProjects />);
    expect(container.querySelector("#p-course")).not.toBeNull();
    expect(container.querySelector("#p-mystery")).not.toBeNull(); // null icon must not crash the card
  } finally {
    delete projectData["p-course"];
    delete projectData["p-mystery"];
  }
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
