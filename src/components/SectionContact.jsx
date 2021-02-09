import React from 'react';

import { PhoneFilled, MailOutlined, EnvironmentFilled, GithubFilled, LinkedinFilled } from '@ant-design/icons';

import { Row, Col } from 'antd';
import { Typography } from 'antd';

import data from '../content/contact';

const { Title, Text, Link } = Typography;


function Details(props) {
  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '20px', display: 'inline-block', textAlign: 'left'}} className="contact-details">
        <MailOutlined /> <Link href={data.email.link}>{data.email.text}</Link>
        <br/>
        <PhoneFilled /> <Link href={data.telephone.link}>{data.telephone.text}</Link>
        <br/>
        <EnvironmentFilled /> <Text>{data.location.text}</Text>
      </div>
      <br/>
      <div style={{fontSize: '40px'}} className="social-tray">
        <Link href={data.github.link} target="_blank" rel="noopener noreferrer"><GithubFilled /></Link>
        &nbsp;
        <Link href={data.linkedin.link} target="_blank" rel="noopener noreferrer"><LinkedinFilled /></Link>
      </div>
    </div>
  );
}


function SectionContact(props) {
  return (
    <div>
      <Title>Contact</Title>
      <br/>
      <Details />
    </div>
  );
}

export default SectionContact;
