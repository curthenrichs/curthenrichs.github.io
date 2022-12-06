import React from "react";
import ReturnHome from "./sections/ReturnHome";
import PageTemplate from "../components/PageTemplate";
import SectionHome  from "./sections/accessibility/Home";


const AccessibilityPolicyPage = () => {
  return (
    <PageTemplate
      header={{
        simple: true,
        pageName: "Accessibility Policy"
      }}
      sections={[
        {
          name: "sect-home",
          sectionType: "type-a",
          content: (<SectionHome />)
        },
        {
          name: "sect-return",
          sectionType: "type-a",
          style: { paddingTop: "3em" },
          content: (<ReturnHome />)
        }
      ]}
    />
  );
};


export default AccessibilityPolicyPage;