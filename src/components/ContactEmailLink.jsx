import React from "react";
import contactData from "../content/contact";

const ContactEmailLink = () => (
  <a href={contactData.email.link} target="_blank" rel="noopener noreferrer">
    {contactData.email.text}
  </a>
);

export default ContactEmailLink;
