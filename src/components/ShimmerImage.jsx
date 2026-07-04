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
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // Images already complete at mount (cache) never fire onLoad.
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
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
