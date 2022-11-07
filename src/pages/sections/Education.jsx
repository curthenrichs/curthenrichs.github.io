import React from "react";
import data from "../../content/education";
import ItemCardTemplate from "../../components/ItemCardTemplate";
import { Divider, Typography } from "antd";
import MarkdownContent from "../../components/MarkdownContent";
import ImageCarousel from "../../components/ImageCarousel";
import { GraduateCap } from "../../components/CustomIcons";


const { Title, Text } = Typography;


const SectionEducation = () => {
  const list = data.slice().reverse();

  return (
    <div>
      <Title>Education</Title>
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
          icon={(<GraduateCap />)}
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


export default SectionEducation;
