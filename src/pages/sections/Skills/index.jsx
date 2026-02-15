import React, { useState, useCallback } from "react";
import { Typography, Radio } from "antd";
import SkillOverview from "./SkillOverview";
import DomainCards from "./DomainCards";
import SkillTags from "./SkillTags";
import "./Skills.css";

const { Title } = Typography;

const SectionSkills = () => {
  const [view, setView] = useState("overview");

  const handleNavigate = useCallback((target) => {
    setView(target);
  }, []);

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
            { label: "Overview", value: "overview" },
            { label: "Domains", value: "domains" },
            { label: "Technologies", value: "technologies" }
          ]}
        />
      </div>

      {view === "overview" && <SkillOverview onNavigate={handleNavigate} />}
      {view === "domains" && <DomainCards />}
      {view === "technologies" && <SkillTags />}
    </React.Fragment>
  );
};

export default SectionSkills;
