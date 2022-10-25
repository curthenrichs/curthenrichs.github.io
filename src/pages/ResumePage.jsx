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
            id: 'resume-btn',
            flexPx: 150,
            content: 'Resume'
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
          }
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
          name: 'sect-resume',
          navItem: 'resume-btn',
          sectionType: 'type-b',
          scrollProperties: {
            duration: 500,
            smooth: true,
            offset: -60
          },
          content: (
            <SectionResume
              title="Embedded Systems Engineer"
              id="resume"
            />
          )
        }
      ]}
    />
  );
};


export default ResumePage;
