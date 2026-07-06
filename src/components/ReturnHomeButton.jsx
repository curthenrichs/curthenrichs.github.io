import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const ReturnHomeButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      type="primary"
      href="/"
      shape="round"
      size="large"
      onClick={(event) => {
        // Let modifier-clicks (new tab/window) fall through to the real link
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
          return;
        }
        // Client-side navigation: a full-page load would flash the static
        // redirect stub before landing on the home page.
        event.preventDefault();
        navigate("/");
      }}
    >
      Take Me Back Home
    </Button>
  );
};

export default ReturnHomeButton;
