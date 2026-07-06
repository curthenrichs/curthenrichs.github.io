import React from "react";
import ShimmerImage from "./ShimmerImage";
import DefaultImg from "./DefaultImg";
import imageVariants from "../content/imageVariants.json";
import "./ThumbnailImage.css";

/**
 * Square rounded thumbnail, 250x250 at full size but shrinking with its
 * container (narrow viewports leave cards less than 250px of content width).
 * A set image loads through ShimmerImage (shimmer while downloading,
 * DefaultImg if it errors/404s). No image yet (author will add it later)
 * shows DefaultImg directly — the missing-image placeholder, kept distinct
 * from the loading shimmer.
 */
const ThumbnailImage = ({ img }) => {
  if (!img) {
    return (
      <img
        className="thumbnail-image thumbnail-image__default"
        src={DefaultImg}
        alt=""
        width={250}
        height={250}
      />
    );
  }

  const variant = imageVariants[img] && imageVariants[img].thumb;
  return (
    <ShimmerImage
      src={variant ? variant.fallback : img}
      webpSrc={variant ? variant.webp : undefined}
      alt=""
      reserve={{ aspectRatio: 1 }}
      maxWidth={250}
      objectFit="cover"
      className="thumbnail-image"
      fallbackSrc={DefaultImg}
      eager
    />
  );
};

export default ThumbnailImage;
