import React from "react";
import ReturnHome from "./sections/ReturnHome";
import PageTemplate from "../components/PageTemplate";
import SectionHome from "./sections/Privacy";
import primaryRouteOptions from "../content/primaryRouteOptions";
import secondaryRouteOptions from "../content/secondaryRouteOptions";

const PrivacyPolicyPage = () => {
  return (
    <PageTemplate
      header={{
        simple: true,
        pageName: "Privacy Policy",
        sectionButtons: [
          {
            id: "policy-btn",
            flexPx: 150,
            content: "Policy"
          }
        ],
        primaryRouteButtons: primaryRouteOptions,
        secondaryRouteButtons: secondaryRouteOptions.filter((value) => (value.id !== "privacy-btn"))
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

export default PrivacyPolicyPage;
