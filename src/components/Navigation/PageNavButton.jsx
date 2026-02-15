import React from "react";
import { useNavigate } from "react-router-dom";


const PageNavButton = (props) => {
  const { id, content, route } = props;
  const navigate = useNavigate();

  return (
    <div
      role="button"
      tabIndex="0"
      className="nav-bar nav-bar-ext-link"
      id={id}
      onClick={() => {
        navigate(route);
      }}
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          navigate(route);
        }
      }}>
      {content}
    </div>
  );
};

export default PageNavButton;
