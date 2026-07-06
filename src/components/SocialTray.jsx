import React from "react";
import { Typography } from "antd";

import { GithubFilled, MailOutlined, LinkedinFilled, Twitter } from "./IconManager";

const { Link } = Typography;

const SocialTray = (props) => {
  const { githubLink, emailLink, linkedinLink, twitterLink } = props;

  return (
    <div className="social-tray" style={{ fontSize: "var(--fs-icon)" }}>
      <Link href={githubLink} target="_blank" rel="noopener noreferrer">
        <GithubFilled />
      </Link>
      &nbsp;
      {/* mailto: must not open a new tab -- with no mail handler it strands
          the user on a blank page; same-tab lets the browser hand off cleanly */}
      <Link href={emailLink}>
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
