import React from "react";
import ReturnHome from "./sections/ReturnHome";
import PageTemplate from "../components/PageTemplate";
import SectionList from "./sections/Education";
import SectionInspiration from "./sections/Inspiration";
import primaryRouteOptions from "../content/primaryRouteOptions";
import secondaryRouteOptions from "../content/secondaryRouteOptions";
import SectionHelix from "./sections/Helix";

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
          name: "sect-inspiration",
          navItem: "education-btn",
          scrollProperties: {
            duration: 500,
            smooth: true,
            offset: -100
          },
          sectionType: "type-a",
          content: <SectionInspiration title="Education" noBr={true} />
        },
        {
          name: "sect-helix",
          navItem: "education-btn",
          scrollProperties: null,
          sectionType: "type-a",
          content: <SectionHelix />
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
