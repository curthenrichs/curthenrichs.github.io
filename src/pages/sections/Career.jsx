import React, { useContext } from "react";
import careerData from "../../content/career";
import publicationData from "../../content/publications";
import ItemCardTemplate from "../../components/ItemCardTemplate";
import { ToolFilled, IconLookupFromName } from "../../components/IconManager";
import SectionTitle from "../../components/SectionTitle";
import { WidthContext } from "../../contexts";
import { BP_CONTENT_MAX_WIDTH } from "../../breakpoints";
import ItemModalContent from "../../components/ItemModalContent";

const SectionCareer = (props) => {
  let { title } = props;

  if (title === undefined) {
    title = "Career";
  }

  const list = Object.values(careerData).slice().reverse();
  const width = useContext(WidthContext);

  const cardWidth = BP_CONTENT_MAX_WIDTH;
  const extraWidth = width - cardWidth;

  return (
    <div
      style={{
        paddingLeft: width > cardWidth ? `${extraWidth / 2}px` : "0px",
        paddingRight: width > cardWidth ? `${extraWidth / 2}px` : "0px"
      }}>

      <SectionTitle title={title}/>

      {list.map((entry, idx) => (
        <ItemCardTemplate
          id={entry.id}
          key={idx}
          digest={entry}
          style={{
            paddingBottom: "1em",
            margin: "auto"
          }}
          title={entry.company}
          icon={<ToolFilled />}
          img={entry.thumbnail}
          brief={entry.brief}
          descriptionMarkdownPath={entry.descriptionMarkdownPath}
          publications={entry.publications.map(
            (pub) => `${publicationData[pub].short} (${publicationData[pub].venue})`
          )}
          positions={entry.positions.map((pos) => `${pos.title}`).reverse()}
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

export default SectionCareer;
