import React from "react";
import PageMeta from "../components/PageMeta";
import PageTemplate from "../components/PageTemplate";
import ItemModalContent from "../components/ItemModalContent";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import projects from "../content/projects";
import career from "../content/career";
import education from "../content/education";
import primaryRouteOptions from "../content/primaryRouteOptions";
import secondaryRouteOptions from "../content/secondaryRouteOptions";

const { Text } = Typography;

const CONTENT = { projects, career, education };
const SECTION_LABEL = {
  projects: "All Projects",
  career: "Full Career",
  education: "All Education"
};
const SITE_ORIGIN = "https://curthenrichs.github.io";

const ItemDetailPage = ({ route }) => {
  const entry = CONTENT[route.section][route.contentId];
  const images = entry.images || [];
  const ogImageEntry =
    images.filter((i) => i.carousel)[0] || images.filter((i) => i.img)[0];
  const ogImage = ogImageEntry ? `${SITE_ORIGIN}${ogImageEntry.img}` : undefined;

  return (
    <>
      <PageMeta
        title={route.title}
        description={route.description}
        path={route.path}
        ogImage={ogImage}
        ogImageAlt={ogImage ? `Image from ${route.name}` : undefined}
      />
      <PageTemplate
        header={{
          simple: true,
          pageName: route.name,
          sectionButtons: [
            {
              id: "detail-btn",
              flexPx: 150,
              content: route.name
            }
          ],
          primaryRouteButtons: primaryRouteOptions,
          secondaryRouteButtons: secondaryRouteOptions
        }}
        sections={[
          {
            name: "sect-detail",
            navItem: "detail-btn",
            sectionType: "type-a",
            scrollProperties: {
              duration: 500,
              smooth: true,
              offset: -100
            },
            content: (
              <div style={{ textAlign: "left" }}>
                <ItemModalContent
                  images={entry.images}
                  markdownPath={entry.modalMarkdownPath}
                  primaryLink={entry.primaryLink}
                />
                <div style={{ paddingTop: "1.5em", textAlign: "center" }}>
                  <Link to={`/${route.section}`}>
                    <Text underline>{`← ${SECTION_LABEL[route.section]}`}</Text>
                  </Link>
                </div>
              </div>
            )
          }
        ]}
      />
    </>
  );
};

export default ItemDetailPage;
