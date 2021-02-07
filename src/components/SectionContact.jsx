import React from 'react';

import { PhoneFilled, MailOutlined, EnvironmentFilled } from '@ant-design/icons';

import { Row, Col } from 'antd';
import { Typography } from 'antd';

const { Title, Text, Link } = Typography;


function SectionContact(props) {

  return (
    <Row align="center" wrap={false}>
      <Col flex={5}>
        <div>
          <Title>Contact</Title>
        </div>
      </Col>
      <Col flex={15} style={{fontSize: '20px'}}>
        <MailOutlined /> <Link href="mailto:curthenrichs@gmail.com">curthenrichs@gmail.com</Link>
        <br/>
        <PhoneFilled /> <Link href="tel:+1262-422-7274">+1 262-422-7274</Link>
        <br/>
        <EnvironmentFilled /> <Text>Madison, Wisconsin, USA</Text>
      </Col>
    </Row>
  );
}

export default SectionContact;
