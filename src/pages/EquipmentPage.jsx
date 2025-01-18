import React from "react";
import PageTemplate from "../components/PageTemplate";
import SectionEquipment from "./sections/Equipment";
import ReturnHome from "./sections/ReturnHome";
import SectionInspiration from "./sections/Inspiration";
import primaryRouteOptions from "../content/primaryRouteOptions";
import secondaryRouteOptions from "../content/secondaryRouteOptions";

const EquipmentPage = () => {
  return (
    <PageTemplate 
      header={{
        simple: true,
        pageName: "Equipment",
        sectionButtons: [
          {
            id: "equipment-btn",
            flexPx: 150,
            content: "Equipment"
          }
        ],
        primaryRouteButtons: primaryRouteOptions,
        secondaryRouteButtons: secondaryRouteOptions
      }}
      sections={[
        {
          name: "sect-inspiration",
          navItem: "equipment-btn",
          scrollProperties: {
            duration: 500,
            smooth: true,
            offset: -100
          },
          sectionType: "type-a",
          content: <SectionInspiration title="Equipment" noBr={true} />
        },
        {
          name: "sect-equipment",
          navItem: "equipment-btn",
          scrollProperties: null,
          sectionType: "type-a",
          content: <SectionEquipment />
        },
        {
          name: "sect-return",
          navItem: "education-btn",
          scrollProperties: null,
          sectionType: "type-a",
          style: { paddingTop: "3em" },
          content: <ReturnHome />
        }
      ]}
    />
  );
};

export default EquipmentPage;