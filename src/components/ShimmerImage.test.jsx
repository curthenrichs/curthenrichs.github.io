import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ShimmerImage from "./ShimmerImage";

test("starts unloaded (shimmer + img both present), becomes loaded on img load", () => {
  const { container } = render(
    <ShimmerImage src="/static/img/x.jpg" alt="x" reserve={{ height: 500 }} maxWidth={800} />
  );
  const wrap = container.querySelector(".shimmer-image");
  const img = container.querySelector("img.shimmer-image__img");
  // Structure stable: wrapper, an img, and a skeleton element all present up front.
  expect(wrap).not.toBeNull();
  expect(img).not.toBeNull();
  expect(container.querySelector(".shimmer-image__skeleton")).not.toBeNull();
  expect(wrap.classList.contains("loaded")).toBe(false);

  fireEvent.load(img);
  expect(wrap.classList.contains("loaded")).toBe(true);
});

test("reserve.height sets a fixed box height; reserve.aspectRatio sets aspect-ratio", () => {
  const fixed = render(
    <ShimmerImage src="/a.jpg" alt="a" reserve={{ height: 500 }} />
  ).container.querySelector(".shimmer-image");
  expect(fixed.style.height).toBe("500px");

  const aspect = render(
    <ShimmerImage src="/b.jpg" alt="b" reserve={{ aspectRatio: 1.5 }} />
  ).container.querySelector(".shimmer-image");
  expect(aspect.style.aspectRatio).toBe("1.5");
});

test("an already-complete image (cache) starts loaded", () => {
  const spy = jest
    .spyOn(window.HTMLImageElement.prototype, "complete", "get")
    .mockReturnValue(true);
  const spyNat = jest
    .spyOn(window.HTMLImageElement.prototype, "naturalWidth", "get")
    .mockReturnValue(100);
  const { container } = render(
    <ShimmerImage src="/c.jpg" alt="c" reserve={{ height: 500 }} />
  );
  expect(container.querySelector(".shimmer-image").classList.contains("loaded")).toBe(true);
  spy.mockRestore();
  spyNat.mockRestore();
});
