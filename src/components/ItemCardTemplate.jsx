import React, { useState, Fragment, useContext } from "react";
import DefaultImg from "./DefaultImg";
import { Row, Col, Card, Image, Tooltip } from "antd";
import ItemModalTemplate from "./ItemModalTemplate";
import { WidthContext } from "../contexts";


const SkillTray = (props) => {
  const { skills } = props;
    
  return (
    <div style={{overflow: "hidden", backgroundColor: "#E8E8E8", borderRadius: "15px", marginTop: "10px"}}>
      <Tooltip title="Skills">
        <Row justify="center" style={{paddingTop: "2px", paddingBottom: "1px"}}>
          {skills.map((skill, idx) => (
            <Col
              key={idx}
            >
              <div style={{paddingLeft: "2px", paddingRight: "2px"}}>{skill}</div>
            </Col>
          ))}
        </Row>
      </Tooltip>
    </div>
  );
};


const ItemCardTemplate = (props) => {

  const [visible, setVisible] = useState(false);
  const { id, style, title, icon, img, brief, long, skills, children } = props;
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

  const skilltray = (skills !== undefined && skills !== null && skills.length > 0) ? (<SkillTray skills={skills} />) : null;
  
  let layout;
  if (width >= 1000) {
    layout = (
      <Fragment>
        <Row>
          <Col span={6} offset={2}>
            {thumbnail}
          </Col>
          <Col span={16}>
            <div style={{fontSize: "14px"}}>
              {long}
            </div>
          </Col>
        </Row>
        {skilltray}
      </Fragment>
    );
  } else {
    layout = (
      <Fragment>
        {thumbnail}
        <div style={{fontSize: "14px"}}>
          {brief}
        </div>
        {skilltray}
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