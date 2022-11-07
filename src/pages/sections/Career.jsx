import React from "react";
import data from "../../content/career";
import ItemCardTemplate from "../../components/ItemCardTemplate";
import { Divider, Typography } from "antd";
import MarkdownContent from "../../components/MarkdownContent";
import ImageCarousel from "../../components/ImageCarousel";
import { ToolFilled } from "@ant-design/icons";
import { IconLookupFromName } from "../../components/CustomIcons";


const { Title, Text } = Typography;


const SectionCareer = () => {
  const list = data.slice().reverse();

  return (
    <div>
      <Title>Career</Title>
      <br/>
      <br/>
      
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
          brief={(<Text>{entry.brief}</Text>)}
          long={(<Text>Hello World</Text>)}
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


export default SectionCareer;
