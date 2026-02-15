import React, { useState } from "react";
import { Typography, Radio } from "antd";
import DomainCards from "./DomainCards";
import SkillTags from "./SkillTags";
import "./Skills.css";

const { Title } = Typography;

const SectionSkills = () => {
  const [view, setView] = useState("domains");

  return (
    <React.Fragment>
      <Title level={3}>Skills</Title>

      <div style={{ marginBottom: 24 }}>
        <Radio.Group
          optionType="button"
          buttonStyle="solid"
          value={view}
          onChange={(e) => setView(e.target.value)}
          options={[
            { label: "Domains", value: "domains" },
            { label: "Technologies", value: "technologies" }
          ]}
        />
      </div>

      {view === "domains" ? <DomainCards /> : <SkillTags />}
    </React.Fragment>
  );
};

export default SectionSkills;
