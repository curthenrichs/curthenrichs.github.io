import React from "react";
import { GithubFilled, MailOutlined, LinkedinFilled, TwitterOutlined } from "@ant-design/icons";
import { Typography } from "antd";


const { Link } = Typography;


const SocialTray = (props) => {

  const { githubLink, emailLink, linkedinLink, twitterLink } = props;

  return (
    <div className="social-tray" style={{fontSize: "30px"}}>
      <Link href={githubLink} target="_blank" rel="noopener noreferrer"><GithubFilled /></Link>
      &nbsp;
      <Link href={emailLink} target="_blank" rel="noopener noreferrer"><MailOutlined /></Link>
      &nbsp;
      <Link href={linkedinLink} target="_blank" rel="noopener noreferrer"><LinkedinFilled /></Link>
      &nbsp;
      <Link href={twitterLink} target="_blank" rel="noopener noreferrer"><TwitterOutlined /></Link>
    </div>
  );
};


export default SocialTray;
