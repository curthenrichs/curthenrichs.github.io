import React from "react";
import data from "../../content/contact";
import {
  Twitter,
  Bluesky,
  MailOutlined,
  EnvironmentFilled,
  GithubFilled,
  LinkedinFilled
} from "../../components/IconManager";
import { Typography } from "antd";

const { Title, Text, Link } = Typography;

const SectionContact = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Title level={3}>Contact</Title>

      <br />

      <div>
        <div
          style={{ fontSize: "var(--fs-xl)", display: "inline-block" }}
          className="contact-details">
          <MailOutlined /> <Link href={data.email.link}>{data.email.text}</Link>
          <br />
          <EnvironmentFilled /> <Text>{data.location.text}</Text>
        </div>
        <br />
        <div style={{ fontSize: "40px" }} className="social-tray">
          <Link href={data.github.link} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubFilled />
          </Link>
          &nbsp;
          <Link href={data.linkedin.link} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinFilled />
          </Link>
          &nbsp;
          <Link href={data.bluesky.link} target="_blank" rel="noopener noreferrer" aria-label="Bluesky">
            <Bluesky />
          </Link>
          &nbsp;
          <Link href={data.twitter.link} target="_blank" rel="noopener noreferrer" aria-label="X">
            <Twitter />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionContact;
