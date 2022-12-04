import React from "react";
import SectionIconLicenses from "./sections/attribution/IconLicenses";
import SectionFaviconLicenses from "./sections/attribution/FaviconLicenses";
import ReturnHome from "./sections/ReturnHome";
import PageTemplate from "../components/PageTemplate";
import SectionHome  from "./sections/attribution/Home";


const AttributionPage = () => {
  return (
    <PageTemplate
      header={{
        simple: true,
        pageName: "Attribution and Licenses"
      }}
      sections={[
        {
            name: "sect-home",
            sectionType: "type-a",
            content: (<SectionHome />)
        },
        {
          name: "sect-icons",
          sectionType: "type-a",
          content: (<SectionIconLicenses />)
        },
        {
          name: "sect-favicon",
          sectionType: "type-a",
          content: (<SectionFaviconLicenses />)
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


export default AttributionPage;
