import React, { Fragment } from "react";
import { Divider } from "antd";
import ImageCarousel from "./ImageCarousel";
import MarkdownContent from "./MarkdownContent";

const ItemModalContent = (props) => {
  const { images, markdownPath } = props;

  let imageCarouselSect = null;
  if (images !== undefined && images !== null) {
    const carouselImgs = images.filter((obj) => (obj.carousel));

    if (carouselImgs.length > 0) {
      imageCarouselSect = (
        <Fragment>
          <div style={{ textAlign: "center" }}>
              <ImageCarousel options={carouselImgs} />
          </div>
          <Divider />
        </Fragment>
      );
    }
  }

  return (
    <Fragment>
      {imageCarouselSect}
      <MarkdownContent markdownPath={markdownPath} images={images} />
    </Fragment>
  );
};

export default ItemModalContent;
