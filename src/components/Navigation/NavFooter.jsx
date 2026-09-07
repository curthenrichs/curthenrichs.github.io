import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { Typography, Divider } from "antd";
import { WidthContext } from "../../contexts";
import ExternalLink from "../ExternalLink";
import contactData from "../../content/contact";
import { ECOSYSTEM } from "../../content/ecosystem";

const { Text } = Typography;

const Spacer = () => {
  return <Fragment>&nbsp;|&nbsp;</Fragment>;
};

// The site map: pages of this site (`to`, router links) plus the one file it
// serves (`href`, a direct link to the PDF). Sites in the same family are not
// pages here; they are the Ecosystem group below.
export const FOOTER_LINKS = [
  { label: "Home", to: "/home" },
  { label: "Resume (PDF)", href: contactData.resume.link },
  { label: "Career", to: "/career" },
  { label: "Education", to: "/education" },
  { label: "Projects", to: "/projects" },
  { label: "Publications", to: "/publications" },
  { label: "Work with Me", to: "/contract" },
  { label: "Terms of Use", to: "/terms" },
  { label: "Accessibility Policy", to: "/accessibility" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Attribution", to: "/attribution" }
];

// Conservative average glyph width for the footer's 14px font, the rendered
// "&nbsp;|&nbsp;" separator, and the exit icon an external link carries.
// Deliberately estimated from string LENGTH, not real font metrics: font
// measurement can differ between the prerender browser and a visitor's
// browser, and a one-item packing difference would be a hydration mismatch.
// String lengths are identical everywhere, so packing is a pure function of
// (links, viewport width).
const CHAR_PX = 8;
const SEP_PX = 24;
const ICON_PX = 20;

const itemWidth = (link) => link.label.length * CHAR_PX + (link.href ? ICON_PX : 0);

// Greedily pack sitemap links into lines that fit the viewport, so the
// pipe separators only ever appear BETWEEN links on the same line (a
// hardcoded grouping wraps mid-line at widths it wasn't written for).
export const packFooterLines = (links, viewportWidth) => {
  const available = Math.max(viewportWidth - 100, 160);
  const lines = [];
  let line = [];
  let lineWidth = 0;
  links.forEach((link) => {
    const width = itemWidth(link);
    const needed = line.length === 0 ? width : SEP_PX + width;
    if (line.length > 0 && lineWidth + needed > available) {
      lines.push(line);
      line = [link];
      lineWidth = width;
    } else {
      line.push(link);
      lineWidth += needed;
    }
  });
  if (line.length > 0) {
    lines.push(line);
  }
  return lines;
};

const FooterLink = ({ link }) =>
  link.href ? (
    <ExternalLink href={link.href}>{link.label}</ExternalLink>
  ) : (
    <Link to={link.to}>{link.label}</Link>
  );

const Footer = () => {
  const width = useContext(WidthContext);
  const sitemap = packFooterLines(FOOTER_LINKS, width).map((line, idx) => (
    <Text key={idx} style={{ display: "block" }}>
      {line.map((link, i) => (
        <Fragment key={link.to || link.href}>
          {i > 0 && <Spacer />}
          <FooterLink link={link} />
        </Fragment>
      ))}
    </Text>
  ));

  // Sibling sites. One line: the list is short by design. Unshipped entries
  // (href null) render as muted text until they get a URL.
  const ecosystem = (
    <Text style={{ display: "block" }}>
      {ECOSYSTEM.map((entry, i) => (
        <Fragment key={entry.key}>
          {i > 0 && <Spacer />}
          {entry.href ? (
            <ExternalLink href={entry.href}>{entry.label}</ExternalLink>
          ) : (
            <Text type="secondary">{entry.label}</Text>
          )}
        </Fragment>
      ))}
    </Text>
  );

  return (
    <Fragment>
      <Divider type="horizontal" />
      {/* suppressHydrationWarning must sit on the text node's DIRECT parent;
          antd's <Text strong> wraps children in an inner <strong>, so the
          prop would be inert on <Text> itself. */}
      <Text strong><span suppressHydrationWarning>{`Curt Henrichs LLC © ${new Date().getFullYear()}`}</span></Text>
      <br />
      <Text>Created with Reactjs and Ant Design</Text>
      <br />
      {sitemap}
      <br />
      <Text strong>Ecosystem</Text>
      {ecosystem}
    </Fragment>
  );
};

export default Footer;
