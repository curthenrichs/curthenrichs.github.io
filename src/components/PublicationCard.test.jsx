import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PublicationCard from "./PublicationCard";

// Real publication content is all "Published" (see src/content/publications.js
// and listSections.test.jsx's click-through coverage), so the other status
// colors and the keyboard-activation path are only reachable with synthetic
// props here.
describe("PublicationCard status tag color", () => {
  test.each([
    ["Published", "green"],
    ["In Review", "geekblue"],
    ["In Progress", "gold"],
    ["Draft", undefined]
  ])("status '%s' renders tag color '%s'", (status, expectedColor) => {
    const { container } = render(
      <PublicationCard title="T" reference="R" status={status} />
    );
    const tag = container.querySelector(".ant-tag");
    expect(tag).toHaveTextContent(status);
    if (expectedColor) {
      expect(tag.className).toEqual(expect.stringContaining(`ant-tag-${expectedColor}`));
    } else {
      expect(tag.className).not.toMatch(/ant-tag-(green|geekblue|gold)/);
    }
  });

  test("status matching is case-insensitive", () => {
    const { container } = render(
      <PublicationCard title="T" reference="R" status="PUBLISHED" />
    );
    expect(container.querySelector(".ant-tag").className).toEqual(
      expect.stringContaining("ant-tag-green")
    );
  });
});

describe("PublicationCard keyboard activation", () => {
  test("Enter opens the link when a link is present", () => {
    const openSpy = jest.spyOn(window, "open").mockImplementation(() => {});
    render(<PublicationCard title="T" reference="R" status="Published" link="https://x.test" />);
    fireEvent.keyDown(screen.getByRole("button"), { key: "Enter" });
    expect(openSpy).toHaveBeenCalledWith("https://x.test");
    openSpy.mockRestore();
  });

  test("Enter does nothing when there is no link", () => {
    const openSpy = jest.spyOn(window, "open").mockImplementation(() => {});
    render(<PublicationCard title="T" reference="R" status="Published" />);
    fireEvent.keyDown(screen.getByRole("button"), { key: "Enter" });
    expect(openSpy).not.toHaveBeenCalled();
    openSpy.mockRestore();
  });

  test("non-Enter keys do not open the link", () => {
    const openSpy = jest.spyOn(window, "open").mockImplementation(() => {});
    render(<PublicationCard title="T" reference="R" status="Published" link="https://x.test" />);
    fireEvent.keyDown(screen.getByRole("button"), { key: "Tab" });
    expect(openSpy).not.toHaveBeenCalled();
    openSpy.mockRestore();
  });
});

test("no link renders default cursor and click is a no-op", () => {
  const openSpy = jest.spyOn(window, "open").mockImplementation(() => {});
  render(<PublicationCard title="T" reference="R" status="Published" />);
  const el = screen.getByRole("button");
  expect(el.style.cursor).toBe("default");
  fireEvent.click(el);
  expect(openSpy).not.toHaveBeenCalled();
  openSpy.mockRestore();
});
