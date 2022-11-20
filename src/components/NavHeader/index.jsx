import React, { useContext, Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import { Menu as MenuIcon } from "../IconManager";
import { WidthContext } from "../../contexts";
import { Row, Col, Typography, Divider } from "antd";
import "./index.css";


const { Title, Text } = Typography;


const NavDivider = () => {
  return (<Divider className="nav-bar nav-bar-divider" type="vertical"/>);
};


const InnerNavButton = (props) => {
  const {active, id, content, callback} = props;

  return (
    <div
      role="button"
      tabIndex="0"
      className={`nav-bar nav-bar-btn ${active ? "nav-bar-btn-selected" : ""}`}
      id={id}
      onClick={callback}
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          callback(event);
        }
      }}
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
      role="button"
      tabIndex="0"
      className="nav-bar nav-bar-ext-link"
      id={id}
      onClick={() => { history.push(route);}}
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          history.push(route);
        }
      }}
    >
      {content}
    </div>
  );
};


const LinkNavButton = (props) => {
  const { id, content, route } = props;

  return (
    <a 
      style={{display:"block"}}
      className="nav-bar nav-bar-ext-link"
      id={id}
      href={route} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      {content}
    </a>
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

    const pageBtns = pageButtons.map(entry => {
      if (entry.isLink) {
        return (
          <Col flex={`${entry.flexPx}px`} key={entry.id}>
            <LinkNavButton
              id={entry.id}
              content={entry.content}
              route={entry.route}
            />
          </Col>
        );
      } else {
        return (
          <Col flex={`${entry.flexPx}px`} key={entry.id}>
            <PageNavButton
              id={entry.id}
              content={entry.content}
              route={entry.route}
            />
          </Col>
        );
      }
    });

    if ( width >= collapseWidth ) {
      contents = (
        <Fragment>
          <Col flex="25px"><NavDivider /></Col>
          {innerBtns}
          <Col flex="25px"><NavDivider /></Col>
          {pageBtns}
        </Fragment>
      );
    } else {
      contents = (
        <Col flex="auto">
          <Row justify="end">
            <Col flex="100px">
              <div className="nav-bar nav-bar-dropdown" id="collapsed-menu">
                <div style={{fontSize: "30px"}}>
                  <MenuIcon/>
                </div>
                <div className="nav-bar nav-bar-dropdown-content">
                  {innerBtns}
                  <Divider />
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
        <Title level={2} style={{overflow: "hidden"}}>
          <Link to="/" style={{color: "#fff"}}>Curt Henrichs</Link>
        </Title>
      </Col>

      {contents}

    </Row>
  );
};

export default NavHeader;
