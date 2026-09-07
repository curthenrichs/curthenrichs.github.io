import React from "react";
import ExternalLink from "../ExternalLink";

const LinkNavButton = (props) => {
  const { id, content, route } = props;
  return (
    <ExternalLink href={route} id={id} className="nav-bar nav-bar-ext-link" style={{ display: "block" }}>
      {content}
    </ExternalLink>
  );
};

export default LinkNavButton;
