import React from "react";
import ReturnHome from "./sections/ReturnHome";
import PageTemplate from "../components/PageTemplate";
import SectionHome from "./sections/attribution/Home";
import contactData from "../content/contact";

const AttributionPage = () => {
  return (
    <PageTemplate
      header={{
        simple: true,
        pageName: "Attribution and Licenses",
        innerButtons: [
          {
            id: "policy-btn",
            flexPx: 150,
            content: "Attribution"
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
