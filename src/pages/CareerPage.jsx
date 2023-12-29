import React from "react";
import ReturnHome from "./sections/ReturnHome";
import PageTemplate from "../components/PageTemplate";
import SectionList from "./sections/Career";
import SectionInspiration from "./sections/Inspiration";
import primaryRouteOptions from "../content/primaryRouteOptions";
import secondaryRouteOptions from "../content/secondaryRouteOptions";

const CareerPage = () => {
  return (
    <PageTemplate
      header={{
        simple: true,
        pageName: "Career",
        sectionButtons: [
          {
            id: "career-btn",
            flexPx: 150,
            content: "Career"
          }
        ],
        primaryRouteButtons: primaryRouteOptions,
        secondaryRouteButtons: secondaryRouteOptions
      }}
      sections={[
        {
          name: "sect-inspiration",
          navItem: "career-btn",
          scrollProperties: {
            duration: 500,
            smooth: true,
            offset: -100
          },
          sectionType: "type-a",
          content: <SectionInspiration title="Career" noBr={true} />
        },
        {
          name: "sect-list",
          navItem: "career-btn",
          scrollProperties: null,
          sectionType: "type-b",
          content: <SectionList title=""/>
        },
        {
          name: "sect-return",
          navItem: "career-btn",
          scrollProperties: null,
          sectionType: "type-a",
          style: { paddingTop: "3em" },
          content: <ReturnHome />
        }
      ]}
    />
  );
};

export default CareerPage;
