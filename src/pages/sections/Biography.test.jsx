import React from "react";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SectionHome from "./Biography";
import { WidthContext } from "../../contexts";
import careerData from "../../content/career";
import educationData from "../../content/education";
import bioData from "../../content/biography";

jest.mock("../../components/MarkdownContent", () => {
  const M = (props) => <div data-testid="markdown-content" data-path={props.markdownPath} />;
  M.displayName = "MarkdownContent";
  return M;
});

const renderAt = (width) =>
  render(
    <MemoryRouter>
      <WidthContext.Provider value={width}>
        <SectionHome />
      </WidthContext.Provider>
    </MemoryRouter>
  );

const allPositions = Object.values(careerData).flatMap((c) =>
  c.positions.map((p) => ({ ...p, company: c.company }))
);
const newestPosition = allPositions[allPositions.length - 1];

const currentCompany = careerData[bioData.currentEmploymentId.company];
const currentJob = currentCompany.positions.find(
  (p) => p.id === bioData.currentEmploymentId.position
);

// Biography.jsx's Education generator renders `Object.values(educationData).reverse()`,
// so the newest entry (last in module order) is the first item after
// abbreviation and the oldest (first in module order) is dropped.
const educationEntries = Object.values(educationData);
const newestEducation = educationEntries[educationEntries.length - 1];
const oldestEducation = educationEntries[0];

test("digest shows name and the current role resolved from currentEmploymentId", () => {
  renderAt(1920);
  expect(screen.getAllByText(bioData.name).length).toBeGreaterThan(0);
  expect(screen.getAllByText(currentJob.title).length).toBeGreaterThan(0);
});

test("wide layout lists every career position, newest first", () => {
  renderAt(1920);
  allPositions.forEach((p) => {
    expect(screen.getAllByText(p.title).length).toBeGreaterThan(0);
  });
  // Newest-first ordering: the flattened list is rendered reversed. Scope
  // the year lookup to the Career section itself (its heading's parent
  // element, which also contains ExpandSection's rendered position rows)
  // rather than trusting page-wide DOM order.
  const careerScope = within(
    screen.getByRole("heading", { name: "Career" }).parentElement
  );
  const years = careerScope
    .getAllByText(/^(19|20)\d{2}$/)
    .map((el) => Number(el.textContent));
  expect(years.length).toBe(allPositions.length);
  const sorted = [...years].sort((a, b) => b - a);
  expect(years).toEqual(sorted);
});

test("wide layout lists every education entry", () => {
  renderAt(1920);
  // education.js entries are flat records (title/school/start/end), unlike
  // career.js which nests positions per company -- Biography.jsx's Education
  // summary (~line 148) reads `education.title` directly off each entry.
  Object.values(educationData).forEach((e) => {
    expect(screen.getAllByText(e.title).length).toBeGreaterThan(0);
  });
});

test("narrow layout abbreviates: newest career position only, plus expand affordance", () => {
  renderAt(390);
  expect(screen.getAllByText(newestPosition.title).length).toBeGreaterThan(0);
  // Oldest position hidden while abbreviated:
  const oldest = allPositions[0];
  expect(screen.queryByText(oldest.title)).toBeNull();
  expect(document.querySelectorAll(".anticon-down-circle").length).toBeGreaterThan(0);
});

test("narrow layout abbreviates education to the newest entry only", () => {
  renderAt(390);
  expect(screen.getAllByText(newestEducation.title).length).toBeGreaterThan(0);
  expect(screen.queryByText(oldestEducation.title)).toBeNull();
});

test("narrow layout abbreviates interests to the first two entries", () => {
  renderAt(390);
  expect(screen.getAllByText(bioData.interests[0]).length).toBeGreaterThan(0);
  expect(screen.getAllByText(bioData.interests[1]).length).toBeGreaterThan(0);
  expect(screen.queryByText(bioData.interests[2])).toBeNull();
});
