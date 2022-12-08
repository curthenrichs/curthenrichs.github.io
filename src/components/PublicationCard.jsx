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

  return (
    <div
      role="button"
      tabIndex="0"
      style={style}
      onClick={() => {
        if (link) {
          window.open(link);
        }
      }}
      onKeyPress={(event) => {
        if (event.key === "Enter" && link) {
          window.open(link);
        }
      }}>
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
    </div>
  );
};

export default PublicationCard;
