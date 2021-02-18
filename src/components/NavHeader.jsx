import React from 'react';
import { Link } from 'react-router-dom';

import { Menu as MenuIcon } from '../content/customIcons';

import { Row, Col } from 'antd';
import { Typography, Divider } from 'antd';

import "./NavHeader.css";

const { Title, Text } = Typography;



function NavHeader(props) {

  const { width, callback, selected } = props;

  const homeBtn = (
    <div className={`nav-bar nav-bar-btn ${selected == "home-btn" ? "nav-bar-btn-selected" : ""}`} id="home-btn" onClick={callback}>
      Home
    </div>
  );
  const projectsBtn = (
    <div className={`nav-bar nav-bar-btn ${selected == "projects-btn" ? "nav-bar-btn-selected" : ""}`} id="projects-btn" onClick={callback}>
      Projects
    </div>
  );
  const contactBtn = (
    <div className={`nav-bar nav-bar-btn ${selected == "contact-btn" ? "nav-bar-btn-selected" : ""}`} id="contact-btn" onClick={callback}>
      Contact
    </div>
  );
  const resumeBtn = (
    <div className="nav-bar nav-bar-ext-link" id="resume-btn" onClick={callback}>
      Resume
    </div>
  );

  let contents = null;
  if ( width >= 950 ) {
    contents = (
      <React.Fragment>
        <Col flex="25px">
          <Divider className="nav-bar nav-bar-divider" type="vertical"/>
        </Col>
        <Col flex="150px">
          {homeBtn}
        </Col>
        <Col flex="150px">
          {projectsBtn}
        </Col>
        <Col flex="150px">
          {contactBtn}
        </Col>
        <Col flex="25px">
          <Divider className="nav-bar nav-bar-divider" type="vertical"/>
        </Col>
        <Col flex="150px">
          {resumeBtn}
        </Col>
      </React.Fragment>
    );
  } else {
    contents = (
      <Col flex="auto">
        <Row justify="end">
          <Col flex="100px">
            <div className="nav-bar nav-bar-dropdown" id="collapsed-menu">
              <div style={{fontSize: '30px'}}>
                <MenuIcon/>
              </div>
              <div className="nav-bar nav-bar-dropdown-content">
                {homeBtn}
                {projectsBtn}
                {contactBtn}
                {resumeBtn}
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    );
  }


  return (
    <Row align="bottom" wrap={false}>
      <Col flex="200px">
        <Title level={2} style={{overflow: 'hidden'}}>
          <Link to="/" style={{color: "#fff"}}>Curt Henrichs</Link>
        </Title>
      </Col>

      {contents}

    </Row>
  );
}

export default NavHeader;
