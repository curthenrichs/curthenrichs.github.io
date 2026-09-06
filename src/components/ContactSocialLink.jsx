import React from "react";
import contactData from "../content/contact";

// A contactData entry rendered as a link for the legal pages' Contact lists,
// so the handles there come from the one source the Contact section uses.
const ContactSocialLink = ({ entry }) => (
  <a href={contactData[entry].link} target="_blank" rel="noopener noreferrer">
    {contactData[entry].text}
  </a>
);

export default ContactSocialLink;
