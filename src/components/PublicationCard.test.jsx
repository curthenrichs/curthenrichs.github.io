import React from "react";
import { render, fireEvent } from "@testing-library/react";
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

// A publication with a link is a real link: the browser gets an href to show
// on hover, middle-click and "open in new tab" work, and assistive tech lists
// it as a link. The old div+window.open version had none of that.
describe("PublicationCard link semantics", () => {
  test("with a link, the card is an anchor to the paper in a new tab", () => {
    const { container } = render(
      <PublicationCard title="T" reference="R" status="Published" link="https://x.test" />
    );
    const a = container.querySelector("a");
    expect(a).toHaveAttribute("href", "https://x.test");
    expect(a).toHaveAttribute("target", "_blank");
    expect(a).toHaveAttribute("rel", "noopener noreferrer");
    expect(a.querySelector(".ant-card")).not.toBeNull();
    expect(container.querySelector("[role=\"button\"]")).toBeNull();
  });

  test("the anchor does not repaint the card as link text", () => {
    const { container } = render(
      <PublicationCard title="T" reference="R" status="Published" link="https://x.test" />
    );
    // The styling lives in index.css (.card-link: block, inherit color, no
    // underline); the class is the contract this test can see under jsdom.
    expect(container.querySelector("a")).toHaveClass("card-link");
  });

  test("without a link, the card is plain: no anchor, no button role, no tab stop, default cursor", () => {
    const { container } = render(<PublicationCard title="T" reference="R" status="Published" />);
    expect(container.querySelector("a")).toBeNull();
    expect(container.querySelector("[role=\"button\"]")).toBeNull();
    expect(container.querySelector("[tabindex]")).toBeNull();
    expect(container.firstChild.style.cursor).toBe("default");
  });

  test("clicking never goes through window.open", () => {
    const openSpy = jest.spyOn(window, "open").mockImplementation(() => {});
    const { container } = render(
      <PublicationCard title="T" reference="R" status="Published" link="https://x.test" />
    );
    fireEvent.click(container.querySelector("a"));
    expect(openSpy).not.toHaveBeenCalled();
    openSpy.mockRestore();
  });
});
