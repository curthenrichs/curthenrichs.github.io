import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Typography , Divider } from "antd";


const { Text } = Typography;


const Copyright = () => {
  return (
    <Fragment>
      <Divider type="horizontal" />
      <Text strong>Curt Henrichs © 2022</Text>
      <br/>
      <Text>Created with Reactjs and Ant Design</Text>
      <br/>
      <Text>Icon attribution <Link to="/icon-licenses">here</Link></Text>
    </Fragment>
  );
};


export default Copyright;
