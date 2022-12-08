import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ImageCarousel = (props) => {
  const { options } = props;

  return (
    <Carousel autoPlay infiniteLoop interval={5000} emulateTouch className="carousel">
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
