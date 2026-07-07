import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SectionSkills from "./index";
import DomainCards from "./DomainCards";
import { WidthContext } from "../../../contexts";
import { BP_CARD_HORIZONTAL } from "../../../breakpoints";
import skillsData from "../../../content/skills";
import { domains } from "../../../content/domains";

// framer-motion animates SkillTags; passthrough keeps jsdom fast and quiet.
jest.mock("framer-motion", () => ({
  motion: new Proxy({}, { get: () => (props) => <div>{props.children}</div> }),
  AnimatePresence: ({ children }) => <>{children}</>,
  LayoutGroup: ({ children }) => <>{children}</>
}));

const renderAt = (node, width = 1920) =>
  render(<WidthContext.Provider value={width}>{node}</WidthContext.Provider>);

test("defaults to Overview and switches views via the radio buttons", () => {
  const { container } = renderAt(<SectionSkills />);
  expect(container.querySelector(".overview-grid")).not.toBeNull();
  fireEvent.click(screen.getByText("Domains"));
  expect(container.querySelectorAll(".ant-card").length).toBe(domains.length);
  fireEvent.click(screen.getByText("Technologies"));
  expect(container.querySelector(".overview-grid")).toBeNull();
});

test("clicking an overview domain card navigates to the Domains view", () => {
  const { container } = renderAt(<SectionSkills />);
  fireEvent.click(container.querySelector(".overview-domain-card"));
  expect(container.querySelectorAll(".ant-card").length).toBe(domains.length);
});

test("pressing Enter or Space on an overview domain card navigates to the Domains view", () => {
  const { container } = renderAt(<SectionSkills />);
  fireEvent.keyDown(container.querySelector(".overview-domain-card"), { key: "Enter" });
  expect(container.querySelectorAll(".ant-card").length).toBe(domains.length);
});

test("pressing Space on an overview domain card navigates to the Domains view", () => {
  const { container } = renderAt(<SectionSkills />);
  fireEvent.keyDown(container.querySelector(".overview-domain-card"), { key: " " });
  expect(container.querySelectorAll(".ant-card").length).toBe(domains.length);
});

test("pressing an unrelated key on an overview domain card does not navigate", () => {
  const { container } = renderAt(<SectionSkills />);
  fireEvent.keyDown(container.querySelector(".overview-domain-card"), { key: "Tab" });
  expect(container.querySelector(".overview-grid")).not.toBeNull();
  expect(container.querySelectorAll(".ant-card").length).toBe(0);
});

test("SkillTags shows all skills by default and filters by category", () => {
  renderAt(<SectionSkills />);
  fireEvent.click(screen.getByText("Technologies"));
  skillsData.slice(0, 3).forEach((s) => {
    expect(screen.getAllByText(s.name).length).toBeGreaterThan(0);
  });
  fireEvent.click(screen.getByText("Languages"));
  const languages = skillsData.filter((s) => s.category === "language");
  languages.slice(0, 3).forEach((s) => {
    expect(screen.getAllByText(s.name).length).toBeGreaterThan(0);
  });
  const nonLanguage = skillsData.find((s) => s.category !== "language");
  expect(screen.queryByText(nonLanguage.name)).toBeNull();
  fireEvent.click(screen.getByText("All"));
  expect(screen.getAllByText(nonLanguage.name).length).toBeGreaterThan(0);
});

test("DomainCards renders every domain with its resolved skill chips", () => {
  renderAt(<DomainCards />);
  const skillsById = Object.fromEntries(skillsData.map((s) => [s.id, s]));
  domains.forEach((d) => {
    expect(screen.getAllByText(d.title).length).toBeGreaterThan(0);
    d.skillIds.slice(0, 2).forEach((sid) => {
      expect(screen.getAllByText(skillsById[sid].name).length).toBeGreaterThan(0);
    });
  });
});

test("DomainCards spans half-width columns wide and full-width narrow", () => {
  const { container, unmount } = renderAt(<DomainCards />, BP_CARD_HORIZONTAL + 100);
  expect(container.querySelector(".ant-col-12")).not.toBeNull();
  unmount();
  const { container: c2 } = renderAt(<DomainCards />, BP_CARD_HORIZONTAL - 100);
  expect(c2.querySelector(".ant-col-24")).not.toBeNull();
});
