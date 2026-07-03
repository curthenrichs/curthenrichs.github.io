import React, { useEffect } from "react";
import { Result } from "antd";
import PageMeta from "../components/PageMeta";
import pageMeta from "../content/pageMeta";
import CuteRobot from "../components/CuteRobot";
import { dismissPrerenderVeil } from "../utils/prerenderVeil";

const NotFoundNoRoutingPage = () => {
  // Rendered without PageTemplate, so the prerender markers/veil are never
  // otherwise cleared -- do it here so a prerendered /docs/* 404 doesn't
  // sit behind the veil until the 5s CSS failsafe.
  useEffect(() => {
    if (typeof window !== "undefined") {
      delete window.__PRERENDERED_WIDTH__;
      delete window.__PRERENDERED_HEIGHT__;
    }
    dismissPrerenderVeil();
  }, []);

  return (
    <>
      <PageMeta {...pageMeta.docsNotFound} />
      <Result
        icon={<CuteRobot question />}
        title="404 - Document Not Found"
        subTitle="Apologies, but I don't know what you are looking for."
      />
    </>
  );
};

export default NotFoundNoRoutingPage;
