import React from "react";
import { Button } from "antd";

const ReturnHomeButton = () => {
  return (
    <Button 
      type="primary" 
      href="/home"
      shape="round"
      size="large"
    >
      Take Me Back Home
    </Button>
  );
};

export default ReturnHomeButton;
