import React, { useContext } from "react";
import projectData from "../../content/projects";
import publicationData from "../../content/publications";
import ItemCardTemplate from "../../components/ItemCardTemplate";
import {
  GraduateCap,
  ExperimentFilled,
  StarFilled
} from "../../components/IconManager";
import SectionTitle from "../../components/SectionTitle";
import { WidthContext } from "../../contexts";
import { BP_CONTENT_MAX_WIDTH } from "../../breakpoints";
import ItemModalContent from "../../components/ItemModalContent";


const TypeToIcon = (type) => {
  switch (type.toLowerCase()) {
  case "research":
    return <ExperimentFilled />;
  case "personal":
    return <StarFilled />;
  case "coursework":
    return <GraduateCap />;
  default:
    return null;
  }
};


const SectionProjects = (props) => {
  let { title, notableOnly } = props;

  if (title === undefined) {
    title = "Projects";
  }

  let list = Object.values(projectData);
  if (notableOnly) {
    list = list.filter((project) => (project.notable));
  }
  
  const width = useContext(WidthContext);
  const cardWidth = BP_CONTENT_MAX_WIDTH;
  const extraWidth = width - cardWidth;

  return (
    <div
      style={{
        paddingLeft: width > cardWidth ? `${extraWidth / 2}px` : "0px",
        paddingRight: width > cardWidth ? `${extraWidth / 2}px` : "0px"
      }}>
      <SectionTitle title={title} />

      {list.map((entry, idx) => (
        <ItemCardTemplate
          id={entry.id}
          key={idx}
          style={{
            paddingBottom: "1em",
            margin: "auto"
          }}
          title={entry.title}
          icon={TypeToIcon(entry.type)}
          img={entry.thumbnail}
          brief={entry.brief}
          descriptionMarkdownPath={entry.descriptionMarkdownPath}
          publications={entry.publications.map(
            (pub) => `${publicationData[pub].short} (${publicationData[pub].venue})`
          )}
          skills={entry.skills}
          preloadImages={entry.images.map((img) => img.img)}
        >
          <ItemModalContent 
            images={entry.images} 
            markdownPath={entry.modalMarkdownPath}
            primaryLink={entry.primaryLink} 
          />
        </ItemCardTemplate>
      ))}
    </div>
  );
};

export default SectionProjects;
