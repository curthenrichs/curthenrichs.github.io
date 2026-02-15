import React, { useContext } from "react";
import PublicationCard from "../../../components/PublicationCard";
import data from "../../../content/publications";
import SectionTitle from "../../../components/SectionTitle";
import { WidthContext } from "../../../contexts";
import { BP_CONTENT_MAX_WIDTH } from "../../../breakpoints";

const SectionPublications = () => {
  const list = Object.values(data);
  const width = useContext(WidthContext);

  const cardWidth = BP_CONTENT_MAX_WIDTH;
  const extraWidth = width - cardWidth;

  return (
    <div
      style={{
        paddingLeft: width > cardWidth ? `${extraWidth / 2}px` : "0px",
        paddingRight: width > cardWidth ? `${extraWidth / 2}px` : "0px"
      }}>
      <SectionTitle title="Publications" />

      {list.map((entry, idx) => (
        <PublicationCard
          key={idx}
          id={entry._id}
          title={entry.title}
          reference={entry.reference}
          link={entry.link}
          status={entry.status}
          style={{
            paddingBottom: "1em",
            margin: "auto"
          }}
        />
      ))}
    </div>
  );
};

export default SectionPublications;
