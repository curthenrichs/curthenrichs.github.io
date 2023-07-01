import React, { useContext } from "react";
import { Drawer, Divider } from "antd";
import { WidthContext } from "../../contexts";
import InnerNavButton from "./InnerNavButton";
import PageNavButton from "./PageNavButton";
import LinkNavButton from "./LinkNavButton";
import "./index.css";

const NavDrawer = (props) => {
  const { 
    optionSelectCallback, 
    selected, 
    innerButtons, 
    pageButtons, 
    menuCloseCallback, 
    open
  } = props;

  const width = useContext(WidthContext);

  const size = (width < 650) ? width : undefined;

  const innerBtns = innerButtons.map((entry) => (
    <InnerNavButton
      key={entry.id}
      active={selected === entry.id}
      id={entry.id}
      content={entry.content}
      callback={optionSelectCallback}
    />
  ));

  const pageBtns = pageButtons.map((entry) => {
    if (entry.isLink) {
      return (
        <LinkNavButton key={entry.id} id={entry.id} content={entry.content} route={entry.route} />
      );
    } else {
      return (
        <PageNavButton key={entry.id} id={entry.id} content={entry.content} route={entry.route} />
      );
    }
  });

  return (
    <Drawer 
      title="Navigation" 
      placement="right" 
      onClose={menuCloseCallback} 
      visible={open}
      // getContainer={false} // Was needed for older versions due to bug - removed for updated lib
      closable={true}
      width={size}
    >
      {innerBtns}
      <Divider/>
      {pageBtns}
    </Drawer>
  );
};

export default NavDrawer;