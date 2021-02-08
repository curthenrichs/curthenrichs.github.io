import React from 'react';

import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;


function SectionProjects(props) {

  return (
    <div>
      <Title>Projects</Title>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default SectionProjects;
