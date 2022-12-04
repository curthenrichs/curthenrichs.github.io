import React from "react";
import ReturnHome from "./sections/ReturnHome";
import PageTemplate from "../components/PageTemplate";
import SectionHome  from "./sections/terms/Home";


const TermsOfUsePage = () => {
    return (
      <PageTemplate
      header={{
        simple: true,
        pageName: "Terms of Use"
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


export default TermsOfUsePage;