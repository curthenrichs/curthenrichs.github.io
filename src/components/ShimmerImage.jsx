import React, { useState, useRef, useEffect } from "react";
import { Skeleton } from "antd";
import "./ShimmerImage.css";

/**
 * Reserved-space image with a hold-until-loaded antd shimmer. The wrapper is
 * sized up front (fixed height, or aspect-ratio) so nothing shifts as the image
 * downloads. Skeleton and <img> are both always in the DOM; a `loaded` class
 * (CSS) swaps which is visible. suppressHydrationWarning covers the prerender
 * snapshot (captured loaded) vs the client's first render (loading) — only this
 * wrapper's className differs between them.
 */
const ShimmerImage = ({ src, alt, reserve, maxWidth, maxHeight, eager = false }) => {
  // null until mounted. On hydration of a prerendered page the wrapper carries a
  // stale `loaded` class from the snapshot (kept by suppressHydrationWarning);
  // setting the real boolean here (null -> boolean always re-renders) makes React
  // reconcile that class to the client's true load state, so a still-downloading
  // image shows the shimmer instead of a blank box. Also covers cache-complete
  // images, which never fire onLoad.
  const [loaded, setLoaded] = useState(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    setLoaded(!!(img && img.complete && img.naturalWidth > 0));
  }, [src]);

  const style = {};
  if (reserve.height) style.height = `${reserve.height}px`;
  if (reserve.aspectRatio) style.aspectRatio = String(reserve.aspectRatio);
  if (maxWidth) style.maxWidth = `${maxWidth}px`;
  if (maxHeight) style.maxHeight = `${maxHeight}px`;

  return (
    <div
      className={`shimmer-image${loaded ? " loaded" : ""}`}
      style={style}
      suppressHydrationWarning
    >
      <Skeleton.Image active className="shimmer-image__skeleton" />
      <img
        ref={imgRef}
        className="shimmer-image__img"
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default ShimmerImage;
