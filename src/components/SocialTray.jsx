import React from "react";
import { Typography } from "antd";

import { GithubFilled, MailOutlined, LinkedinFilled, Twitter, Bluesky } from "./IconManager";

const { Link } = Typography;

const SocialTray = (props) => {
  const { githubLink, emailLink, linkedinLink, twitterLink, blueskyLink } = props;

  return (
    <div className="social-tray" style={{ fontSize: "var(--fs-icon)" }}>
      <Link href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <GithubFilled />
      </Link>
      &nbsp;
      {/* mailto: must not open a new tab -- with no mail handler it strands
          the user on a blank page; same-tab lets the browser hand off cleanly */}
      <Link href={emailLink} aria-label="Email">
        <MailOutlined />
      </Link>
      &nbsp;
      <Link href={linkedinLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <LinkedinFilled />
      </Link>
      &nbsp;
      <Link href={blueskyLink} target="_blank" rel="noopener noreferrer" aria-label="Bluesky">
        <Bluesky />
      </Link>
      &nbsp;
      <Link href={twitterLink} target="_blank" rel="noopener noreferrer" aria-label="X">
        <Twitter />
      </Link>
    </div>
  );
};

export default SocialTray;
