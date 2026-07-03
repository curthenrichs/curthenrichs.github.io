import React from "react";
import PageMeta from "../components/PageMeta";
import pageMeta from "../content/pageMeta";
import PageTemplate from "../components/PageTemplate";
import ReturnHomeButton from "../components/ReturnHomeButton";
import CuteRobot from "../components/CuteRobot";
import { Result } from "antd";
import primaryRouteOptions from "../content/primaryRouteOptions";
import secondaryRouteOptions from "../content/secondaryRouteOptions";

const NotFoundPage = () => {
  return (
    <>
      <PageMeta {...pageMeta.notFound} />
      <PageTemplate
        header={{
          simple: true,
          pageName: "404 - Page Not Found",
          sectionButtons: [
            {
              id: "found-btn",
              flexPx: 150,
              content: "Not Found"
            }
          ],
          primaryRouteButtons: primaryRouteOptions,
          secondaryRouteButtons: secondaryRouteOptions
        }}
        sections={[
          {
            name: "sect-results",
            sectionType: "type-a",
            navItem: "found-btn",
            scrollProperties: {
              duration: 500,
              smooth: true,
              offset: -100
            },
            content: (
              <Result
                icon={<CuteRobot question />}
                title="404 - Page Not Found"
                subTitle="Apologies, but I don't know what you are looking for."
                extra={<ReturnHomeButton />}
              />
            )
          }
        ]}
      />
    </>
  );
};

export default NotFoundPage;
