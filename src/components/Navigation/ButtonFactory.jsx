import React from "react";
import InnerNavButton from "./InnerNavButton";
import PageNavButton from "./PageNavButton";
import LinkNavButton from "./LinkNavButton";
import "./index.css";

const RouteButtonFactory = (btnData) => {
  if (btnData.isLink) {
    return (
      <LinkNavButton key={btnData.id} id={btnData.id} content={btnData.content} route={btnData.route} />
    );
  } else {
    return (
      <PageNavButton key={btnData.id} id={btnData.id} content={btnData.content} route={btnData.route} />
    );
  }
};

const SectionButtonFactory = (btnData, selectedId, optionSelectCallback) => {
    return (<InnerNavButton
      key={btnData.id}
      active={selectedId === btnData.id}
      id={btnData.id}
      content={btnData.content}
      callback={optionSelectCallback}
    />);
};

export {
  RouteButtonFactory,
  SectionButtonFactory
};