import React, { useContext } from "react";
import educationData from "../../../content/education";
import publicationData from "../../../content/publications";
import ItemCardTemplate from "../../../components/ItemCardTemplate";
import { GraduateCap, IconLookupFromName } from "../../../components/IconManager";
import SectionTitle from "../../../components/SectionTitle";
import { WidthContext } from "../../../contexts";
import { BP_CONTENT_MAX_WIDTH } from "../../../breakpoints";
import ItemModalContent from "../../../components/ItemModalContent";

const SectionEducation = () => {
  const list = Object.values(educationData).reverse();
  const width = useContext(WidthContext);

  const cardWidth = BP_CONTENT_MAX_WIDTH;
  const extraWidth = width - cardWidth;

  return (
    <div
      style={{
        paddingLeft: width > cardWidth ? `${extraWidth / 2}px` : "0px",
        paddingRight: width > cardWidth ? `${extraWidth / 2}px` : "0px"
      }}>
      <SectionTitle title="Education" />

      {list.map((entry, idx) => (
        <ItemCardTemplate
          id={entry._id}
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
          <ItemModalContent images={entry.images} markdownPath={entry.modalMarkdownPath} />
        </ItemCardTemplate>
      ))}
    </div>
  );
};

export default SectionEducation;
