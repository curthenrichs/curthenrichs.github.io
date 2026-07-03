import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import quotes from "../../content/quotes";
import SectionTitle from "../../components/SectionTitle";

const { Paragraph } = Typography;


const SectionInspirationPublications = (props) => {
  let { title, noBr } = props;

  if (title === undefined) {
    title = "Inspiration";
  }

  // Deterministic on first render so it matches the prerendered snapshot
  // (whichever quote happened to be randomly chosen at prerender time).
  // Randomized post-mount so client-side users still see variety; the
  // suppressHydrationWarning below tells React not to abort hydration over
  // the resulting (expected, imperceptible) text swap.
  const [selected, setSelected] = useState(quotes[0]);

  useEffect(() => {
    setSelected(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      {(title !== null) && (<SectionTitle title={title} />)}
      {/* Each quote line must be a SINGLE text node (template string, not
          adjacent JSX text+expression children, which the HTML parser merges
          and hydration then miscounts), and suppressHydrationWarning must
          sit on the element that DIRECTLY contains the text (antd's `italic`
          prop wraps children in an <i>, so the Paragraph itself is the
          wrong element for it). */}
      <Paragraph italic style={{ textAlign: "center" }}>
        <span suppressHydrationWarning>{`"${selected.quote}"`}</span>
      </Paragraph>
      <Paragraph italic style={{ textAlign: "center" }}>
        <span suppressHydrationWarning>{`- ${selected.attribution}`}</span>
      </Paragraph>
      {(!noBr) && <br />}
    </div>
  );
};

export default SectionInspirationPublications;
