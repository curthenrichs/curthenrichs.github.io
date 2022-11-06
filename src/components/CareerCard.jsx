import React, { useState, Fragment } from "react";
import DefaultImg from "./DefaultImg";
import CareerModal from "./CareerModal";
import { ToolFilled } from "@ant-design/icons";
import { Card, Typography, Image } from "antd";


const { Text } = Typography;


const CareerCard = (props) => {

  const { digest, style } = props;
  const { title, brief, img, job } = digest;

  const [visible, setVisible] = useState(false);

  return (
    <Fragment>
      <div 
        role="button"
        tabIndex="0"
        onClick={() => { setVisible(true); }} 
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            setVisible(true);
          }
        }} 
        style={style}
      >
        <Card
          title={title}
          bordered={true}
          style={{
            textAlign: "center"
          }}
          hoverable={true}
          extra={(<ToolFilled />)}
          className="type-c"
        >
          <Image
            style={{borderRadius: "35%"}}
            height={250}
            width={250}
            preview={false}
            src={img}
            fallback={DefaultImg}
          />
          <div style={{fontSize: "14px"}}>
            <Text>{brief}</Text>
          </div>
        </Card>
      </div>
      <CareerModal
        job={job}
        digest={digest}
        visible={visible}
        closeCallback={() => { setVisible(false); }}
        className="type-c"
      />
    </Fragment>
  );
};


export default CareerCard;
