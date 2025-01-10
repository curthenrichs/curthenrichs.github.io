import React from "react";
import { Typography } from "antd";
import quotes from "../../content/quotes";
import SectionTitle from "../../components/SectionTitle";

const { Paragraph } = Typography;


const SectionInspirationPublications = (props) => {
  let { title, noBr } = props;

  if (title === undefined) {
    title = "Inspiration";
  }

  const selected = quotes[Math.floor(Math.random()*quotes.length)];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      {(title !== null) && (<SectionTitle title={title} />)}
      <Paragraph italic style={{ textAlign: "center" }}>&quot;{selected.quote}&quot;</Paragraph>
      <Paragraph italic style={{ textAlign: "center" }}>- {selected.attribution}</Paragraph>
      {(!noBr) && <br />}
    </div>
  );
};

export default SectionInspirationPublications;
