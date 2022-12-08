import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Typography, Divider } from "antd";

const { Text } = Typography;

const Spacer = () => {
  return <Fragment>&nbsp;|&nbsp;</Fragment>;
};

const Copyright = () => {
  return (
    <Fragment>
      <Divider type="horizontal" />
      <Text strong>Curt Henrichs © {new Date().getFullYear()}</Text>
      <br />
      <Text>Created with Reactjs and Ant Design</Text>
      <br />
      <Text>
        <Link to="/">Home</Link>
        <Spacer />
        <Link to="/resume">Resume</Link>
        <Spacer />
        <Link to="/terms">Terms of Use</Link>
        <Spacer />
        <Link to="/accessibility">Accessibility Policy</Link>
        <Spacer />
        <Link to="/privacy">Privacy Policy</Link>
        <Spacer />
        <Link to="/attribution">Attribution</Link>
      </Text>
    </Fragment>
  );
};

export default Copyright;
