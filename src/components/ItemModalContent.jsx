import React, { Fragment } from "react";
import { Button, Divider } from "antd";
import ImageCarousel from "./ImageCarousel";
import MarkdownContent from "./MarkdownContent";


const PrimaryButton = (props) => {
  const { link, description, text } = props;
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      {description && (<h3><i>{description}</i></h3>)}
      
      <Button 
        type="primary" 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        shape="round"
        size="large"
      >
        {text}
      </Button>
    </div>
  );
};


const ItemModalContent = (props) => {
  const { images, markdownPath, primaryLink } = props;

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

      {(primaryLink) && (<> <PrimaryButton {...primaryLink}/> <br/></>)}

      <MarkdownContent markdownPath={markdownPath} images={images} />
    </Fragment>
  );
};

export default ItemModalContent;
