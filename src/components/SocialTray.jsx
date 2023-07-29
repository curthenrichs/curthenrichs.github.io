import React from "react";
import { Typography } from "antd";

import { GithubFilled, MailOutlined, LinkedinFilled, Twitter } from "./IconManager";

const { Link } = Typography;

const SocialTray = (props) => {
  const { githubLink, emailLink, linkedinLink, twitterLink } = props;

  return (
    <div className="social-tray" style={{ fontSize: "30px" }}>
      <Link href={githubLink} target="_blank" rel="noopener noreferrer">
        <GithubFilled />
      </Link>
      &nbsp;
      <Link href={emailLink} target="_blank" rel="noopener noreferrer">
        <MailOutlined />
      </Link>
      &nbsp;
      <Link href={linkedinLink} target="_blank" rel="noopener noreferrer">
        <LinkedinFilled />
      </Link>
      &nbsp;
      <Link href={twitterLink} target="_blank" rel="noopener noreferrer">
        <Twitter />
      </Link>
    </div>
  );
};

export default SocialTray;
