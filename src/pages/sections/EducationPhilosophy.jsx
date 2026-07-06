import React, { useContext } from "react";
import SectionTitle from "../../components/SectionTitle";
import MarkdownContent from "../../components/MarkdownContent";
import ErrorBoundary from "../../components/ErrorBoundary";
import PhilosophyMarkdown from "../../content/markdown/EducationPhilosophy.md";
import { WidthContext } from "../../contexts";
import { BP_CONTENT_MAX_WIDTH } from "../../breakpoints";

const SectionEducationPhilosophy = () => {
  const width = useContext(WidthContext);

  const cardWidth = BP_CONTENT_MAX_WIDTH;
  const extraWidth = width - cardWidth;

  return (
    <div
      style={{
        paddingLeft: width > cardWidth ? `${extraWidth / 2}px` : "0px",
        paddingRight: width > cardWidth ? `${extraWidth / 2}px` : "0px"
      }}>
      <SectionTitle title="A Triple Helix" />
      <ErrorBoundary>
        <MarkdownContent markdownPath={PhilosophyMarkdown} />
      </ErrorBoundary>
    </div>
  );
};

export default SectionEducationPhilosophy;
