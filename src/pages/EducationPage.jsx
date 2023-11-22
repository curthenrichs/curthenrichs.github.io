import React from "react";
import ReturnHome from "./sections/ReturnHome";
import PageTemplate from "../components/PageTemplate";
import SectionList from "./sections/Education";
import SectionInspiration from "./sections/Inspiration";
import primaryRouteOptions from "../content/primaryRouteOptions";
import secondaryRouteOptions from "../content/secondaryRouteOptions";

const EducationPage = () => {
  return (
    <PageTemplate
      header={{
        simple: true,
        pageName: "Education",
        sectionButtons: [
          {
            id: "education-btn",
            flexPx: 150,
            content: "Education"
          }
        ],
        primaryRouteButtons: primaryRouteOptions,
        secondaryRouteButtons: secondaryRouteOptions
      }}
      sections={[
        {
          name: "sect-list",
          navItem: "education-btn",
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
          navItem: "education-btn",
          scrollProperties: null,
          sectionType: "type-b",
          content: <SectionList title="" />
        },
        {
          name: "sect-return",
          navItem: "education-btn",
          scrollProperties: null,
          sectionType: "type-a",
          style: { paddingTop: "3em" },
          content: <ReturnHome />
        }
      ]}
    />
  );
};

export default EducationPage;
