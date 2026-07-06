import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { Typography, Divider } from "antd";
import { WidthContext } from "../../contexts";

const { Text } = Typography;

const Spacer = () => {
  return <Fragment>&nbsp;|&nbsp;</Fragment>;
};

export const FOOTER_LINKS = [
  { label: "Home", to: "/home" },
  { label: "Resume", to: "/resume" },
  { label: "Career", to: "/career" },
  { label: "Education", to: "/education" },
  { label: "Projects", to: "/projects" },
  { label: "Publications", to: "/publications" },
  { label: "Work with Me", to: "/contract" },
  { label: "Blog", to: "/blog" },
  { label: "Terms of Use", to: "/terms" },
  { label: "Accessibility Policy", to: "/accessibility" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Attribution", to: "/attribution" }
];

// Conservative average glyph width for the footer's 14px font, and the
// rendered "&nbsp;|&nbsp;" separator. Deliberately estimated from string
// LENGTH, not real font metrics: font measurement can differ between the
// prerender browser and a visitor's browser, and a one-item packing
// difference would be a hydration mismatch. String lengths are identical
// everywhere, so packing is a pure function of (links, viewport width).
const CHAR_PX = 8;
const SEP_PX = 24;

// Greedily pack sitemap links into lines that fit the viewport, so the
// pipe separators only ever appear BETWEEN links on the same line (a
// hardcoded grouping wraps mid-line at widths it wasn't written for).
export const packFooterLines = (links, viewportWidth) => {
  const available = Math.max(viewportWidth - 100, 160);
  const lines = [];
  let line = [];
  let lineWidth = 0;
  links.forEach((link) => {
    const itemWidth = link.label.length * CHAR_PX;
    const needed = line.length === 0 ? itemWidth : SEP_PX + itemWidth;
    if (line.length > 0 && lineWidth + needed > available) {
      lines.push(line);
      line = [link];
      lineWidth = itemWidth;
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

const Footer = () => {
  const width = useContext(WidthContext);

  const sitemap = packFooterLines(FOOTER_LINKS, width).map((line, idx) => (
    <Text key={idx} style={{ display: "block" }}>
      {line.map((link, i) => (
        <Fragment key={link.to}>
          {i > 0 && <Spacer />}
          <Link to={link.to}>{link.label}</Link>
        </Fragment>
      ))}
    </Text>
  ));

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
    </Fragment>
  );
};

export default Footer;
