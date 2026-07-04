import React from "react";
import { Tag } from "antd";

const TAG_STYLE = { marginBottom: "8px" };

const IconChips = ({ names }) => {
  if (!names || names.length === 0) {
    return null;
  }
  return (
    <>
      {names.map((entry) =>
        typeof entry === "string" ? (
          <Tag key={entry} style={TAG_STYLE}>{entry}</Tag>
        ) : (
          <Tag key={entry.name} style={TAG_STYLE}>
            <a href={entry.href} target="_blank" rel="noopener noreferrer">{entry.name}</a>
          </Tag>
        )
      )}
    </>
  );
};

export default IconChips;
