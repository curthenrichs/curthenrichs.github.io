import React from 'react';
import { Link } from 'react-router-dom';

import { Typography , Divider } from 'antd';

const { Text, Title } = Typography;


function Copyright(props) {
  return (
    <React.Fragment>
      <Divider type="horizontal" />
      <Text strong>Curt Henrichs © 2021</Text>
      <br/>
      <Text>Created with Reactjs and Ant Design</Text>
      <br/>
      <Text>Icon attribution <Link to="/icon-licenses">here</Link></Text>
    </React.Fragment>
  );
}

export default Copyright;
