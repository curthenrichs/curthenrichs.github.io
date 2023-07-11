import React from "react";
import PageTemplate from "../components/PageTemplate";
import ReturnHomeButton from "../components/ReturnHomeButton";
import { Result } from "antd";
import primaryRouteOptions from "../content/primaryRouteOptions";
import secondaryRouteOptions from "../content/secondaryRouteOptions";

const NotFoundPage = () => {
  return (
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
              status="404"
              title="404"
              subTitle="Apologies, but I don't know what you are looking for."
              extra={<ReturnHomeButton />}
            />
          )
        }
      ]}
    />
  );
};

export default NotFoundPage;
