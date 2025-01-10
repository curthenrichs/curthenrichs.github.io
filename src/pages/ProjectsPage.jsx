import React from "react";
import ReturnHome from "./sections/ReturnHome";
import PageTemplate from "../components/PageTemplate";
import SectionList from "./sections/Projects";
import SectionInspiration from "./sections/Inspiration";
import primaryRouteOptions from "../content/primaryRouteOptions";
import secondaryRouteOptions from "../content/secondaryRouteOptions";

const ProjectsPage = () => {
  return (
    <PageTemplate
      header={{
        simple: true,
        pageName: "Projects",
        sectionButtons: [
          {
            id: "projects-btn",
            flexPx: 150,
            content: "Projects"
          }
        ],
        primaryRouteButtons: primaryRouteOptions,
        secondaryRouteButtons: secondaryRouteOptions
      }}
      sections={[
        {
          name: "sect-inspiration",
          navItem: "projects-btn",
          scrollProperties: {
            duration: 500,
            smooth: true,
            offset: -100
          },
          sectionType: "type-a",
          content: <SectionInspiration title="Projects" />
        },
        {
          name: "sect-list",
          navItem: "projects-btn",
          scrollProperties: null,
          sectionType: "type-b",
          content: <SectionList title="" />
        },
        {
          name: "sect-return",
          navItem: "projects-btn",
          scrollProperties: null,
          sectionType: "type-a",
          style: { paddingTop: "3em" },
          content: <ReturnHome />
        }
      ]}
    />
  );
};

export default ProjectsPage;
