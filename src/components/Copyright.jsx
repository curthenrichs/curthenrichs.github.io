import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { Typography, Divider } from "antd";
import { WidthContext } from "../contexts";

const { Text } = Typography;

const Spacer = () => {
  return <Fragment>&nbsp;|&nbsp;</Fragment>;
};

const Copyright = () => {

  const width = useContext(WidthContext);

  let sitemap;
  if (width >= 700) {
    sitemap = (
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
    );
  } else {
    sitemap = (
      <Fragment>
        <br />
        <Text>
          <Link to="/">Home</Link>
          <Spacer />
          <Link to="/resume">Resume</Link>
          <Spacer />
          <Link to="/terms">Terms of Use</Link>
        </Text>
        <br />
        <Text>
          <Link to="/accessibility">Accessibility Policy</Link>
          <Spacer />
          <Link to="/privacy">Privacy Policy</Link>
          <Spacer />
          <Link to="/attribution">Attribution</Link>
        </Text>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Divider type="horizontal" />
      <Text strong>Curt Henrichs © {new Date().getFullYear()}</Text>
      <br />
      <Text>Created with Reactjs and Ant Design</Text>
      <br />
      {sitemap}
    </Fragment>
  );
};

export default Copyright;
