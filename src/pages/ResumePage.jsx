import React from 'react';

import PageTemplate from './PageTemplate';

import SectionHome from './sections/ResumeHome'
import SectionResume from './sections/Resume'
import SectionContact from './sections/Contact';


const ResumePage = (props) => {
  return (
    <PageTemplate
      header={{
        simple: false,
        pageName: 'Resume',
        innerButtons: [
          {
            id: 'robotics-btn',
            flexPx: 150,
            content: 'Robotics'
          },
          {
            id: 'embedded-btn',
            flexPx: 150,
            content: 'Embedded'
          },
          {
            id: 'software-btn',
            flexPx: 150,
            content: 'Software'
          },
          {
            id: 'contact-btn',
            flexPx: 150,
            content: 'Contact'
          }
        ],
        pageButtons: [
          {
            id: 'main-btn',
            flexPx: 150,
            content: 'Main Page',
            route: '/'
          },
          /*
          {
            id: 'courses-btn',
            flexPx: 150,
            content: 'Courses',
            route: '/courses'
          }
          */
        ],
        collapseWidth: 1500
      }}
      sections={[
        {
          name: 'sect-home',
          navItem: 'override',
          sectionType: 'type-a',
          content: (<SectionHome />)
        },
        {
          name: 'sect-robotics',
          navItem: 'robotics-btn',
          sectionType: 'type-b',
          scrollProperties: {
            duration: 500,
            smooth: true,
            offset: -60
          },
          content: (
            <SectionResume
              title="Robotics Engineer / Human-Robot Interaction Designer"
              id="robotics"
            />
          )
        },
        {
          name: 'sect-embedded',
          navItem: 'embedded-btn',
          sectionType: 'type-a',
          scrollProperties: {
            duration: 500,
            smooth: true,
            offset: -60
          },
          content: (
            <SectionResume
              title="Embedded Systems Engineer"
              id="embedded"
            />
          )
        },
        {
          name: 'sect-software',
          navItem: 'software-btn',
          sectionType: 'type-b',
          scrollProperties: {
            duration: 500,
            smooth: true,
            offset: -60
          },
          content: (
            <SectionResume
              title="Software Engineer"
              id="software"
            />
          )
        },
        {
          name: 'sect-contact',
          navItem: 'contact-btn',
          sectionType: 'type-a',
          scrollProperties: {
            duration: 500,
            smooth: true,
            offset: 0
          },
          content: (<SectionContact/>)
        }
      ]}
    />
  );
};


export default ResumePage;
