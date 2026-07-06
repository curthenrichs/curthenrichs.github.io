import React from "react";
import { render } from "@testing-library/react";
import ThumbnailImage from "./ThumbnailImage";
import DefaultImg from "./DefaultImg";

test("no image renders the DefaultImg placeholder, not a shimmer", () => {
  const { container } = render(<ThumbnailImage img={null} />);
  const placeholder = container.querySelector("img.thumbnail-image__default");
  expect(placeholder).not.toBeNull();
  expect(placeholder.getAttribute("src")).toBe(DefaultImg);
  expect(container.querySelector(".shimmer-image")).toBeNull();
});

test("thumbnail reserves a square that shrinks inside narrow cards (no fixed 250px box)", () => {
  const { container } = render(
    <ThumbnailImage img="/static/img/thumbnail/x.jpg" />
  );
  const wrap = container.querySelector(".shimmer-image.thumbnail-image");
  expect(wrap.style.aspectRatio).toBe("1");
  expect(wrap.style.maxWidth).toBe("250px");
  expect(wrap.style.width).toBe("");
  expect(wrap.style.height).toBe("");
});

test("a set image renders a ShimmerImage thumbnail with a DefaultImg fallback", () => {
  const { container } = render(
    <ThumbnailImage img="/static/img/thumbnail/x.jpg" />
  );
  const wrap = container.querySelector(".shimmer-image.thumbnail-image");
  expect(wrap).not.toBeNull();
  expect(container.querySelector("img.shimmer-image__img").getAttribute("src")).toBe(
    "/static/img/thumbnail/x.jpg"
  );
  expect(container.querySelector("img.shimmer-image__fallback").getAttribute("src")).toBe(
    DefaultImg
  );
});
