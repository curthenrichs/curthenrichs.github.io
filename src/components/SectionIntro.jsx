import React, { useContext } from "react";
import SectionTitle from "./SectionTitle";
import MarkdownContent from "./MarkdownContent";
import ErrorBoundary from "./ErrorBoundary";
import { WidthContext } from "../contexts";
import { BP_CONTENT_MAX_WIDTH } from "../breakpoints";

// Intro prose block for a card-list page: optional section title followed by
// a markdown file, width-capped to align with the card column below it.
const SectionIntro = (props) => {
  const { title, level, markdownPath } = props;

  const width = useContext(WidthContext);

  const cardWidth = BP_CONTENT_MAX_WIDTH;
  const extraWidth = width - cardWidth;

  return (
    <div
      style={{
        paddingLeft: width > cardWidth ? `${extraWidth / 2}px` : "0px",
        paddingRight: width > cardWidth ? `${extraWidth / 2}px` : "0px"
      }}>
      {title !== undefined && <SectionTitle title={title} level={level} />}
      <ErrorBoundary>
        <MarkdownContent markdownPath={markdownPath} />
      </ErrorBoundary>
    </div>
  );
};

export default SectionIntro;
