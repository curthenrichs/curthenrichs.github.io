import React from "react";
import PageTemplate from "../components/PageTemplate";
import SectionHome from "./sections/main/Home";
import SectionSkills from "./sections/main/Skills";
import SectionCareer from "./sections/main/Career";
import SectionProjects from "./sections/main/Projects";
import SectionPublications from "./sections/main/Publications";
import SectionContact from "./sections/main/Contact";
import primaryRouteOptions from "../content/primaryRouteOptions";
import secondaryRouteOptions from "../content/secondaryRouteOptions";

const MainPage = () => {
  return (
    <PageTemplate
      displayCookieConsent={false}
      header={{
        simple: false,
        pageName: "Main",
        sectionButtons: [
          {
            id: "home-btn",
            flexPx: 150,
            content: "Home"
          },
          {
            id: "career-btn",
            flexPx: 150,
            content: "Career"
          },
          {
            id: "projects-btn",
            flexPx: 150,
            content: "Projects"
          },
          {
            id: "publications-btn",
            flexPx: 150,
            content: "Publications"
          },
          {
            id: "contact-btn",
            flexPx: 150,
            content: "Contact"
          }
        ],
        primaryRouteButtons: primaryRouteOptions.filter((value) => (value.id !== "home-btn")),
        secondaryRouteButtons: secondaryRouteOptions,
        collapseWidth: 1500
      }}
      sections={[
        {
          name: "sect-home",
          navItem: "home-btn",
          sectionType: "type-a",
          scrollProperties: {
            duration: 500,
            smooth: true,
            offset: -100
          },
          content: <SectionHome />
        },
        {
          name: "sect-skills",
          navItem: "home-btn",
          sectionType: "type-a",
          style: { textAlign: "center" },
          scrollProperties: null,
          notApplyInnerSection: true,
          content: <SectionSkills />
        },
        {
          name: "sect-career",
          navItem: "career-btn",
          sectionType: "type-b",
          paddingTop: 30,
          scrollProperties: {
            duration: 500,
            smooth: true,
            offset: -100
          },
          content: <SectionCareer />
        },
        {
          name: "sect-projects",
          navItem: "projects-btn",
          sectionType: "type-b",
          scrollProperties: {
            duration: 500,
            smooth: true,
            offset: -100
          },
          content: <SectionProjects />
        },
        {
          name: "sect-publications",
          navItem: "publications-btn",
          sectionType: "type-b",
          scrollProperties: {
            duration: 500,
            smooth: true,
            offset: -100
          },
          content: <SectionPublications />
        },
        {
          name: "sect-contact",
          navItem: "contact-btn",
          sectionType: "type-a",
          scrollProperties: {
            duration: 500,
            smooth: true,
            offset: 0
          },
          content: <SectionContact />
        }
      ]}
    />
  );
};

export default MainPage;
