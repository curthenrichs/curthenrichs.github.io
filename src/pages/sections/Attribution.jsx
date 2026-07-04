import React from "react";
import DocumentContainer from "../../components/DocumentContainer";
import MarkdownContent from "../../components/MarkdownContent";
import IconChips from "../../components/IconChips";
import attributionIcons from "../../content/attributionIcons";
import AttributionMarkdown from "../../content/markdown/attribution/Attribution.md";

const SectionAttribution = () => (
  <DocumentContainer>
    <MarkdownContent
      markdownPath={AttributionMarkdown}
      images={[]}
      extraComponents={{ icons: (props) => <IconChips names={attributionIcons[props.id]} /> }}
    />
  </DocumentContainer>
);

export default SectionAttribution;
