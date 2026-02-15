import React, { Fragment } from "react";
import { Divider } from "antd";
import ImageCarousel from "./ImageCarousel";
import MarkdownContent from "./MarkdownContent";
import ErrorBoundary from "./ErrorBoundary";

const ItemModalContent = (props) => {
  const { images, markdownPath } = props;

  let imageCarouselSect = null;
  if (images !== undefined && images !== null && images.length > 0) {
    imageCarouselSect = (
      <Fragment>
        <div style={{ textAlign: "center" }}>
          <ImageCarousel options={images} />
        </div>
        <Divider />
      </Fragment>
    );
  }

  return (
    <Fragment>
      {imageCarouselSect}
      <ErrorBoundary>
        <MarkdownContent markdownPath={markdownPath} />
      </ErrorBoundary>
    </Fragment>
  );
};

export default ItemModalContent;
