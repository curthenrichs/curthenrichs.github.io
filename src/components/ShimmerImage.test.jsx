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

test("src change on a loaded instance returns to shimmer, then reloads on next onLoad", () => {
  const { container, rerender } = render(
    <ShimmerImage src="/a.jpg" alt="a" reserve={{ height: 500 }} />
  );
  const wrap = container.querySelector(".shimmer-image");

  fireEvent.load(container.querySelector("img.shimmer-image__img")); // image A finishes
  expect(wrap.classList.contains("loaded")).toBe(true);

  // Same instance navigates to a new, not-yet-loaded image.
  rerender(<ShimmerImage src="/b.jpg" alt="b" reserve={{ height: 500 }} />);
  expect(wrap.classList.contains("loaded")).toBe(false); // back to the shimmer

  fireEvent.load(container.querySelector("img.shimmer-image__img")); // image B finishes
  expect(wrap.classList.contains("loaded")).toBe(true); // image shows (regression guard)
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

test("without fallbackSrc, no fallback image is rendered", () => {
  const { container } = render(
    <ShimmerImage src="/a.jpg" alt="a" reserve={{ height: 500 }} />
  );
  expect(container.querySelector(".shimmer-image__fallback")).toBeNull();
});

test("with fallbackSrc, an image error shows the errored fallback", () => {
  const { container } = render(
    <ShimmerImage
      src="/broken.jpg"
      alt="x"
      reserve={{ width: 250, height: 250 }}
      fallbackSrc="data:image/png;base64,ZZZ"
    />
  );
  const wrap = container.querySelector(".shimmer-image");
  const fallback = container.querySelector("img.shimmer-image__fallback");
  expect(fallback).not.toBeNull();
  expect(fallback.getAttribute("src")).toBe("data:image/png;base64,ZZZ");
  expect(wrap.classList.contains("errored")).toBe(false);

  fireEvent.error(container.querySelector("img.shimmer-image__img"));
  expect(wrap.classList.contains("errored")).toBe(true);
  expect(wrap.classList.contains("loaded")).toBe(false);
});

test("without fallbackSrc, a complete-but-broken image drops a stale loaded class", () => {
  const spy = jest
    .spyOn(window.HTMLImageElement.prototype, "complete", "get")
    .mockReturnValue(true);
  const spyNat = jest
    .spyOn(window.HTMLImageElement.prototype, "naturalWidth", "get")
    .mockReturnValue(0); // completed with no dimensions = broken
  const { container, rerender } = render(
    <ShimmerImage src="/a.jpg" alt="a" reserve={{ height: 500 }} />
  );
  const wrap = container.querySelector(".shimmer-image");
  // Simulate the prerender snapshot leaving a stale `loaded` class on hydration.
  wrap.classList.add("loaded");
  // A src change re-runs the effect; a broken image with no fallback must still
  // strip the stale class (not leave the wrapper stuck "loaded").
  rerender(<ShimmerImage src="/b.jpg" alt="b" reserve={{ height: 500 }} />);
  expect(wrap.classList.contains("loaded")).toBe(false);
  spy.mockRestore();
  spyNat.mockRestore();
});

test("objectFit and reserve.width apply to the image and box", () => {
  const { container } = render(
    <ShimmerImage src="/a.jpg" alt="a" reserve={{ width: 250, height: 250 }} objectFit="cover" className="thumb" />
  );
  const wrap = container.querySelector(".shimmer-image");
  expect(wrap.style.width).toBe("250px");
  expect(wrap.classList.contains("thumb")).toBe(true);
  expect(container.querySelector("img.shimmer-image__img").style.objectFit).toBe("cover");
});

test("with webpSrc, renders a <picture> with a webp source and the img", () => {
  const { container } = render(
    <ShimmerImage
      src="/a.jpg"
      alt="a"
      reserve={{ height: 500 }}
      webpSrc="/a-full.webp"
    />
  );
  const picture = container.querySelector("picture");
  expect(picture).not.toBeNull();
  const source = picture.querySelector("source[type=\"image/webp\"]");
  expect(source).not.toBeNull();
  expect(source.getAttribute("srcset")).toBe("/a-full.webp");
  expect(picture.querySelector("img.shimmer-image__img").getAttribute("src")).toBe("/a.jpg");
});

test("without webpSrc, renders a bare img (no picture)", () => {
  const { container } = render(
    <ShimmerImage src="/a.jpg" alt="a" reserve={{ height: 500 }} />
  );
  expect(container.querySelector("picture")).toBeNull();
  expect(container.querySelector("img.shimmer-image__img")).not.toBeNull();
});
