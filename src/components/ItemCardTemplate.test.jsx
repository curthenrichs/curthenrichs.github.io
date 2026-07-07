import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ItemCardTemplate from "./ItemCardTemplate";
import { WidthContext } from "../contexts";
import { BP_CARD_HORIZONTAL } from "../breakpoints";

jest.mock("./MarkdownContent", () => {
  const M = (props) => <div data-testid="markdown-content" data-path={props.markdownPath} />;
  M.displayName = "MarkdownContent";
  return M;
});

// React attaches its handlers on the render root, so a document-level bubble
// listener runs AFTER the component's onClick. It records whether the
// component prevented default, then prevents it unconditionally so jsdom
// never attempts (unimplemented) anchor navigation.
const seenDefaultPrevented = [];
const stopNav = (e) => {
  seenDefaultPrevented.push(e.defaultPrevented);
  e.preventDefault();
};
beforeEach(() => {
  seenDefaultPrevented.length = 0;
  document.addEventListener("click", stopNav);
});
afterEach(() => document.removeEventListener("click", stopNav));

const renderCard = (extraProps = {}) =>
  render(
    <ItemCardTemplate
      id="card-x"
      title="Card X"
      brief="brief text"
      descriptionMarkdownPath="/md/brief.md"
      skills={["python", "python", "ros"]}
      detailPath="/projects/x"
      {...extraProps}
    >
      <div data-testid="modal-children">modal body</div>
    </ItemCardTemplate>
  );

test("renders a real link to the detail path", () => {
  renderCard();
  expect(document.querySelector("a#card-x")).toHaveAttribute("href", "/projects/x");
});

test("plain click prevents navigation and opens the modal", () => {
  renderCard();
  expect(screen.queryByTestId("modal-children")).toBeNull(); // destroyOnClose
  fireEvent.click(document.querySelector("a#card-x"));
  expect(seenDefaultPrevented[0]).toBe(true);
  expect(screen.getByTestId("modal-children")).toBeInTheDocument();
});

test.each([["ctrlKey"], ["metaKey"], ["shiftKey"], ["altKey"]])(
  "%s+click falls through to the link (no modal, default not prevented)",
  (mod) => {
    renderCard();
    fireEvent.click(document.querySelector("a#card-x"), { [mod]: true });
    expect(seenDefaultPrevented[0]).toBe(false);
    expect(screen.queryByTestId("modal-children")).toBeNull();
  }
);

test("without detailPath: button-role wrapper opens modal on click and Enter", () => {
  renderCard({ detailPath: undefined });
  const wrapper = document.querySelector("div#card-x[role='button']");
  expect(wrapper).not.toBeNull();
  fireEvent.click(wrapper);
  expect(screen.getByTestId("modal-children")).toBeInTheDocument();
});

test("Enter key opens the modal on the button-role wrapper", () => {
  renderCard({ detailPath: undefined });
  fireEvent.keyDown(document.querySelector("div#card-x[role='button']"), { key: "Enter" });
  expect(screen.getByTestId("modal-children")).toBeInTheDocument();
});

test("closing the modal hides the children again", () => {
  renderCard();
  fireEvent.click(document.querySelector("a#card-x"));
  expect(screen.getByTestId("modal-children")).toBeInTheDocument();
  fireEvent.click(document.querySelector(".ant-modal-close"));
  expect(screen.queryByTestId("modal-children")).toBeNull();
});

test("preloadImages constructs each image exactly once across repeated hovers", () => {
  const constructed = [];
  const RealImage = global.Image;
  global.Image = class {
    set src(v) { constructed.push(v); }
  };
  try {
    renderCard({ preloadImages: ["/img/a.jpg", "/img/b.jpg"] });
    const anchor = document.querySelector("a#card-x");
    fireEvent.mouseEnter(anchor);
    fireEvent.mouseEnter(anchor);
    fireEvent.focus(anchor);
    expect(constructed).toEqual(["/img/a.jpg", "/img/b.jpg"]);
  } finally {
    global.Image = RealImage;
  }
});

test("skills tray dedupes icons and skips unknown skill ids without throwing", () => {
  renderCard({ skills: ["python", "python", "definitely-not-a-skill"] });
  // python maps to one icon; the unknown id contributes nothing.
  expect(document.querySelectorAll(".ant-row .ant-col").length).toBe(1);
});

describe("wide layout (>= BP_CARD_HORIZONTAL)", () => {
  const renderWideCard = (extraProps = {}) =>
    render(
      <WidthContext.Provider value={BP_CARD_HORIZONTAL}>
        <ItemCardTemplate
          id="card-wide"
          title="Card Wide"
          brief="brief text"
          descriptionMarkdownPath="/md/brief.md"
          skills={["python"]}
          detailPath="/projects/wide"
          publications={["Publication One", "Publication Two"]}
          positions={["Position One"]}
          {...extraProps}
        >
          <div data-testid="modal-children">modal body</div>
        </ItemCardTemplate>
      </WidthContext.Provider>
    );

  test("renders short description, publications, and positions in the horizontal layout", () => {
    renderWideCard();
    expect(screen.getByText("brief text")).toBeInTheDocument();
    expect(screen.getByText("Publications")).toBeInTheDocument();
    expect(screen.getByText("Positions")).toBeInTheDocument();
    expect(screen.getByText("Publication One")).toBeInTheDocument();
    expect(screen.getByText("Position One")).toBeInTheDocument();
    expect(screen.getByTestId("markdown-content")).toHaveAttribute("data-path", "/md/brief.md");
  });

  test("omits publications/positions sections and markdown when not provided", () => {
    renderWideCard({ publications: undefined, positions: undefined, descriptionMarkdownPath: undefined });
    expect(screen.queryByText("Publications")).toBeNull();
    expect(screen.queryByText("Positions")).toBeNull();
    expect(screen.queryByTestId("markdown-content")).toBeNull();
  });
});
