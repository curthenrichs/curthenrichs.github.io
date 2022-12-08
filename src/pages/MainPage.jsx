import React from "react";
import PageTemplate from "../components/PageTemplate";
import SectionHome from "./sections/main/Home";
import SectionSkills from "./sections/main/Skills";
import SectionCareer from "./sections/main/Career";
//import SectionEducation from "./sections/Education";
import SectionProjects from "./sections/main/Projects";
import SectionPublications from "./sections/main/Publications";
import SectionContact from "./sections/main/Contact";
import contactData from "../content/contact";

const MainPage = () => {
  return (
    <PageTemplate
      displayCookieConsent={false}
      header={{
        simple: false,
        pageName: "Main",
        innerButtons: [
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
          //   {
          //     id: "education-btn",
          //     flexPx: 150,
          //     content: "Education"
          //   },
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
        pageButtons: [
          {
            id: "resume-btn",
            flexPx: 150,
            content: "Resume",
            route: contactData.resume.link,
            isLink: true
          }
        ],
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
        // {
        //   name: "sect-education",
        //   navItem: "education-btn",
        //   sectionType: "type-b",
        //   scrollProperties: {
        //     duration: 500,
        //     smooth: true,
        //     offset: -100,
        //   },
        //   content: (<SectionEducation />)
        // },
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
