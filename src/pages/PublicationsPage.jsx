import React from "react";
import ReturnHome from "./sections/ReturnHome";
import PageTemplate from "../components/PageTemplate";
import SectionList from "./sections/Publications";
import SectionInspiration from "./sections/Inspiration";
import primaryRouteOptions from "../content/primaryRouteOptions";
import secondaryRouteOptions from "../content/secondaryRouteOptions";

const PublicationsPage = () => {
  return (
    <PageTemplate
      header={{
        simple: true,
        pageName: "Publications",
        sectionButtons: [
          {
            id: "publication-btn",
            flexPx: 150,
            content: "Publications"
          }
        ],
        primaryRouteButtons: primaryRouteOptions,
        secondaryRouteButtons: secondaryRouteOptions
      }}
      sections={[
        {
          name: "sect-list",
          navItem: "publication-btn",
          scrollProperties: {
            duration: 500,
            smooth: true,
            offset: -100
          },
          sectionType: "type-a",
          content: <SectionInspiration />
        },
        {
          name: "sect-list",
          navItem: "publication-btn",
          scrollProperties: null,
          sectionType: "type-b",
          content: <SectionList title="" />
        },
        {
          name: "sect-return",
          navItem: "publication-btn",
          scrollProperties: null,
          sectionType: "type-a",
          style: { paddingTop: "3em" },
          content: <ReturnHome />
        }
      ]}
    />
  );
};

export default PublicationsPage;
