import React, { useContext } from "react";
import PublicationCard from "../../components/PublicationCard";
import data from "../../content/publications";
import SectionTitle from "../../components/SectionTitle";
import { WidthContext } from "../../contexts";

const SectionPublications = (props) => {
  let { title } = props;

  if (title === undefined) {
    title = "Publications";
  }

  const list = Object.values(data);
  const width = useContext(WidthContext);

  const cardWidth = 1750;
  const extraWidth = width - cardWidth;

  return (
    <div
      style={{
        paddingLeft: width > cardWidth ? `${extraWidth / 2}px` : "0px",
        paddingRight: width > cardWidth ? `${extraWidth / 2}px` : "0px"
      }}>
      <SectionTitle title={title} />

      {list.map((entry, idx) => (
        <PublicationCard
          key={idx}
          id={entry.id}
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
