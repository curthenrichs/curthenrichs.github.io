import React, { Fragment } from "react";
import SectionIconLicenses from "./sections/IconLicenses";
import SectionFaviconLicenses from "./sections/FaviconLicenses";
import ReturnHomeButton from "../components/ReturnHomeButton";
import PageTemplate from "../components/PageTemplate";


const IconLicensesPage = () => {
  return (
    <PageTemplate
      header={{
        simple: true,
        pageName: "Icon Licenses"
      }}
      sections={[
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
          content: (
            <Fragment>
              <div style={{textAlign: "center"}}>
                <ReturnHomeButton />
              </div>
            </Fragment>
          )
        }
      ]}
    />
  );
};


export default IconLicensesPage;
