import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col } from 'antd';
import { Typography, Divider } from 'antd';

const { Title, Text } = Typography;


function SimpleHeader(props) {

  const { pageName } = props;

  return (
    <Row align="bottom" wrap={false}>
      <Col flex="200px">
        <Title level={2} style={{overflow: 'hidden'}}><Link to="/" style={{color: "#fff"}}>Curt Henrichs</Link></Title>
      </Col>
      <Col flex="auto">
        <Divider type="vertical" style={{borderLeft: '1px solid #8f8f8f'}}/>
        <Text style={{color: '#8f8f8f', fontSize: '14px' }}>{pageName}</Text>
      </Col>
    </Row>
  );
}

export default SimpleHeader;
