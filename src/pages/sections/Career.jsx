import React, { useContext } from "react";
import careerData from "../../content/career";
import publicationData from "../../content/publications";
import ItemCardTemplate from "../../components/ItemCardTemplate";
import { ToolFilled } from "@ant-design/icons";
import { IconLookupFromName } from "../../components/CustomIcons";
import SectionTitle from "../../components/SectionTitle";
import { WidthContext } from "../../contexts";
import ItemModalContent from "../../components/ItemModalContent";


const SectionCareer = () => {
  const list = Object.values(careerData).slice().reverse();
  const width = useContext(WidthContext);

  const cardWidth = 1750;
  const extraWidth = width - cardWidth;

  return (
    <div style={{
      paddingLeft: (width > cardWidth) ? `${extraWidth/2}px` : "0px",
      paddingRight: (width > cardWidth) ? `${extraWidth/2}px` : "0px",
    }}>
      <SectionTitle title="Career"/>
      
      {list.map((entry, idx) => (
        <ItemCardTemplate
          id={entry._id}
          key={idx}
          digest={entry}
          style={{
            paddingBottom: "1em",
            margin: "auto"
          }}
          title={entry.company}
          icon={(<ToolFilled />)}
          img={entry.thumbnail}
          brief={entry.brief}
          long={entry.long}
          publications={entry.publications.map((pub) => (`${publicationData[pub].short} (${publicationData[pub].venue})`))}
          skills={entry.skills.map((skill) => (
            IconLookupFromName[skill]
          ))}
        >
          <ItemModalContent 
            images={entry.images}
            markdownPath={entry.markdownPath}
          />
        </ItemCardTemplate>
      ))}
    </div>
  );
};


export default SectionCareer;
