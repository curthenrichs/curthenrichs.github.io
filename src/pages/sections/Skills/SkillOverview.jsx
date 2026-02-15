import React from "react";
import { IconLookupFromName } from "../../../components/IconManager";
import { domains } from "../../../content/domains";

const SkillOverview = ({ onNavigate }) => {
  return (
    <div className="overview-grid">
      {domains.map((d) => (
        <div
          key={d.key}
          className="overview-domain-card"
          onClick={() => onNavigate("domains")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") onNavigate("domains");
          }}
        >
          <span className="overview-domain-card-icon">
            {IconLookupFromName[d.icon]}
          </span>
          <span className="overview-domain-card-title">{d.title}</span>
        </div>
      ))}
    </div>
  );
};

export default SkillOverview;
