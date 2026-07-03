import React from "react";
import { Typography, Tag } from "antd";
import DocumentContainer from "../../components/DocumentContainer";

const { Title, Paragraph, Link } = Typography;

const ANT_DESIGN_ICONS = [
  "WarningOutlined",
  "ToolFilled",
  "ExperimentFilled",
  "StarFilled",
  "GithubFilled",
  "MailOutlined",
  "LinkedinFilled",
  "TwitterOutlined (Bird)",
  "CaretRightOutlined",
  "QuestionOutlined",
  "DownCircleOutlined",
  "UpCircleOutlined",
  "DownloadOutlined",
  "EnvironmentFilled",
  "SettingOutlined"
];

const FLATICON_PIXEL_PERFECT_ICONS = ["mechanical-arm.svg", "menu.svg"];

const FLATICON_FREEPIK_ICONS = ["sketch.svg", "project.svg"];

const FONT_AWESOME_ICONS = [
  {
    name: "graduation-cap-solid.svg",
    href: "https://fontawesome.com/icons/graduation-cap?style=solid"
  },
  {
    name: "microchip-solid.svg",
    href: "https://fontawesome.com/icons/microchip?style=solid"
  },
  {
    name: "usb.svg",
    href: "https://fontawesome.com/icons/usb?f=brands&s=solid"
  }
];

const SIMPLE_ICONS = [
  "angular.svg",
  "arduino.svg",
  "cplusplus",
  "csharp.svg",
  "git.svg",
  "java.svg",
  "linux.svg",
  "microsoft.svg",
  "node-dot-js.svg",
  "python.svg",
  "react.svg",
  "ros.svg",
  "unity.svg",
  "javascript.svg",
  "keras.svg",
  "overleaf.svg",
  "mongodb.svg",
  "atlassian.svg",
  "autodesk.svg",
  "c.svg",
  "docker.svg",
  "raspberrypi.svg",
  "vuedotjs.svg",
  "redis.svg",
  "flask.svg",
  "antdesign.svg",
  "nvidia.svg",
  "intel.svg",
  "zigbee.svg",
  "altiumdesigner.svg",
  "typescript.svg",
  "opencv.svg",
  "xilinx.svg",
  "anthropic.svg",
  "openai.svg",
  "googlegemini.svg"
];

const DEVICON_ICONS = ["visualbasic.svg"];

const LUCIDE_ICONS = [
  "dna.svg",
  "circuit-board.svg",
  "users.svg",
  "code-xml.svg",
  "box.svg",
  "factory.svg",
  "brain.svg",
  "sparkles.svg"
];

const HAND_DRAWN_ICONS = ["matlab.svg", "labview.svg"];

const LOGOWIK_ICONS = ["twitter-x.svg"];

const TAG_STYLE = { marginBottom: "8px" };

const SectionAttribution = () => {
  return (
    <DocumentContainer>
      <Title level={2}>Attribution and Licenses</Title>

      <Title level={3}>General Attribution</Title>

      <Paragraph>
        Website created by Curt Henrichs (owner/maintainer) using React and Ant Design. Asset
        managed by Curt Henrichs LLC.
      </Paragraph>

      <Paragraph>
        {"Deployed on Github Pages static hosting. Deployment handled with "}
        <Link href="https://www.npmjs.com/package/gh-pages" target="_blank" rel="noopener noreferrer">
          gh-pages
        </Link>
        {"."}
      </Paragraph>

      <Paragraph>
        {"Thanks to "}
        <Link
          href="https://github.com/rafgraph/spa-github-pages"
          target="_blank"
          rel="noopener noreferrer">
          spa-github-pages
        </Link>
        {", hard refreshes are managed when deployed on Github Pages."}
      </Paragraph>

      <Title level={3}>Icons</Title>

      <Paragraph>The following sources were used for icons on this website:</Paragraph>

      <Title level={4}>Ant Design Icons</Title>

      <Paragraph>
        <Link href="https://ant.design/components/icon/" target="_blank" rel="noopener noreferrer">
          ant.design
        </Link>
      </Paragraph>

      <Paragraph>
        {ANT_DESIGN_ICONS.map((name) => (
          <Tag key={name} style={TAG_STYLE}>{name}</Tag>
        ))}
      </Paragraph>

      <Title level={4}>Flaticon Icons</Title>

      <Paragraph>
        {"Made by "}
        <Link
          href="https://www.flaticon.com/authors/pixel-perfect"
          title="Pixel perfect"
          target="_blank"
          rel="noopener noreferrer">
          Pixel perfect
        </Link>
        {" from "}
        <Link
          href="https://www.flaticon.com/"
          title="Flaticon"
          target="_blank"
          rel="noopener noreferrer">
          www.flaticon.com
        </Link>
        {":"}
      </Paragraph>

      <Paragraph>
        {FLATICON_PIXEL_PERFECT_ICONS.map((name) => (
          <Tag key={name} style={TAG_STYLE}>{name}</Tag>
        ))}
      </Paragraph>

      <Paragraph>
        {"Made by "}
        <Link
          href="https://www.freepik.com"
          title="Freepik"
          target="_blank"
          rel="noopener noreferrer">
          Freepik
        </Link>
        {" from "}
        <Link
          href="https://www.flaticon.com/"
          title="Flaticon"
          target="_blank"
          rel="noopener noreferrer">
          www.flaticon.com
        </Link>
        {":"}
      </Paragraph>

      <Paragraph>
        {FLATICON_FREEPIK_ICONS.map((name) => (
          <Tag key={name} style={TAG_STYLE}>{name}</Tag>
        ))}
      </Paragraph>

      <Title level={4}>Font Awesome Icons</Title>

      <Paragraph>
        {FONT_AWESOME_ICONS.map((icon) => (
          <Tag key={icon.name} style={TAG_STYLE}>
            <a href={icon.href} target="_blank" rel="noopener noreferrer">
              {icon.name}
            </a>
          </Tag>
        ))}
      </Paragraph>

      <Title level={4}>Simple-Icons Icons</Title>

      <Paragraph>
        <Link href="https://simpleicons.org/" target="_blank" rel="noopener noreferrer">
          simpleicons.org
        </Link>
      </Paragraph>

      <Paragraph>
        {SIMPLE_ICONS.map((name) => (
          <Tag key={name} style={TAG_STYLE}>{name}</Tag>
        ))}
      </Paragraph>

      <Title level={4}>Devicon Icons</Title>

      <Paragraph>
        <Link href="https://devicon.dev/" target="_blank" rel="noopener noreferrer">
          devicon.dev
        </Link>
        {" (MIT License)"}
      </Paragraph>

      <Paragraph>
        {DEVICON_ICONS.map((name) => (
          <Tag key={name} style={TAG_STYLE}>{name}</Tag>
        ))}
      </Paragraph>

      <Title level={4}>Lucide Icons</Title>

      <Paragraph>
        <Link href="https://lucide.dev/" target="_blank" rel="noopener noreferrer">
          lucide.dev
        </Link>
        {" (ISC License)"}
      </Paragraph>

      <Paragraph>
        {LUCIDE_ICONS.map((name) => (
          <Tag key={name} style={TAG_STYLE}>{name}</Tag>
        ))}
      </Paragraph>

      <Title level={4}>Others</Title>

      <Paragraph>Drawn by me using the original jpg/png icons as reference:</Paragraph>

      <Paragraph>
        {HAND_DRAWN_ICONS.map((name) => (
          <Tag key={name} style={TAG_STYLE}>{name}</Tag>
        ))}
      </Paragraph>

      <Paragraph>
        {"From "}
        <Link
          href="https://logowik.com/twitter-x-logo-vector-59293.html"
          target="_blank"
          rel="noopener noreferrer">
          logowink
        </Link>
        {":"}
      </Paragraph>

      <Paragraph>
        {LOGOWIK_ICONS.map((name) => (
          <Tag key={name} style={TAG_STYLE}>{name}</Tag>
        ))}
      </Paragraph>

      <Title level={3}>Favicon</Title>

      <Paragraph>Website favicon was generated using the following:</Paragraph>

      <ul>
        <li>Font Title: Iceland</li>
        <li>
          {"Font Author: "}
          <Link href="http://scripts.sil.org/OFL" target="_blank" rel="noopener noreferrer">
            http://scripts.sil.org/OFL
          </Link>
        </li>
        <li>
          {"Font Source: "}
          <Link
            href="http://fonts.gstatic.com/s/iceland/v9/rax9HiuFsdMNOnWPWKxGADBbg0s.ttf"
            target="_blank"
            rel="noopener noreferrer">
            fonts.gstatic.com
          </Link>
        </li>
        <li>
          {"Font License: SIL Open Font License, 1.1 ("}
          <Link href="http://scripts.sil.org/OFL" target="_blank" rel="noopener noreferrer">
            http://scripts.sil.org/OFL
          </Link>
          {")"}
        </li>
      </ul>

      <Title level={3}>Images</Title>

      <Paragraph>
        IDES photographs are published only with permission from the company. The visualization
        diagram explaining my roles at IDES is my own work.
      </Paragraph>

      <Paragraph>
        Dedicated Computing internship images were taken with permission from my supervisor during
        my time as an intern.
      </Paragraph>

      <Paragraph>
        The IDES logo, JEOL logo, Dedicated Computing logo, University of Wisconsin Madison logo,
        and Milwaukee School of Engineering logo are owned by their respective institutions.
      </Paragraph>

      <Paragraph>
        All other images / graphics / figures are copyrighted work of Curt Henrichs and/or from
        publications produced in whole/part by Curt Henrichs.
      </Paragraph>
    </DocumentContainer>
  );
};

export default SectionAttribution;
