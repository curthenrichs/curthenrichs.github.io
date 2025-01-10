import React, { Fragment } from "react";
import contactData from "../../content/contact";

const SectionHome = () => {
  return (
    <Fragment>
      <h2>Accessibility Policy</h2>

      <p>This is an accessibility statement from Curt Henrichs LLC.</p>

      <h3>Conformance status</h3>

      <p>
        The{" "}
        <a
          href="https://www.w3.org/WAI/standards-guidelines/wcag/"
          target="_blank"
          rel="noopener noreferrer">
          Web Content Accessibility Guidelines (WCAG)
        </a>{" "}
        &nbsp; defines requirements for designers and developers to improve accessibility for people
        with disabilities. It defines three levels of conformance:&nbsp; Level A, Level AA, and
        Level AAA. Curt Henrichs Portfolio Website is not assessed with WCAG 2.1 level AA. Not
        assessed means that the content&nbsp; has not been evaluated or the evaluation results are
        not available.
      </p>

      <h3>Feedback</h3>

      <p>
        We welcome your feedback on the accessibility of Curt Henrichs&lsquo; Portfolio
        Website.&nbsp; Please let us know if you encounter accessibility barriers on this website:
      </p>

      <ul>
        <li>
          Email:&nbsp;
          <a href={contactData.email.link} target="_blank" rel="noopener noreferrer">
            {contactData.email.text}
          </a>
        </li>
        <li>
          Twitter:&nbsp;
          <a href={contactData.twitter.link} target="_blank" rel="noopener noreferrer">
            {contactData.twitter.text}
          </a>
        </li>
      </ul>

      <p>We try to respond to feedback as quickly as possible.</p>

      <h3>Technical specifications</h3>

      <p>
        Accessibility of Curt Henrichs&lsquo; Portfolio Website relies on the following technologies
        to work with the particular combination &nbsp; of web browser and any assistive technologies
        or plugins installed on your computer:
      </p>

      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>

      <p>
        These technologies are relied upon for conformance with the accessibility standards used.
      </p>

      <h3>Limitations and alternatives</h3>

      <p>
        Despite our best efforts to ensure accessibility of Curt Henrichs&lsquo; Portfolio Website,
        there may be some limitations. &nbsp; Below is a description of known limitations, and
        potential solutions. Please contact us if you observe an issue not listed below.
      </p>

      <p>Known limitations for Curt Henrichs&lsquo; Portfolio Website:</p>

      <ol>
        <li>
          <strong>Modal Image Carousels</strong>: Modal images may not have alt text, and/or
          captions may not render properly because In development. Feature rework in development.{" "}
        </li>
      </ol>

      <h3>Assessment approach</h3>

      <p>
        Curt Henrichs assessed the accessibility of Curt Henrichs&lsquo; Portfolio Website by the
        following approaches:
      </p>

      <ul>
        <li>Self-evaluation</li>
      </ul>

      <h3>Date</h3>

      <p>
        This statement was created on 4 December 2022 using the{" "}
        <a
          href="https://www.w3.org/WAI/planning/statements/"
          target="_blank"
          rel="noopener noreferrer">
          W3C Accessibility Statement Generator Tool
        </a>
        .
      </p>
    </Fragment>
  );
};

export default SectionHome;
