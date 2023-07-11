import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
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
      {options.map((entry, idx) => (
        <div key={idx} style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={entry["img"]}
            style={{ maxHeight: "500px", maxWidth: "800px" }}
            alt={entry["alt"]}
          />
          <p className="legend">{entry["caption"]}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
