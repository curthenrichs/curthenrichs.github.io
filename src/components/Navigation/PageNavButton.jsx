import React from "react";
import { useHistory } from "react-router-dom";


const PageNavButton = (props) => {
  const { id, content, route } = props;
  const history = useHistory();
  
  return (
    <div
      role="button"
      tabIndex="0"
      className="nav-bar nav-bar-ext-link"
      id={id}
      onClick={() => {
        history.push(route);
      }}
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          history.push(route);
        }
      }}>
      {content}
    </div>
  );
};

export default PageNavButton;