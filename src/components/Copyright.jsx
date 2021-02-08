import React from 'react';

import { Typography , Divider } from 'antd';

const { Text, Title } = Typography;


function Copyright(props) {
  return (
    <React.Fragment>
      <Divider type="horizontal" />
      <Text strong>Curt Henrichs ©2021</Text>
      <br/>
      <Text>Created with Reactjs and Ant Design</Text>
      <br/>
      <Text>Icons from Ant Design and Font Awesome</Text>
    </React.Fragment>
  );
}

export default Copyright;
