import React from 'react';

import data from '../content/contact';

import { GithubFilled, MailOutlined, LinkedinFilled } from '@ant-design/icons';
import { Typography } from 'antd';
const { Link } = Typography;


const SocialTray = (props) => {

  return (
    <div className="social-tray" style={{fontSize: '30px'}}>
      <Link href={data.github.link} target="_blank" rel="noopener noreferrer"><GithubFilled /></Link>
      &nbsp;
      <Link href={data.email.link} target="_blank" rel="noopener noreferrer"><MailOutlined /></Link>
      &nbsp;
      <Link href={data.linkedin.link} target="_blank" rel="noopener noreferrer"><LinkedinFilled /></Link>
    </div>
  );
};


export default SocialTray
