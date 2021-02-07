import React from 'react';

import { Row, Col } from 'antd';
import { Typography , Menu, Divider } from 'antd';

const { SubMenu } = Menu;
const { Title, Text } = Typography;


function NavHeader(props) {

  const { width, narrowWidth } = props;

  let title = (
    <Title level={2} style={{color: "#fff"}}>Curt Henrichs</Title>
  );

  let menu = (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{width: "100%"}}>
      <Menu.Item key="1">Home</Menu.Item>
      <Menu.Item key="2">Experience</Menu.Item>
      <Menu.Item key="3">Projects</Menu.Item>
      <Menu.Item key="4">Contact</Menu.Item>
    </Menu>
  );

  let resumeBtn = (
    <Menu theme="dark" mode="horizontal" style={{width: "100%"}}>
      <Menu.Item key="5">
        <a href="/content/resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </Menu.Item>
    </Menu>
  );

  let headerLayout = null;


  if ( width >= narrowWidth) {
    headerLayout = (
      <Row align="bottom" wrap={false}>
        <Col flex="200px">
          {title}
        </Col>
        <Col flex="40px">
          <Divider type="vertical" style={{borderLeft: '1px solid #8f8f8f'}}/>
        </Col>
        <Col flex="365px">
          {menu}
        </Col>
        <Col flex="5px">
          <Divider type="vertical" style={{borderLeft: '1px solid #8f8f8f'}}/>
        </Col>
        <Col flex="50px">
          {resumeBtn}
        </Col>
      </Row>
    );

  } else {
    headerLayout = (
      <Row align="bottom" wrap={false}>
        <Col flex="200px">
          {title}
        </Col>
        <Col flex="20px">
          <Divider type="vertical" style={{borderLeft: '1px solid #8f8f8f'}}/>
        </Col>
        <Col flex="auto">
          {menu}
        </Col>
      </Row>
    );
  }

  return headerLayout;
}

export default NavHeader;
