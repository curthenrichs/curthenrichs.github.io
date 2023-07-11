import React from "react";
import PageTemplate from "../components/PageTemplate";
import SectionHome from "./sections/contract/Home";
import ReturnHome from "./sections/ReturnHome";
import primaryRouteOptions from "../content/primaryRouteOptions";
import secondaryRouteOptions from "../content/secondaryRouteOptions";


const ContractingPage = () => {
    return (
        <PageTemplate 
            header={{
                simple: true,
                pageName: "Contracting",
                sectionButtons: [
                    {
                        id: "contract-btn",
                        flexPx: 150,
                        content: "Contracting"
                    }
                ],
                primaryRouteButtons: primaryRouteOptions.filter((opt) => (opt.id !== "contract-btn")),
                secondaryRouteButtons: secondaryRouteOptions
            }}
            sections={[
                {
                    name: "sect-home",
                    navItem: "contract-btn",
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
                    navItem: "contract-btn",
                    scrollProperties: null,
                    sectionType: "type-a",
                    style: { paddingTop: "3em" },
                    content: <ReturnHome />
                  }
            ]}
        />
    );
};

export default ContractingPage;