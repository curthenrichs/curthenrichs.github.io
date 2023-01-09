import React from "react";


const LinkNavButton = (props) => {
  const { id, content, route } = props;
  
  return (
    <a
      style={{ display: "block" }}
      className="nav-bar nav-bar-ext-link"
      id={id}
      href={route}
      target="_blank"
      rel="noopener noreferrer">
      {content}
    </a>
  );
};

export default LinkNavButton;