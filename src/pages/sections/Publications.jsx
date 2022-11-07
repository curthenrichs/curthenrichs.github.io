import React from "react";
import PublicationCard from "../../components/PublicationCard";
import data from "../../content/publications";
import { Typography } from "antd";


const { Title } = Typography;


const SectionPublications = () => {
  return (
    <div>
      <Title>Publications</Title>
      <br/>
      <br/>

      {data.map((entry, idx) => (
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
