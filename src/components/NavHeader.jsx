import React from 'react';

import { Row, Col } from 'antd';
import { Typography , Menu, Divider } from 'antd';

const { SubMenu } = Menu;
const { Title, Text } = Typography;


function NavHeader(props) {

  const { width } = props;

  const title = (
    <Title level={2}><a href="/" style={{color: "#fff"}}>Curt Henrichs</a></Title>
  );

  const dividerOne = (
    <Divider type="vertical" style={{borderLeft: '1px solid #8f8f8f'}}/>
  );

  const menuItems = [
    <Menu.Item key="1">Home</Menu.Item>,
    <Menu.Item key="2">Experience</Menu.Item>,
    <Menu.Item key="3">Projects</Menu.Item>,
    <Menu.Item key="4">Contact</Menu.Item>
  ];

  const dividerTwo = (
    <Divider type="vertical" style={{borderLeft: '1px solid #8f8f8f'}}/>
  );

  const resumeBtn = (
    <Menu.Item key="5">
      <a href="/docs/resume.pdf">
        Resume
      </a>
    </Menu.Item>
  );

  // Produce renderable list as a funciton of width for conditional divider append
  let renderList = [];
  if (width >= 500) {
    renderList.push(dividerOne);
  }
  renderList = [
    ...renderList,
    ...menuItems
  ];
  if (width >= 800) {
    renderList.push(dividerTwo);
  }
  renderList.push(resumeBtn);

  const headerLayout = (
    <Row align="bottom" wrap={false}>
      <Col flex="200px">
        {title}
      </Col>
      <Col flex="auto">
        <Menu theme="dark" mode="horizontal" style={{width: "100%"}}>
          {renderList}
        </Menu>
      </Col>
    </Row>
  );

  return headerLayout;
}

export default NavHeader;
