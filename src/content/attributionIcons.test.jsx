import React from "react";
import { render, screen } from "@testing-library/react";
import attributionIcons from "./attributionIcons";
import IconChips from "../components/IconChips";
import fs from "fs";
import path from "path";

test("attributionIcons: every group is a non-empty array of valid entries", () => {
  const groups = Object.values(attributionIcons);
  expect(groups.length).toBeGreaterThan(0);
  groups.forEach((arr) => {
    expect(Array.isArray(arr)).toBe(true);
    expect(arr.length).toBeGreaterThan(0);
    arr.forEach((entry) => {
      if (typeof entry === "string") {
        expect(entry.length).toBeGreaterThan(0);
      } else {
        expect(entry.name.length).toBeGreaterThan(0);
        expect(entry.href).toMatch(/^https?:\/\//);
      }
    });
  });
});

test("IconChips renders plain and linked chips", () => {
  render(
    <IconChips names={["plain.svg", { name: "linked.svg", href: "https://example.com/x" }]} />
  );
  expect(screen.getByText("plain.svg")).toBeInTheDocument();
  expect(screen.getByText("linked.svg").closest("a")).toHaveAttribute(
    "href",
    "https://example.com/x"
  );
});

test("IconChips renders nothing for an empty group", () => {
  const { container } = render(<IconChips names={[]} />);
  expect(container).toBeEmptyDOMElement();
});

test("every :icons directive id in Attribution.md resolves to a non-empty attributionIcons group, with no orphan groups", () => {
  const md = fs.readFileSync(
    path.join(__dirname, "markdown", "attribution", "Attribution.md"),
    "utf8"
  );
  const ids = [...md.matchAll(/:icons\[\]\{id="([^"]+)"\}/g)].map((m) => m[1]);
  expect(ids.length).toBeGreaterThan(0);
  ids.forEach((id) => {
    expect(Array.isArray(attributionIcons[id])).toBe(true);
    expect(attributionIcons[id].length).toBeGreaterThan(0);
  });
  Object.keys(attributionIcons).forEach((key) => {
    expect(ids).toContain(key);
  });
});
