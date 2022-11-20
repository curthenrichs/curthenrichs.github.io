import React from "react";
import data from "../../content/contact";
import { TwitterOutlined, MailOutlined, EnvironmentFilled, GithubFilled, LinkedinFilled } from "../../components/IconManager";
import { Typography } from "antd";


const { Title, Text, Link } = Typography;


const SectionContact = () => {
  return (
    <div style={{textAlign: "center"}}>

      <Title  level={3}>Contact</Title>

      <br/>

      <div>
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
          <Link href={data.twitter.link} target="_blank" rel="noopener noreferrer"><TwitterOutlined /></Link>
        </div>
      </div>

    </div>
  );
};


export default SectionContact;
