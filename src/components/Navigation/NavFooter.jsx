import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { Typography, Divider } from "antd";
import { WidthContext } from "../../contexts";

const { Text } = Typography;

const Spacer = () => {
  return <Fragment>&nbsp;|&nbsp;</Fragment>;
};

const Footer = () => {

  const width = useContext(WidthContext);

  let sitemap;
  if (width >= 700) {
    sitemap = (
      <Fragment>
        <Text>
          <Link to="/home">Home</Link>
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
        <br/>
        <Text>
          <Link to="/career">Career</Link>
          <Spacer />
          <Link to="/education">Education</Link>
          <Spacer />
          <Link to="/projects">Projects</Link>
          <Spacer />
          <Link to="/publications">Publications</Link>
        </Text>
      </Fragment>
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
        <br />
        <Text>
          <Link to="/career">Career</Link>
          <Spacer />
          <Link to="/education">Education</Link>
          <Spacer />
          <Link to="/projects">Projects</Link>
          <Spacer />
          <Link to="/publications">Publications</Link>
        </Text>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Divider type="horizontal" />
      <Text strong>Curt Henrichs LLC © {new Date().getFullYear()}</Text>
      <br />
      <Text>Created with Reactjs and Ant Design</Text>
      <br />
      {sitemap}
    </Fragment>
  );
};

export default Footer;
