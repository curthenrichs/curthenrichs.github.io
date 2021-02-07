import React from 'react';

import { PhoneFilled, MailOutlined, EnvironmentFilled, GithubFilled, LinkedinFilled } from '@ant-design/icons';

import { Row, Col } from 'antd';
import { Typography } from 'antd';

import data from '../content/contact';

const { Title, Text, Link } = Typography;


function SectionContact(props) {

  return (
    <Row align="center" wrap={false}>
      <Col flex={5}>
        <div>
          <Title>Contact</Title>
        </div>
      </Col>
      <Col flex={15} style={{display: 'inline-block'}}>
        <div style={{fontSize: '20px'}} className="contact-details">
          <MailOutlined /> <Link href={data.email.link}>{data.email.text}</Link>
          <br/>
          <PhoneFilled /> <Link href={data.telephone.link}>{data.telephone.text}</Link>
          <br/>
          <EnvironmentFilled /> <Text>{data.location.text}</Text>
        </div>
        <br/>
        <div style={{fontSize: '40px', paddingLeft: "10%"}} className="social-tray">
          <Link href={data.github.link} target="_blank"><GithubFilled /></Link>
          &nbsp;
          &nbsp;
          <Link href={data.linkedin.link} target="_blank"><LinkedinFilled /></Link>
        </div>
      </Col>
    </Row>
  );
}

export default SectionContact;
