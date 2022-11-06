import React, { useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { WidthContext } from "../contexts";
import MarkdownContent from "./MarkdownContent";
import { CareerImageCarousel, GetMarkdownPathFromName } from "../content/career";
import { Modal, Divider } from "antd";


const ImageCarousel = (props) => {

  const { options } = props;

  return (
    <Carousel autoPlay infiniteLoop interval={5000} emulateTouch className="carousel">
      {options.map((entry, idx) => (
        <div key={idx} style={{display: "flex", justifyContent: "center"}}>
          <img
            src={entry["img"]}
            style={{maxHeight: "500px", maxWidth: "800px"}}
            alt={entry["alt"]}
          />
          <p className="legend">{entry["caption"]}</p>
        </div>
      ))}
    </Carousel>
  );
};


const CareerModal = (props) => {

  const { job, digest, visible, closeCallback } = props;

  const width = useContext(WidthContext);
  const modalWidth = (width > 1111) ? 1000 : width * 0.9;

  return (
    <Modal
      title={`${digest.title}`}
      centered
      visible={visible}
      width={modalWidth}
      onOk={closeCallback}
      onCancel={closeCallback}
      footer={null}
    >
      <div style={{textAlign: "center"}}>
        <ImageCarousel 
          options={CareerImageCarousel[job]}
        />
      </div>
      <Divider />
      <MarkdownContent
        markdownPath={GetMarkdownPathFromName(job)}
      />
    </Modal>
  );
};


export default CareerModal;
