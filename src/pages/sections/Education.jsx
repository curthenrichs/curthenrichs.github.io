import React from "react";
import educationData from "../../content/education";
import publicationData from "../../content/publications";
import ItemCardTemplate from "../../components/ItemCardTemplate";
import { Divider } from "antd";
import MarkdownContent from "../../components/MarkdownContent";
import ImageCarousel from "../../components/ImageCarousel";
import { GraduateCap } from "../../components/CustomIcons";
import { IconLookupFromName } from "../../components/CustomIcons";
import SectionTitle from "../../components/SectionTitle";


const SectionEducation = () => {
  const list = Object.values(educationData).reverse();

  return (
    <div>
      <SectionTitle title="Education"/>
      
      {list.map((entry, idx) => (
        <ItemCardTemplate
          id={entry._id}
          key={idx}
          style={{
            paddingBottom: "1em",
            margin: "auto"
          }}
          title={entry.title}
          icon={(<GraduateCap />)}
          img={entry.thumbnail}
          brief={entry.school}
          long={entry.long}
          publications={entry.publications.map((pub) => (publicationData[pub].short))}
          skills={entry.skills.map((skill) => (
            IconLookupFromName[skill]
          ))}
        >
          <div style={{textAlign: "center"}}>
            <ImageCarousel 
              options={entry.images}
            />
          </div>
          <Divider />
          <MarkdownContent
            markdownPath={entry.markdownPath}
          />
        </ItemCardTemplate>
      ))}
    </div>
  );
};


export default SectionEducation;
