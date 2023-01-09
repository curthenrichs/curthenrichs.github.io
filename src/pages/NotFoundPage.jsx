import React from "react";
import PageTemplate from "../components/PageTemplate";
import ReturnHomeButton from "../components/ReturnHomeButton";
import { Result } from "antd";
import contactData from "../content/contact";

const NotFoundPage = () => {
  return (
    <PageTemplate
      header={{
        simple: true,
        pageName: "404 - Page Not Found",
        innerButtons: [
          {
            id: "found-btn",
            flexPx: 150,
            content: "Not Found"
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
          name: "sect-results",
          sectionType: "type-a",
          navItem: "found-btn",
          scrollProperties: {
            duration: 500,
            smooth: true,
            offset: -100
          },
          content: (
            <Result
              status="404"
              title="404"
              subTitle="Apologies, but I don't know what you are looking for."
              extra={<ReturnHomeButton />}
            />
          )
        }
      ]}
    />
  );
};

export default NotFoundPage;
