import React, { useContext } from "react";
import projectData from "../../content/projects";
import publicationData from "../../content/publications";
import ItemCardTemplate from "../../components/ItemCardTemplate";
import { Divider } from "antd";
import MarkdownContent from "../../components/MarkdownContent";
import ImageCarousel from "../../components/ImageCarousel";
import { GraduateCap } from "../../components/CustomIcons";
import { ExperimentFilled, StarFilled } from "@ant-design/icons";
import { IconLookupFromName } from "../../components/CustomIcons";
import SectionTitle from "../../components/SectionTitle";
import { WidthContext } from "../../contexts";


const SectionProjects = () => {
  const list = Object.values(projectData).filter((project) => (project.notable));
  const width = useContext(WidthContext);

  const typeToIcon = (type) => {
    switch (type.toLowerCase()) {
    case "research":
      return (<ExperimentFilled />);
    case "personal":
      return (<StarFilled />);
    case "coursework":
      return (<GraduateCap />);
    default:
      return null;
    }
  };

  const cardWidth = 1750;
  const extraWidth = width - cardWidth;

  return (
    <div style={{
        paddingLeft: (width > cardWidth) ? `${extraWidth/2}px` : "0px",
        paddingRight: (width > cardWidth) ? `${extraWidth/2}px` : "0px",
    }}>
      <SectionTitle title="Notable Projects"/>
      
      {list.map((entry, idx) => (
        <ItemCardTemplate
          id={entry._id}
          key={idx}
          style={{
            paddingBottom: "1em",
            margin: "auto"
          }}
          title={entry.title}
          icon={typeToIcon(entry.type)}
          img={entry.thumbnail}
          brief={entry.brief}
          long={entry.long}
          publications={entry.publications.map((pub) => (`${publicationData[pub].short} (${publicationData[pub].venue})`))}
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


export default SectionProjects;
