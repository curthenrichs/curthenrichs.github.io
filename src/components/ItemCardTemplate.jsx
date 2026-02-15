import React, { useState, Fragment, useContext } from "react";
import { WidthContext } from "../contexts";
import { BP_CARD_HORIZONTAL } from "../breakpoints";
import ThumbnailImage from "./ThumbnailImage";
import ItemModalTemplate from "./ItemModalTemplate";
import { CaretRightOutlined } from "./IconManager";
import { Row, Col, Card, Tooltip, Typography } from "antd";
import MarkdownContent from "./MarkdownContent";
import ErrorBoundary from "./ErrorBoundary";

const { Title, Text } = Typography;

const ShortCardDescription = (props) => {
  const { text } = props;
  return <Text>{text}</Text>;
};

const LongCardContent = (props) => {
  const { markdownPath, publications, positions } = props;

  let pubList = [];
  if (publications !== undefined && publications !== null) {
    pubList = publications.map((pub, idx) => {
      return (
        <div key={idx} style={{ paddingBottom: "5px" }}>
          <CaretRightOutlined /> <Text>{pub}</Text>
          <br />
        </div>
      );
    });
  }

  let pubSect = null;
  if (pubList.length > 0) {
    pubSect = (
      <Fragment>
        <Title level={5} style={{ paddingTop: "5px" }}>
          Publications
        </Title>
        <div style={{ padding: "0 20px" }}>{pubList}</div>
      </Fragment>
    );
  }

  let positionList = [];
  if (positions !== undefined && positions !== null) {
    positionList = positions.map((pos, idx) => {
      return (
        <div key={idx} style={{ paddingBottom: "5px" }}>
          <CaretRightOutlined /> <Text>{pos}</Text>
          <br />
        </div>
      );
    });
  }

  let posSect = null;
  if (positionList.length > 0) {
    posSect = (
      <Fragment>
        <Title level={5} style={{ paddingTop: "5px" }}>
          Positions
        </Title>
        <div style={{ padding: "0 20px" }}>{positionList}</div>
      </Fragment>
    );
  }

  let textSect = null;

  if (markdownPath !== undefined && markdownPath !== null) {
    textSect = <ErrorBoundary><MarkdownContent markdownPath={markdownPath} /></ErrorBoundary>;
  }

  return (
    <Fragment>
      {textSect}
      {posSect}
      {pubSect}
    </Fragment>
  );
};

const SkillTray = (props) => {
  const { skills } = props;

  return (
    <div
      style={{
        overflow: "hidden",
        backgroundColor: "var(--color-bg-alt)",
        borderRadius: "15px",
        marginTop: "10px"
      }}>
      <Tooltip title="Skills">
        <Row justify="center" style={{ padding: "2px 3px 1px 3px" }}>
          {skills.map((skill, idx) => (
            <Col key={idx}>
              <div style={{ paddingLeft: "2px", paddingRight: "2px", fontSize: "var(--fs-lg)" }}>
                {skill}
              </div>
            </Col>
          ))}
        </Row>
      </Tooltip>
    </div>
  );
};

const ItemCardTemplate = (props) => {
  const [visible, setVisible] = useState(false);
  const {
    id,
    style,
    title,
    icon,
    img,
    brief,
    descriptionMarkdownPath,
    skills,
    children,
    publications,
    positions
  } = props;
  const width = useContext(WidthContext);

  const skilltray =
    skills !== undefined && skills !== null && skills.length > 0 ? (
      <SkillTray skills={skills} />
    ) : null;

  let layout;
  if (width >= BP_CARD_HORIZONTAL) {
    layout = (
      <Fragment>
        <Row>
          <Col span={8} offset={1}>
            <ThumbnailImage img={img} />
            <div style={{ fontSize: "var(--fs-sm)" }}>
              <ShortCardDescription text={brief} />
            </div>
            {skilltray}
          </Col>
          <Col span={14} offset={1}>
            <div style={{ textAlign: "left", fontSize: "var(--fs-sm)" }}>
              <LongCardContent
                markdownPath={descriptionMarkdownPath}
                publications={publications}
                positions={positions}
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
        <div style={{ fontSize: "var(--fs-sm)" }}>{brief}</div>
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
        onClick={() => {
          setVisible(true);
        }}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            setVisible(true);
          }
        }}
        style={style}>
        <Card
          title={title}
          bordered={true}
          style={{
            textAlign: "center"
          }}
          hoverable={true}
          extra={icon}
          className="type-c">
          {layout}
        </Card>
      </div>
      <ItemModalTemplate
        title={title}
        open={visible}
        closeCallback={() => {
          setVisible(false);
        }}
        className="type-c">
        {children}
      </ItemModalTemplate>
    </Fragment>
  );
};

export default ItemCardTemplate;
