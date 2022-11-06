import React from "react";
import { ProjectDigests as data } from "../../content/projects";
import ProjectCard from "../../components/ProjectCard";
import { Typography } from "antd";


const { Title } = Typography;


const SectionProjects = () => {
  return (
    <div>
      <Title>Notable Projects</Title>
      <br/>
      <br/>
      
      {data.map((entry, idx) => (
            <ProjectCard
              key={idx}
              digest={entry}
              style={{
                paddingBottom: "1em",
                margin: "auto"
              }}
            />
        ))}
    </div>
  );
};


export default SectionProjects;
