import React from "react";
import data from "../content/contact";
import { GithubFilled, MailOutlined, LinkedinFilled, TwitterOutlined } from "@ant-design/icons";
import { Typography } from "antd";


const { Link } = Typography;


const SocialTray = () => {

  return (
    <div className="social-tray" style={{fontSize: "30px"}}>
      <Link href={data.github.link} target="_blank" rel="noopener noreferrer"><GithubFilled /></Link>
      &nbsp;
      <Link href={data.email.link} target="_blank" rel="noopener noreferrer"><MailOutlined /></Link>
      &nbsp;
      <Link href={data.linkedin.link} target="_blank" rel="noopener noreferrer"><LinkedinFilled /></Link>
      &nbsp;
      <Link href={data.twitter.link} target="_blank" rel="noopener noreferrer"><TwitterOutlined /></Link>
    </div>
  );
};


export default SocialTray;
