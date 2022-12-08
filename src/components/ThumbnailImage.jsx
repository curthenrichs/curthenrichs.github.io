import React from "react";
import { Image } from "antd";
import DefaultImg from "./DefaultImg";

const ThumbnailImage = (props) => {
  const { img } = props;

  return (
    <Image
      style={{ borderRadius: "35%" }}
      height={250}
      width={250}
      preview={false}
      src={img ? img : ""}
      fallback={DefaultImg}
    />
  );
};

export default ThumbnailImage;
