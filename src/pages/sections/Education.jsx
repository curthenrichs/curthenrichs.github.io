import React, { useContext } from "react";
import educationData from "../../content/education";
import publicationData from "../../content/publications";
import ItemCardTemplate from "../../components/ItemCardTemplate";
import { GraduateCap, IconLookupFromName } from "../../components/IconManager";
import SectionTitle from "../../components/SectionTitle";
import { WidthContext } from "../../contexts";
import ItemModalContent from "../../components/ItemModalContent";

const SectionEducation = (props) => {
  let { title } = props;

  if (title === undefined) {
    title = "Education";
  }

  const list = Object.values(educationData).reverse();
  const width = useContext(WidthContext);

  const cardWidth = 1750;
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
          icon={<GraduateCap />}
          img={entry.thumbnail}
          brief={entry.school}
          descriptionMarkdownPath={entry.descriptionMarkdownPath}
          publications={entry.publications.map(
            (pub) => `${publicationData[pub].short} (${publicationData[pub].venue})`
          )}
          skills={entry.skills.map((skill) => IconLookupFromName[skill])}>
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

export default SectionEducation;
