import React from "react";
import { Card, Typography, Tag } from "antd";

const { Text } = Typography;

const PublicationCard = (props) => {
  const { title, reference, link, status, style } = props;

  let color = undefined;
  switch (status.toLowerCase()) {
  case "published":
    color = "green";
    break;
  case "in review":
    color = "geekblue";
    break;
  case "in progress":
    color = "gold";
    break;
  default:
    break;
  }

  const card = (
    <Card
      title={title}
      bordered={true}
      hoverable={true}
      className="type-c"
      style={{
        paddingLeft: "3em",
        paddingRight: "2em"
      }}>
      <Text>{reference}</Text>
      <br />
      <br />
      <Tag color={color}>{status}</Tag>
    </Card>
  );

  // A linked publication is a real link to the paper: href for hover,
  // middle-click, new tab, and assistive tech. .card-link (index.css) keeps
  // antd's anchor color and underline off the card text.
  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
        style={style}>
        {card}
      </a>
    );
  }
  return <div style={{ ...style, cursor: "default" }}>{card}</div>;
};

export default PublicationCard;
