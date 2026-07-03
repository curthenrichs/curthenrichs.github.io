import React from "react";
import PageMeta from "../components/PageMeta";
import pageMeta from "../content/pageMeta";
import ReturnHome from "./sections/ReturnHome";
import PageTemplate from "../components/PageTemplate";
import SectionTermsOfUse from "./sections/TermsOfUse";
import primaryRouteOptions from "../content/primaryRouteOptions";
import secondaryRouteOptions from "../content/secondaryRouteOptions";

const TermsOfUsePage = () => {
  return (
    <>
      <PageMeta {...pageMeta.terms} />
      <PageTemplate
        header={{
          simple: true,
          pageName: "Terms of Use",
          sectionButtons: [
            {
              id: "policy-btn",
              flexPx: 150,
              content: "Policy"
            }
          ],
          primaryRouteButtons: primaryRouteOptions,
          secondaryRouteButtons: secondaryRouteOptions.filter((value) => (value.id !== "terms-btn"))
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
            content: <SectionTermsOfUse />
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
    </>
  );
};

export default TermsOfUsePage;
