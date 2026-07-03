import React, { useState, useMemo } from "react";
import { Tag, Tooltip } from "antd";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { IconLookupFromName } from "../../../components/IconManager";
import { CATEGORY_COLORS } from "../../../content/domains";
import skillsData from "../../../content/skills";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "language", label: "Languages" },
  { key: "framework", label: "Frameworks" },
  { key: "platform", label: "Platforms" },
  { key: "tool", label: "Tools" },
  { key: "domain", label: "Domains / Methods" }
];

// Evaluated once at module scope, on first render, not in an effect: the
// prerender marker is still present when this component's first render
// runs (it is deleted in PageTemplate's componentDidMount, which fires
// after children mount/render). If this component's first paint is
// hydrating a prerendered snapshot, skip the entrance animation so the
// first render matches the snapshot's settled (animate-end) state exactly;
// otherwise (dev server, client-side navigation) keep the normal animation.
const hydratedFromSnapshot =
  typeof window !== "undefined" && window.__PRERENDERED_WIDTH__ !== undefined;

const SkillTags = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = useMemo(() => {
    if (activeFilter === "all") return skillsData;
    return skillsData.filter((s) => s.category === activeFilter);
  }, [activeFilter]);

  return (
    <div style={{ padding: "0 5%" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          justifyContent: "center",
          marginBottom: 24
        }}
      >
        {FILTERS.map((f) => (
          <Tag.CheckableTag
            key={f.key}
            checked={activeFilter === f.key}
            onChange={() => setActiveFilter(f.key)}
            className="skills-filter-tag"
          >
            {f.label}
          </Tag.CheckableTag>
        ))}
      </div>

      <LayoutGroup>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center"
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((skill) => (
              <motion.div
                key={skill.id}
                layout
                initial={hydratedFromSnapshot ? false : { opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <Tooltip title={skill.hover}>
                  <Tag
                    color={CATEGORY_COLORS[skill.category]}
                    style={{
                      fontSize: "var(--fs-md)",
                      padding: "4px 12px",
                      margin: 0,
                      cursor: "default",
                      display: "inline-flex",
                      alignItems: "center"
                    }}
                  >
                    <span style={{ marginRight: 6, display: "inline-flex" }}>
                      {IconLookupFromName[skill.icon]}
                    </span>
                    {skill.name}
                  </Tag>
                </Tooltip>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </LayoutGroup>
    </div>
  );
};

export default SkillTags;
