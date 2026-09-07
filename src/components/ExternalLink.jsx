import React from "react";
import { ExportOutlined } from "./IconManager";

// One way to leave the site: a real href (the browser shows the destination on
// hover; middle-click and "open in new tab" work), a new tab with the noopener
// guard, an outward-arrow icon, and hidden text so a screen reader hears the
// exit too. Used by the header/drawer external items and the footer.
const ExternalLink = ({ href, children, id, className, style }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" id={id} className={className} style={style}>
    {children}
    <ExportOutlined className="external-link-icon" aria-hidden="true" />
    <span className="visually-hidden"> (opens in a new tab)</span>
  </a>
);

export default ExternalLink;
