import React from "react";
import data from "../../content/contact";
import { TwitterOutlined, MailOutlined, EnvironmentFilled, GithubFilled, LinkedinFilled } from "@ant-design/icons";
import { Typography } from "antd";


const { Title, Text, Link } = Typography;


const SectionContact = () => {
  return (
    <div>

      <Title>Contact</Title>

      <br/>

      <div style={{textAlign: "center"}}>
        <div style={{fontSize: "20px", display: "inline-block", textAlign: "left"}} className="contact-details">
          <MailOutlined /> <Link href={data.email.link}>{data.email.text}</Link>
          <br/>
          <EnvironmentFilled /> <Text>{data.location.text}</Text>
        </div>
        <br/>
        <div style={{fontSize: "40px"}} className="social-tray">
          <Link href={data.github.link} target="_blank" rel="noopener noreferrer"><GithubFilled /></Link>
          &nbsp;
          <Link href={data.linkedin.link} target="_blank" rel="noopener noreferrer"><LinkedinFilled /></Link>
          &nbsp;
          <Link href={data.twitter.link}><TwitterOutlined /></Link>
        </div>
      </div>

    </div>
  );
};


export default SectionContact;
