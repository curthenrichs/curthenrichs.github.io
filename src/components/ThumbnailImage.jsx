import React from "react";
import ShimmerImage from "./ShimmerImage";
import DefaultImg from "./DefaultImg";
import "./ThumbnailImage.css";

/**
 * Square 250x250 rounded thumbnail. A set image loads through ShimmerImage
 * (shimmer while downloading, DefaultImg if it errors/404s). No image yet
 * (author will add it later) shows DefaultImg directly — the missing-image
 * placeholder, kept distinct from the loading shimmer.
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

  return (
    <ShimmerImage
      src={img}
      alt=""
      reserve={{ width: 250, height: 250 }}
      objectFit="cover"
      className="thumbnail-image"
      fallbackSrc={DefaultImg}
      eager
    />
  );
};

export default ThumbnailImage;
