import React, { useContext } from "react";
import { Drawer, Divider } from "antd";
import { WidthContext } from "../../contexts";
import { BP_NAV_DRAWER_FULL } from "../../breakpoints";
import { RouteButtonFactory, SectionButtonFactory } from "./ButtonFactory";
import "./index.css";

const NavDrawer = (props) => {
  const {
    optionSelectCallback,
    selected,
    sectionButtons,
    primaryRouteButtons,
    secondaryRouteButtons,
    menuCloseCallback,
    open
  } = props;

  const width = useContext(WidthContext);

  const size = (width < BP_NAV_DRAWER_FULL) ? width : undefined;

  const innerBtns = sectionButtons ? sectionButtons.map((entry) => (SectionButtonFactory(entry, selected, optionSelectCallback))) : [];
  const primaryBtns = primaryRouteButtons ? primaryRouteButtons.map((entry) => (RouteButtonFactory(entry))) : [];
  const secondaryBtns = secondaryRouteButtons ? secondaryRouteButtons.map((entry) => (RouteButtonFactory(entry))) : [];

  return (
    <Drawer
      title="Navigation"
      placement="right"
      onClose={menuCloseCallback}
      open={open}
      // getContainer={false} // Was needed for older versions due to bug - removed for updated lib
      closable={true}
      width={size}
    >
      {innerBtns}

      { (innerBtns.length > 0) && (primaryBtns.length > 0) && <Divider/> }

      {primaryBtns}

      { (innerBtns.length > 0 || primaryBtns.length > 0) && (secondaryBtns.length > 0) && <Divider/> }

      {secondaryBtns}
    </Drawer>
  );
};

export default NavDrawer;
