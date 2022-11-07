import React, { useState, Fragment, useContext } from "react";
import DefaultImg from "./DefaultImg";
import { Card, Image } from "antd";
import ItemModalTemplate from "./ItemModalTemplate";
import { WidthContext } from "../contexts";


const ItemCardTemplate = (props) => {
  const [visible, setVisible] = useState(false);

  const { id, style, title, icon, img, brief, children } = props;
  //TODO need to work on alt layouts (mobile vs. desktop)

  const width = useContext(WidthContext);

  const thumbnail = (
    <Image
      style={{borderRadius: "35%"}}
      height={250}
      width={250}
      preview={false}
      src={(img) ? img : ""}
      fallback={DefaultImg}
    />
  );
  
  let layout;
  if (width >= 1000) {
    layout = null;
  } else {
    layout = (
      <Fragment>
        {thumbnail}
        <div style={{fontSize: "14px"}}>
          {brief}
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <div 
        id={id}
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
          extra={icon}
          className="type-c"
        >
          {layout}
        </Card>
      </div>
      <ItemModalTemplate 
        title={title}
        visible={visible}
        closeCallback={() => { setVisible(false); }}
        className="type-c"
      >
        {children}
      </ItemModalTemplate>
    </Fragment>
  );
};


export default ItemCardTemplate;