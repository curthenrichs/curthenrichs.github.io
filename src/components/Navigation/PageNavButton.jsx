import React from "react";
import { Link } from "react-router-dom";

// A real link, not a div that calls navigate(): the browser shows the route
// on hover and middle-click / "open in new tab" work, while a plain click
// stays client-side through the router. Same classes as LinkNavButton, so
// it paints exactly as before (.nav-bar out-ranks antd's `a` color).
const PageNavButton = (props) => {
  const { id, content, route } = props;
  return (
    <Link to={route} id={id} className="nav-bar nav-bar-ext-link" style={{ display: "block" }}>
      {content}
    </Link>
  );
};

export default PageNavButton;
