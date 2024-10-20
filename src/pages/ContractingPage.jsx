import React from "react";
import PageTemplate from "../components/PageTemplate";
import SectionContract from "./sections/Contracting";
import ReturnHome from "./sections/ReturnHome";
import SectionInspiration from "./sections/Inspiration";
import primaryRouteOptions from "../content/primaryRouteOptions";
import secondaryRouteOptions from "../content/secondaryRouteOptions";
import SectionContact from "./sections/Contact";


const ContractingPage = () => {
    return (
        <PageTemplate 
            header={{
                simple: false,
                pageName: "Contracting",
                sectionButtons: [
                    {
                        id: "contract-btn",
                        flexPx: 150,
                        content: "Contracting"
                    },
                    {
                        id: "contact-btn",
                        flexPx: 150,
                        content: "Contact"
                    }
                ],
                primaryRouteButtons: primaryRouteOptions.filter((opt) => (opt.id !== "contract-btn")),
                secondaryRouteButtons: secondaryRouteOptions
            }}
            sections={[
                {
                    name: "sect-inspiration",
                    navItem: "contract-btn",
                    scrollProperties: {
                      duration: 500,
                      smooth: true,
                      offset: -100
                    },
                    sectionType: "type-a",
                    content: <SectionInspiration title="Employment, Consulting, & Contracting Services" noBr={true} />
                },
                {
                    name: "sect-contract",
                    navItem: "contract-btn",
                    scrollProperties: null,
                    sectionType: "type-b",
                    content: <SectionContract />
                  },
                  {
                    name: "sect-contact",
                    navItem: "contact-btn",
                    sectionType: "type-a",
                    scrollProperties: {
                      duration: 500,
                      smooth: true,
                      offset: 0
                    },
                    content: <SectionContact />
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