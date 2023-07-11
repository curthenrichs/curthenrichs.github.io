import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu as MenuIcon } from "../IconManager";
import { WidthContext } from "../../contexts";
import { Row, Col, Typography, Divider } from "antd";
import { SectionButtonFactory } from "./ButtonFactory";
import "./index.css";

const { Title, Text } = Typography;

const NavHeaderDivider = () => {
  return <Divider className="nav-bar nav-bar-divider" type="vertical" />;
};

const HomeTitleLink = () => {
  return (
    <Col flex="200px">
      <Title level={2} style={{ overflow: "hidden" }}>
        <Link to="/" style={{ color: "#fff" }}>
                    Curt Henrichs
        </Link>
      </Title>
    </Col>
  );
};

const MenuButton = (props) => {
  const {callback} = props;
  return (
    <div 
      className="nav-bar nav-bar-dropdown" 
      id="collapsed-menu"
      role="button"
      tabIndex="0"
      onClick={callback}
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          callback(event);
        }
      }}
    >
      <div style={{ fontSize: "30px" }}>
        <MenuIcon/>
      </div>
    </div>
  );
};

const NavHeader = (props) => {
  const { 
    simple, 
    optionSelectCallback, 
    selected, 
    pageName, 
    sectionButtons, 
    // primaryRouteButtons,
    collapseWidth, 
    menuClickedCallback 
  } = props;
  const width = useContext(WidthContext);

  let contents = null;
  if (simple) {
    if (width >= 450) {
      contents = (<Fragment>
        <Col flex="auto">
          <NavHeaderDivider />
          <Text className="nav-bar-text">{pageName}</Text>
        </Col>
        <Col flex="100px">
          <MenuButton callback={menuClickedCallback} />
        </Col>
      </Fragment>);
    } else {
      contents = (<Fragment>
        <Col flex="auto">
          <Text className="nav-bar-text">&nbsp;</Text>
        </Col>
        <Col flex="100px">
          <MenuButton callback={menuClickedCallback} />
        </Col>
      </Fragment>);
    }
  } else {
    const innerBtns = sectionButtons.map((entry) => (
      <Col flex={`${entry.flexPx}px`} key={entry.id}>
        {SectionButtonFactory(entry, selected, optionSelectCallback)}
      </Col>
    ));

    // const pageBtns = primaryRouteButtons.map((entry) => {
    //   return (
    //     <Col flex={`${entry.flexPx}px`} key={entry.id}>
    //       {RouteButtonFactory(entry)}
    //     </Col>
    //   );
    // });

    if (width >= collapseWidth) {
      contents = (
        <Fragment>
          <Col flex="25px">
            <NavHeaderDivider />
          </Col>
          {innerBtns}
          {/* <Col flex="25px">
            <NavHeaderDivider />
          </Col>
          {pageBtns} */}
          <Col flex="auto">
            <Row justify="end">
              <Col flex="100px">
                <MenuButton callback={menuClickedCallback} />
              </Col>
            </Row>
          </Col>
        </Fragment>
      );
    } else {
      contents = (
        <Col flex="auto">
          <Row justify="end">
            <Col flex="100px">
              <MenuButton callback={menuClickedCallback} />
            </Col>
          </Row>
        </Col>
      );
    }
  }

  return (  
    <Row align="bottom" wrap={false}>
      <HomeTitleLink />
      {contents}
    </Row>
  );
};

export default NavHeader;
