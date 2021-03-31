import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Menu as MenuIcon } from '../../content/customIcons';
import { WidthContext } from '../../contexts';

import "./index.css";

import { Row, Col, Typography, Divider } from 'antd';
const { Title, Text } = Typography;


const NavDivider = (props) => {
  return (<Divider className="nav-bar nav-bar-divider" type="vertical"/>);
};


const InnerNavButton = (props) => {
  const {active, id, content, callback} = props;

  return (
    <div
      className={`nav-bar nav-bar-btn ${active ? "nav-bar-btn-selected" : ""}`}
      id={id}
      onClick={callback}
    >
      {content}
    </div>
  );
};


const PageNavButton = (props) => {

  const { id, content, route } = props;
  const history = useHistory();

  return (
    <div
      className="nav-bar nav-bar-ext-link"
      id={id}
      onClick={() => { history.push(route)}}
    >
      {content}
    </div>
  );
};


const NavHeader = (props) => {

  const { simple, callback, selected, pageName, innerButtons, pageButtons, collapseWidth } = props;
  const width = useContext(WidthContext);

  let contents = null;
  if (simple) {

    contents = (
      <Col flex="auto">
        <NavDivider />
        <Text className="nav-bar-text">{pageName}</Text>
      </Col>
    );

  } else {


    const innerBtns = innerButtons.map(entry => (
      <Col flex={`${entry.flexPx}px`} key={entry.id}>
        <InnerNavButton
          active={selected === entry.id}
          id={entry.id}
          content={entry.content}
          callback={callback}
        />
      </Col>
    ));

    const pageBtns = pageButtons.map(entry => (
      <Col flex={`${entry.flexPx}px`} key={entry.id}>
        <PageNavButton
          id={entry.id}
          content={entry.content}
          route={entry.route}
        />
      </Col>
    ));

    if ( width >= collapseWidth ) {

      contents = (
        <React.Fragment>
          <Col flex="25px"><NavDivider /></Col>
          {innerBtns}
          <Col flex="25px"><NavDivider /></Col>
          {pageBtns}
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
                  {innerBtns}
                  {pageBtns}
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      );
    }
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
};

export default NavHeader;
