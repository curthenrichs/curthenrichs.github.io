import React from "react";
import { render, screen } from "@testing-library/react";
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
  // Newest-first ordering: the flattened list is rendered reversed. Career's
  // summary renders each position's start year; it is the component that
  // appears first in the DOM (Career, then Education, then Interests), so
  // the first allPositions.length matches of the year regex are Career's.
  const years = screen
    .getAllByText(/^(19|20)\d{2}$/)
    .map((el) => Number(el.textContent));
  const careerYears = years.slice(0, allPositions.length);
  const sorted = [...careerYears].sort((a, b) => b - a);
  expect(careerYears).toEqual(sorted);
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
