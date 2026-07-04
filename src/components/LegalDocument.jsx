import React from "react";
import DocumentContainer from "./DocumentContainer";
import MarkdownContent from "./MarkdownContent";
import ContactEmailLink from "./ContactEmailLink";

const LegalDocument = ({ markdownPath }) => (
  <DocumentContainer>
    <MarkdownContent
      markdownPath={markdownPath}
      images={[]}
      extraComponents={{ email: () => <ContactEmailLink /> }}
    />
  </DocumentContainer>
);

export default LegalDocument;
