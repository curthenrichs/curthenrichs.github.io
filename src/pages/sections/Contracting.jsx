import React, { Fragment } from "react";
import MarkdownContent from "../../components/MarkdownContent";
import contractingData from "../../content/contracting";

const SectionContracting = () => {
    return (
        <Fragment>

            {!contractingData.available && (<MarkdownContent markdownPath={contractingData.unavailableText} />)}

            {contractingData.available && contractingData.renderFulltime && (<MarkdownContent markdownPath={contractingData.fulltimeText} />)}

            {contractingData.available && contractingData.renderConsulting && (<MarkdownContent markdownPath={contractingData.consultingText} />)}

        </Fragment>
    );
};

export default SectionContracting;