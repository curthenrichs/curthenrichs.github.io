import React from "react";


const InnerNavButton = (props) => {
  const { active, id, content, callback } = props;
  
  return (
    <div
      role="button"
      tabIndex="0"
      className={`nav-bar nav-bar-btn ${active ? "nav-bar-btn-selected" : ""}`}
      id={id}
      onClick={callback}
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          callback(event);
        }
      }}>
      {content}
    </div>
  );
};

export default InnerNavButton;