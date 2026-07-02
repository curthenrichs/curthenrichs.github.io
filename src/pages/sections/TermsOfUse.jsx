import React from "react";
import { Typography } from "antd";
import DocumentContainer from "../../components/DocumentContainer";
import contactData from "../../content/contact";

const { Title, Paragraph, Text, Link } = Typography;

const SectionTermsOfUse = () => {
  return (
    <DocumentContainer>
      <Title level={2}>Terms of Use</Title>

      <Paragraph>
        <Text type="secondary">Version 2.0. Last updated: July 1, 2026</Text>
      </Paragraph>

      <Paragraph>
        Welcome to Curt Henrichs&apos; Portfolio website, located at{" "}
        <Link href="https://curthenrichs.github.io/" target="_blank" rel="noopener noreferrer">
          https://curthenrichs.github.io/
        </Link>{" "}
        (the &quot;Site&quot;). These terms describe the conditions for using the Site. By using
        the Site, you accept these terms.
      </Paragraph>

      <Title level={3}>Ownership and Copyright</Title>

      <Paragraph>
        The Site and its content are the copyrighted work of Curt Henrichs LLC unless otherwise
        attributed. Copyright &copy; 2022-2026 Curt Henrichs LLC. All rights reserved. Third-party
        icons, logos, and other assets remain the property of their respective owners; see the{" "}
        <Link href="/attribution">Attribution and Licenses</Link> page for details.
      </Paragraph>

      <Title level={3}>License to View</Title>

      <Paragraph>
        You are granted a non-transferable, non-exclusive, revocable license to access and view the
        Site for your own personal, noncommercial use.
      </Paragraph>

      <Title level={3}>Acceptable Use</Title>

      <Paragraph>
        You may not copy, reproduce, republish, or redistribute the Site or its content beyond what
        fair use allows, sell or commercially exploit the Site, or misrepresent its content or
        authorship as your own. All copyright and attribution notices must be retained on any
        permitted copies.
      </Paragraph>

      <Title level={3}>Third-Party Links</Title>

      <Paragraph>
        The Site links to third-party websites and services (for example GitHub, LinkedIn, and my
        blog). These are not under my control, and I am not responsible for their content or
        practices. When you follow a link, the third party&apos;s own terms and privacy policies
        apply.
      </Paragraph>

      <Title level={3}>No Warranty</Title>

      <Paragraph>
        The Site is provided on an &quot;as is&quot; and &quot;as available&quot; basis, without
        warranties of any kind, express or implied. I do not guarantee the Site will be available,
        uninterrupted, error-free, or that its content is complete or current.
      </Paragraph>

      <Title level={3}>Limitation of Liability</Title>

      <Paragraph>
        To the maximum extent permitted by law, Curt Henrichs LLC shall not be liable for any
        damages arising from or relating to your use of, or inability to use, the Site. Your use of
        the Site is at your own discretion and risk.
      </Paragraph>

      <Title level={3}>Governing Law</Title>

      <Paragraph>
        These terms are governed by the laws of the State of California, without regard to its
        conflict of law provisions.
      </Paragraph>

      <Title level={3}>Changes to These Terms</Title>

      <Paragraph>
        These terms may be revised from time to time. Changes take effect when posted on this page,
        with the version and date above updated accordingly. Continued use of the Site after
        changes are posted constitutes acceptance of the revised terms.
      </Paragraph>

      <Title level={3}>Contact</Title>

      <Paragraph>If you have any questions about these Terms of Use, you can contact me:</Paragraph>

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

export default SectionTermsOfUse;
