import React from 'react';

import { Row, Col } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;


function SectionExperience(props) {

  return (
    <Row align="center" wrap={false}>
      <Col flex={5}>
        <div>
          <Title>Experience</Title>
        </div>
      </Col>
      <Col flex={15}>

      </Col>
    </Row>
  );
}

export default SectionExperience;
