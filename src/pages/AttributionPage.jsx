import React from "react";
import ReturnHome from "./sections/ReturnHome";
import PageTemplate from "../components/PageTemplate";
import SectionHome from "./sections/Attribution";
import primaryRouteOptions from "../content/primaryRouteOptions";
import secondaryRouteOptions from "../content/secondaryRouteOptions";

const AttributionPage = () => {
  return (
    <PageTemplate
      header={{
        simple: true,
        pageName: "Attribution and Licenses",
        sectionButtons: [
          {
            id: "policy-btn",
            flexPx: 150,
            content: "Attribution"
          }
        ],
        primaryRouteButtons: primaryRouteOptions,
        secondaryRouteButtons: secondaryRouteOptions.filter((value) => (value.id !== "attribute-btn"))
      }}
      sections={[
        {
          name: "sect-home",
          navItem: "policy-btn",
          scrollProperties: {
            duration: 500,
            smooth: true,
            offset: -100
          },
          sectionType: "type-a",
          content: <SectionHome />
        },
        {
          name: "sect-return",
          navItem: "policy-btn",
          scrollProperties: null,
          sectionType: "type-a",
          style: { paddingTop: "3em" },
          content: <ReturnHome />
        }
      ]}
    />
  );
};

export default AttributionPage;
