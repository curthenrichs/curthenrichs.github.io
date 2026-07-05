import React, { useState, useRef, useEffect } from "react";
import { Skeleton } from "antd";
import "./ShimmerImage.css";

/**
 * Reserved-space image with a hold-until-loaded antd shimmer. The wrapper is
 * sized up front (fixed width/height, or aspect-ratio) so nothing shifts as the
 * image downloads. The Skeleton, the real <img>, and (when `fallbackSrc` is
 * given) a fallback <img> are all always in the DOM; `loaded`/`errored` classes
 * (CSS) swap which is visible, so srcs never change and only the wrapper's
 * className differs between the prerender snapshot and the client's first
 * render — covered by suppressHydrationWarning. React won't repaint a
 * memoized-equal className during hydration, so stale `loaded`/`errored` classes
 * are dropped imperatively while (re)loading.
 */
const ShimmerImage = ({
  src,
  alt,
  reserve = {},
  maxWidth,
  maxHeight,
  eager = false,
  objectFit,
  className,
  fallbackSrc
}) => {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);
  const imgRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete) {
      if (img.naturalWidth > 0) {
        // Cache/instant, or already loaded in the hydrated snapshot.
        setLoaded(true);
        setErrored(false);
      } else if (fallbackSrc) {
        // Completed with no dimensions = broken/missing (a 404 that fired before
        // React attached onError, including during prerender). Show the fallback.
        setErrored(true);
        setLoaded(false);
      }
    } else {
      // (Re)loading: reset so a later onLoad/onError repaints even when src
      // changed on a live instance, and imperatively drop any stale loaded/errored
      // class the prerender snapshot left (React won't repaint a memoized-equal
      // className during hydration).
      setLoaded(false);
      setErrored(false);
      if (wrapRef.current) {
        wrapRef.current.classList.remove("loaded");
        wrapRef.current.classList.remove("errored");
      }
    }
  }, [src, fallbackSrc]);

  const style = {};
  if (reserve.width) style.width = `${reserve.width}px`;
  if (reserve.height) style.height = `${reserve.height}px`;
  if (reserve.aspectRatio) style.aspectRatio = String(reserve.aspectRatio);
  if (maxWidth) style.maxWidth = `${maxWidth}px`;
  if (maxHeight) style.maxHeight = `${maxHeight}px`;

  const fitStyle = objectFit ? { objectFit } : undefined;

  return (
    <div
      ref={wrapRef}
      className={
        `shimmer-image${loaded ? " loaded" : ""}${errored ? " errored" : ""}` +
        `${className ? ` ${className}` : ""}`
      }
      style={style}
      suppressHydrationWarning
    >
      <Skeleton.Image active className="shimmer-image__skeleton" />
      <img
        ref={imgRef}
        className="shimmer-image__img"
        style={fitStyle}
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        onLoad={() => {
          setLoaded(true);
          setErrored(false);
        }}
        onError={
          fallbackSrc
            ? () => {
                setErrored(true);
                setLoaded(false);
              }
            : undefined
        }
      />
      {fallbackSrc ? (
        <img
          className="shimmer-image__fallback"
          style={fitStyle}
          src={fallbackSrc}
          alt=""
          aria-hidden="true"
        />
      ) : null}
    </div>
  );
};

export default ShimmerImage;
