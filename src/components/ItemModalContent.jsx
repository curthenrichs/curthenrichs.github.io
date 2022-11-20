import React, { Fragment } from "react";
import { Divider } from "antd";
import MarkdownContent from "./MarkdownContent";
import ImageCarousel from "./ImageCarousel";


const ItemModalContent = (props) => {
  const { images, markdownPath } = props;

  let imageCarouselSect = null;
  if (images !== undefined && images !== null && images.length > 0) {
    imageCarouselSect = (
      <Fragment>
        <div style={{textAlign: "center"}}>
          <ImageCarousel 
            options={images}
          />
        </div>
        <Divider />
      </Fragment>
    );
  }

  return (
    <Fragment>
      {imageCarouselSect}
      <MarkdownContent
        markdownPath={markdownPath}
      />
    </Fragment>
  );
};


export default ItemModalContent;