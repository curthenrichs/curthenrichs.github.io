import React from 'react';

import { Card, Typography } from 'antd';
const { Text } = Typography;

const PublicationCard = (props) => {

  const { title, reference, link, status, style } = props;

  return (
    <div
      style={style}
      onClick={() => {
        if (link) {
          window.open(link);
        }
      }}
    >
      <Card
        title={title}
        bordered={true}
        hoverable={true}
        className="type-c"
        style={{
          paddingLeft: '3em',
          paddingRight: '2em'
        }}
      >
        <Text>{reference}</Text>
      </Card>
    </div>
  );
};

export default PublicationCard;
