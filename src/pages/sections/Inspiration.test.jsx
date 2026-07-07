import React from "react";
import { render, screen } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";
import SectionInspiration from "./Inspiration";
import quotes from "../../content/quotes";

test("server render (no effects) always shows quotes[0] — the prerender-deterministic behavior", () => {
  const html = renderToStaticMarkup(<SectionInspiration />);
  expect(html).toContain(quotes[0].quote);
});

test("after mount, the effect swaps to the randomly selected quote", () => {
  const k = Math.min(2, quotes.length - 1);
  const randSpy = jest.spyOn(Math, "random").mockReturnValue(k / quotes.length);
  render(<SectionInspiration />);
  expect(screen.getByText(`"${quotes[k].quote}"`)).toBeInTheDocument();
  expect(screen.getByText(`- ${quotes[k].attribution}`)).toBeInTheDocument();
  randSpy.mockRestore();
});

test("title renders by default and is suppressed when null", () => {
  const { unmount } = render(<SectionInspiration />);
  expect(screen.getByText("Inspiration")).toBeInTheDocument();
  unmount();
  render(<SectionInspiration title={null} />);
  expect(screen.queryByText("Inspiration")).toBeNull();
});
