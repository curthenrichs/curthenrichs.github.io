import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ShimmerImage from "../ShimmerImage";
import imageDimensions from "../../content/imageDimensions.json";
import imageVariants from "../../content/imageVariants.json";
import "./index.css";

const ImageCarousel = (props) => {
  const { options, showArrows } = props;

  return (
    <Carousel 
      autoPlay 
      infiniteLoop 
      interval={5000} 
      emulateTouch 
      className="carousel"
      stopOnHover={true}
      showStatus={false}
      showArrows={showArrows}
      showThumbs={options.length > 1}
      showIndicators={options.length > 1}
    >
      {options.map((entry, idx) => {
        const dims = imageDimensions[entry.img];
        // Multi-image carousels use a constant slide height (letterbox) so the
        // carousel never changes height between slides. A single image reserves
        // its true aspect ratio (falling back to fixed height without dims).
        const reserve =
          options.length === 1 && dims
            ? { aspectRatio: dims.w / dims.h }
            : { height: 500 };
        const variant = imageVariants[entry.img] && imageVariants[entry.img].full;
        return (
          <div key={idx} style={{ display: "flex", justifyContent: "center" }}>
            <ShimmerImage
              src={variant ? variant.fallback : entry["img"]}
              webpSrc={variant ? variant.webp : undefined}
              alt={entry["alt"]}
              reserve={reserve}
              maxWidth={800}
              maxHeight={500}
              eager={idx === 0}
            />
            <p className="legend">{entry["caption"]}</p>
          </div>
        );
      })}
    </Carousel>
  );
};

export default ImageCarousel;
