import React from "react";
import ReturnHome from "./sections/ReturnHome";
import PageTemplate from "../components/PageTemplate";
import SectionHome from "./sections/terms/Home";
import contactData from "../content/contact";

const TermsOfUsePage = () => {
  return (
    <PageTemplate
      header={{
        simple: true,
        pageName: "Terms of Use",
        innerButtons: [
          {
            id: "policy-btn",
            flexPx: 150,
            content: "Policy"
          }
        ],
        pageButtons: [
          {
            id: "home-btn",
            flexPx: 150,
            content: "Home",
            route: "/",
            isLink: false
          },
          {
            id: "resume-btn",
            flexPx: 150,
            content: "Resume",
            route: contactData.resume.link,
            isLink: true
          }
        ]
      }}
      sections={[
        {
          name: "sect-home",
          navItem: "policy-btn",
          sectionType: "type-a",
          scrollProperties: {
            duration: 500,
            smooth: true,
            offset: -100
          },
          content: <SectionHome />
        },
        {
          name: "sect-return",
          navItem: "policy-btn",
          sectionType: "type-a",
          scrollProperties: null,
          style: { paddingTop: "3em" },
          content: <ReturnHome />
        }
      ]}
    />
  );
};

export default TermsOfUsePage;
