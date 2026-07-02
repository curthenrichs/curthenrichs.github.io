import React from "react";
import { Typography } from "antd";
import DocumentContainer from "../../components/DocumentContainer";
import contactData from "../../content/contact";

const { Title, Paragraph, Text, Link } = Typography;

const SectionAccessibilityPolicy = () => {
  return (
    <DocumentContainer>
      <Title level={2}>Accessibility Policy</Title>

      <Paragraph>
        <Text type="secondary">Last updated: July 1, 2026</Text>
      </Paragraph>

      <Paragraph>
        This is an accessibility statement from Curt Henrichs LLC for Curt Henrichs&apos; Portfolio
        website.
      </Paragraph>

      <Title level={3}>Conformance Status</Title>

      <Paragraph>
        The{" "}
        <Link
          href="https://www.w3.org/WAI/standards-guidelines/wcag/"
          target="_blank"
          rel="noopener noreferrer">
          Web Content Accessibility Guidelines (WCAG)
        </Link>{" "}
        define requirements for designers and developers to improve accessibility for people with
        disabilities, at three levels of conformance: Level A, Level AA, and Level AAA. This
        website has not been formally assessed against WCAG 2.1 Level AA, meaning the content has
        not been evaluated or the evaluation results are not available.
      </Paragraph>

      <Title level={3}>Feedback</Title>

      <Paragraph>
        I welcome your feedback on the accessibility of this website. Please let me know if you
        encounter accessibility barriers:
      </Paragraph>

      <ul>
        <li>
          Email:&nbsp;
          <Link href={contactData.email.link} target="_blank" rel="noopener noreferrer">
            {contactData.email.text}
          </Link>
        </li>
      </ul>

      <Paragraph>I try to respond to feedback as quickly as possible.</Paragraph>

      <Title level={3}>Technical Specifications</Title>

      <Paragraph>
        Accessibility of this website relies on the following technologies to work with the
        particular combination of web browser and any assistive technologies or plugins installed
        on your computer:
      </Paragraph>

      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>

      <Paragraph>
        These technologies are relied upon for conformance with the accessibility standards used.
      </Paragraph>

      <Title level={3}>Limitations and Alternatives</Title>

      <Paragraph>
        Despite my best efforts to ensure accessibility of this website, there may be some
        limitations. There are no known limitations at this time. If you observe an issue, please
        contact me using the feedback channel above and I will work to address it.
      </Paragraph>

      <Title level={3}>Assessment Approach</Title>

      <Paragraph>
        Curt Henrichs assessed the accessibility of this website by the following approaches:
      </Paragraph>

      <ul>
        <li>Self-evaluation</li>
      </ul>

      <Title level={3}>Date</Title>

      <Paragraph>
        This statement was created on 4 December 2022 using the{" "}
        <Link
          href="https://www.w3.org/WAI/planning/statements/"
          target="_blank"
          rel="noopener noreferrer">
          W3C Accessibility Statement Generator Tool
        </Link>
        . It was last reviewed and updated on 1 July 2026.
      </Paragraph>
    </DocumentContainer>
  );
};

export default SectionAccessibilityPolicy;
