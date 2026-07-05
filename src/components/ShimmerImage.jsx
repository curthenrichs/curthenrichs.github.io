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
  const wrapRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      // Cache/instant: onLoad won't fire, so mark loaded here.
      setLoaded(true);
    } else if (wrapRef.current) {
      // A prerendered page's snapshot renders this wrapper with `loaded` (its
      // image loaded during capture). suppressHydrationWarning keeps that class,
      // and React won't repaint a className equal to its memoized value — so for
      // an image still downloading on the client, remove the stale class here
      // imperatively, letting the shimmer show until onLoad fires.
      wrapRef.current.classList.remove("loaded");
    }
  }, [src]);

  const style = {};
  if (reserve.height) style.height = `${reserve.height}px`;
  if (reserve.aspectRatio) style.aspectRatio = String(reserve.aspectRatio);
  if (maxWidth) style.maxWidth = `${maxWidth}px`;
  if (maxHeight) style.maxHeight = `${maxHeight}px`;

  return (
    <div
      ref={wrapRef}
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
