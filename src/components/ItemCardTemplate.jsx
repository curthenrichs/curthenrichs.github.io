import React, { useState, Fragment, useContext } from "react";
import ThumbnailImage from "./ThumbnailImage";
import { Row, Col, Card, Tooltip, Typography } from "antd";
import ItemModalTemplate from "./ItemModalTemplate";
import { WidthContext } from "../contexts";
import { CaretRightOutlined } from "@ant-design/icons";


const { Title, Text } = Typography;


const ShortCardDescription = (props) => {
  const { text } = props;
  return (
    <Text>{text}</Text>
  );
};


const LongCardContent = (props) => {
  const { text, publications } = props;

  let pubList = [];
  if (publications !== undefined && publications !== null) {
    pubList= publications.map((pub, idx) => {
      return (
        <div key={idx} style={{ paddingBottom: "5px"}}>
          <CaretRightOutlined /> <Text>{pub}</Text>
          <br/>
        </div>
      );
    });
  }

  let pubSect = undefined;
  if (pubList.length > 0) {
    pubSect = (
      <Fragment>
        <Title level={5}>Publications</Title>
        <div style={{padding: "0 20px"}}>
          {pubList}
        </div>
      </Fragment>
    );
  }

  let textSect = (
    <Fragment>
      <Text>{text}</Text>
    </Fragment>
  );

  return (
    <Fragment>
      {textSect}
      {pubSect}
    </Fragment>
  );
};


const SkillTray = (props) => {
  const { skills } = props;
    
  return (
    <div style={{overflow: "hidden", backgroundColor: "#E8E8E8", borderRadius: "15px", marginTop: "10px"}}>
      <Tooltip title="Skills">
        <Row justify="center" style={{padding: "2px 3px 1px 3px"}}>
          {skills.map((skill, idx) => (
            <Col
              key={idx}
            >
              <div style={{paddingLeft: "2px", paddingRight: "2px", fontSize: "18px"}}>{skill}</div>
            </Col>
          ))}
        </Row>
      </Tooltip>
    </div>
  );
};


const ItemCardTemplate = (props) => {

  const [visible, setVisible] = useState(false);
  const { id, style, title, icon, img, brief, long, skills, children, publications } = props;
  const width = useContext(WidthContext);

  const skilltray = (skills !== undefined && skills !== null && skills.length > 0) ? (<SkillTray skills={skills} />) : null;
  
  let layout;
  if (width >= 1000) {
    layout = (
      <Fragment>
        <Row>
          <Col span={8} offset={1}>
            <ThumbnailImage img={img} />
            <div style={{fontSize: "14px"}}>
              <ShortCardDescription text={brief}/>
            </div>
            {skilltray}
          </Col>
          <Col span={14} offset={1}>
            <div style={{textAlign: "left", fontSize: "14px"}}>
              <LongCardContent 
                text={long}
                publications={publications}
              />
            </div>
          </Col>
        </Row>
        
      </Fragment>
    );
  } else {
    layout = (
      <Fragment>
        <ThumbnailImage img={img} />
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