import React from "react";
import { render } from "@testing-library/react";
import ImageCarousel from "./ImageCarousel";
import imageDimensions from "../content/imageDimensions.json";
import imageVariants from "../content/imageVariants.json";

const shimmerProps = [];
jest.mock("./ShimmerImage", () => {
  const M = (props) => {
    globalThis.capturedShimmerProps.push(props);
    return <div data-testid="shimmer" />;
  };
  M.displayName = "ShimmerImage";
  return M;
});
// Expose the capture array to the mock factory via globalThis: jest hoists
// jest.mock above const declarations, so the factory cannot close over
// `shimmerProps` directly. Both mocks below bridge through globalThis only.
globalThis.capturedShimmerProps = shimmerProps;

jest.mock("react-responsive-carousel", () => ({
  Carousel: (props) => {
    globalThis.capturedCarouselProps = props;
    return <div data-testid="carousel">{props.children}</div>;
  }
}));

beforeEach(() => {
  shimmerProps.length = 0;
  globalThis.capturedCarouselProps = null;
});

// A real image key present in both manifests:
const REAL_IMG = Object.keys(imageDimensions).find((k) => imageVariants[k] && imageVariants[k].full);
const FAKE_IMG = "/static/img/not-in-manifest.jpg";

test("single image with manifest dims reserves its true aspect ratio", () => {
  render(<ImageCarousel options={[{ img: REAL_IMG, alt: "x", caption: "c" }]} />);
  const dims = imageDimensions[REAL_IMG];
  expect(shimmerProps[0].reserve).toEqual({ aspectRatio: dims.w / dims.h });
});

test("single image without manifest dims falls back to fixed height", () => {
  render(<ImageCarousel options={[{ img: FAKE_IMG, alt: "x", caption: "c" }]} />);
  expect(shimmerProps[0].reserve).toEqual({ height: 500 });
});

test("multi-image carousel letterboxes every slide and shows thumbs/indicators", () => {
  render(
    <ImageCarousel
      options={[
        { img: REAL_IMG, alt: "x", caption: "c1" },
        { img: FAKE_IMG, alt: "y", caption: "c2" }
      ]}
    />
  );
  expect(shimmerProps[0].reserve).toEqual({ height: 500 });
  expect(shimmerProps[1].reserve).toEqual({ height: 500 });
  expect(globalThis.capturedCarouselProps.showThumbs).toBe(true);
  expect(globalThis.capturedCarouselProps.showIndicators).toBe(true);
});

test("single-image carousel hides thumbs and indicators", () => {
  render(<ImageCarousel options={[{ img: FAKE_IMG, alt: "x", caption: "c" }]} />);
  expect(globalThis.capturedCarouselProps.showThumbs).toBe(false);
  expect(globalThis.capturedCarouselProps.showIndicators).toBe(false);
});

test("webp variant wiring: manifest image gets fallback src + webpSrc; unknown image raw src", () => {
  render(
    <ImageCarousel
      options={[
        { img: REAL_IMG, alt: "x", caption: "c1" },
        { img: FAKE_IMG, alt: "y", caption: "c2" }
      ]}
    />
  );
  const variant = imageVariants[REAL_IMG].full;
  expect(shimmerProps[0].src).toBe(variant.fallback);
  expect(shimmerProps[0].webpSrc).toBe(variant.webp);
  expect(shimmerProps[1].src).toBe(FAKE_IMG);
  expect(shimmerProps[1].webpSrc).toBeUndefined();
});

test("only the first slide loads eagerly", () => {
  render(
    <ImageCarousel
      options={[
        { img: REAL_IMG, alt: "x", caption: "c1" },
        { img: FAKE_IMG, alt: "y", caption: "c2" }
      ]}
    />
  );
  expect(shimmerProps[0].eager).toBe(true);
  expect(shimmerProps[1].eager).toBe(false);
});
