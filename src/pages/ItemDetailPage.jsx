import React from "react";
import PageMeta from "../components/PageMeta";
import PageTemplate from "../components/PageTemplate";
import ItemModalContent from "../components/ItemModalContent";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import projects from "../content/projects";
import career from "../content/career";
import education from "../content/education";
import primaryRouteOptions from "../content/primaryRouteOptions";
import secondaryRouteOptions from "../content/secondaryRouteOptions";

const CONTENT = { projects, career, education };
const BACK_LABEL = {
  projects: "All Projects",
  career: "Career",
  education: "Education"
};
const SECTION_BANNER = {
  projects: "Projects",
  career: "Career",
  education: "Education"
};
const SITE_ORIGIN = "https://curthenrichs.github.io";

const ItemDetailPage = ({ route }) => {
  const navigate = useNavigate();
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
          // Banner is a "where am I" affordance: group + item. The nav button
          // and document title keep the bare item name.
          pageName: `${SECTION_BANNER[route.section]} - ${route.name}`,
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
                  {/* Outlined (default) button: back-nav is secondary to the
                      item's primary-link CTA. Real href for agents; plain
                      click navigates SPA-style, modifier-clicks fall through. */}
                  <Button
                    href={`/${route.section}`}
                    shape="round"
                    size="large"
                    onClick={(event) => {
                      if (
                        event.metaKey ||
                        event.ctrlKey ||
                        event.shiftKey ||
                        event.altKey ||
                        event.button !== 0
                      ) {
                        return;
                      }
                      event.preventDefault();
                      navigate(`/${route.section}`);
                    }}>
                    {`Back to ${BACK_LABEL[route.section]}`}
                  </Button>
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
