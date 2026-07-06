import React from "react";
import PageMeta from "../components/PageMeta";
import pageMeta from "../content/pageMeta";
import ReturnHome from "./sections/ReturnHome";
import PageTemplate from "../components/PageTemplate";
import SectionList from "./sections/Career";
import SectionInspiration from "./sections/Inspiration";
import SectionIntro from "../components/SectionIntro";
import CareerIntroMarkdown from "../content/markdown/CareerIntro.md";
import primaryRouteOptions from "../content/primaryRouteOptions";
import secondaryRouteOptions from "../content/secondaryRouteOptions";

const CareerPage = () => {
  return (
    <>
      <PageMeta {...pageMeta.career} />
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
            name: "sect-intro",
            navItem: "career-btn",
            scrollProperties: null,
            sectionType: "type-a",
            content: (
              <SectionIntro
                title="A Triple Helix"
                level={3}
                markdownPath={CareerIntroMarkdown}
              />
            )
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
    </>
  );
};

export default CareerPage;
