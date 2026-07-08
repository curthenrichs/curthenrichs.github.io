import React, { useState, useCallback } from "react";
import { Typography, Radio } from "antd";
import { BP_CONTENT_MAX_WIDTH } from "../../../breakpoints";
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
    // Capped at the same max width as the card columns so the skills views
    // stay aligned with the rest of the page on ultrawide displays.
    <div style={{ maxWidth: `${BP_CONTENT_MAX_WIDTH}px`, margin: "0 auto" }}>
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
    </div>
  );
};

export default SectionSkills;
