import React from "react";
import DocumentContainer from "./DocumentContainer";
import MarkdownContent from "./MarkdownContent";
import ContactEmailLink from "./ContactEmailLink";
import ContactSocialLink from "./ContactSocialLink";

const LegalDocument = ({ markdownPath }) => (
  <DocumentContainer>
    <MarkdownContent
      markdownPath={markdownPath}
      images={[]}
      extraComponents={{
        email: () => <ContactEmailLink />,
        x: () => <ContactSocialLink entry="twitter" />,
        bluesky: () => <ContactSocialLink entry="bluesky" />
      }}
    />
  </DocumentContainer>
);

export default LegalDocument;
