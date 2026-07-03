import React from "react";
import { Result } from "antd";
import PageMeta from "../components/PageMeta";
import pageMeta from "../content/pageMeta";

const NotFoundNoRoutingPage = () => {
  return (
    <>
      <PageMeta {...pageMeta.docsNotFound} />
      <Result
        status="404"
        title="404"
        subTitle="Apologies, but I don't know what you are looking for."
      />
    </>
  );
};

export default NotFoundNoRoutingPage;
