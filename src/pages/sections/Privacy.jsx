import React from "react";
import { Typography } from "antd";
import DocumentContainer from "../../components/DocumentContainer";
import contactData from "../../content/contact";

const { Title, Paragraph, Text, Link } = Typography;

const SectionPrivacyPolicy = () => {
  return (
    <DocumentContainer>
      <Title level={2}>Privacy Policy</Title>

      <Paragraph>
        <Text type="secondary">Last updated: July 1, 2026</Text>
      </Paragraph>

      <Paragraph>
        This Privacy Policy describes how Curt Henrichs&apos; Portfolio website, accessible from{" "}
        <Link href="https://curthenrichs.github.io/" target="_blank" rel="noopener noreferrer">
          https://curthenrichs.github.io/
        </Link>{" "}
        (the &quot;Site&quot;), handles your information. The short version: the Site is a static
        portfolio and collects nothing.
      </Paragraph>

      <Title level={3}>What This Site Is</Title>

      <Paragraph>
        The Site is a static website hosted on GitHub Pages. It has no user accounts, no forms, no
        purchases, and no backend of its own. Nothing you do on the Site is recorded by me.
      </Paragraph>

      <Title level={3}>Data Collected</Title>

      <Paragraph>
        I do not collect, store, or process any personal data through the Site. As with most web
        hosting, GitHub may log technical information server-side (such as IP addresses) when
        serving pages. That logging is governed by the{" "}
        <Link
          href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
          target="_blank"
          rel="noopener noreferrer">
          GitHub Privacy Statement
        </Link>
        .
      </Paragraph>

      <Title level={3}>Cookies</Title>

      <Paragraph>The Site does not set cookies.</Paragraph>

      <Title level={3}>Analytics</Title>

      <Paragraph>The Site does not use analytics or tracking services of any kind.</Paragraph>

      <Title level={3}>External Links</Title>

      <Paragraph>
        The Site links to third-party websites such as GitHub, LinkedIn, and my blog. Those sites
        have their own privacy policies, and I have no control over what they collect. I encourage
        you to review the privacy policy of any site you visit.
      </Paragraph>

      <Title level={3}>Email Contact</Title>

      <Paragraph>
        If you choose to email me, I will use your email address and message only to respond to
        you. I do not share, sell, or add your contact information to any mailing list.
      </Paragraph>

      <Title level={3}>Children&apos;s Privacy</Title>

      <Paragraph>
        The Site does not collect personal data from anyone, including children. If you believe a
        child has sent me personal information by email, contact me and I will delete it.
      </Paragraph>

      <Title level={3}>Changes to This Policy</Title>

      <Paragraph>
        This policy may be updated from time to time. Changes are effective when posted on this
        page, with the date above updated accordingly.
      </Paragraph>

      <Title level={3}>Contact</Title>

      <Paragraph>If you have any questions about this Privacy Policy, you can contact me:</Paragraph>

      <ul>
        <li>
          Email:&nbsp;
          <Link href={contactData.email.link} target="_blank" rel="noopener noreferrer">
            {contactData.email.text}
          </Link>
        </li>
      </ul>
    </DocumentContainer>
  );
};

export default SectionPrivacyPolicy;
