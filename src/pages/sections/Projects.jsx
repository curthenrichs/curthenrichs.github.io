import React from "react";
import data from "../../content/projects";
import ItemCardTemplate from "../../components/ItemCardTemplate";
import { Divider, Typography } from "antd";
import MarkdownContent from "../../components/MarkdownContent";
import ImageCarousel from "../../components/ImageCarousel";
import { GraduateCap } from "../../components/CustomIcons";
import { ExperimentFilled, StarFilled } from "@ant-design/icons";


const { Title, Text } = Typography;


const SectionProjects = () => {
  const list = data.slice().filter((project) => (project.notable));

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

  return (
    <div>
      <Title>Notable Projects</Title>
      <br/>
      <br/>
      
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
          brief={(<Text>{entry.brief}</Text>)}
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
