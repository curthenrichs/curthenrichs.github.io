import React from 'react';

import PageTemplate from './PageTemplate';

import SectionContact from '../components/sections/Contact';


const ResumePage = (props) => {
  return (
    <PageTemplate
      inDevelopment
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
            content: 'Embedded Systems'
          },
          {
            id: 'software-btn',
            flexPx: 150,
            content: 'Software Engineering'
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
          {
            id: 'courses-btn',
            flexPx: 150,
            content: 'Courses',
            route: '/courses'
          }
        ],
        collapseWidth: 950
      }}
      sections={[
        {
          name: 'sect-home',
          sectionType: 'type-a',
          content: (<div><br /><br /></div>)
        },
        {
          name: 'sect-robotics',
          navItem: 'robotics-btn',
          sectionType: 'type-b',
          scrollProperties: {
            duration: 500,
            smooth: true,
            offset: -100
          },
          content: (<div>Resume for Robotics Engineering and Human Robot Interaction</div>)
        },
        {
          name: 'sect-embedded',
          navItem: 'embedded-btn',
          sectionType: 'type-a',
          scrollProperties: {
            duration: 500,
            smooth: true,
            offset: -100
          },
          content: (<div>Resume for Embedded Systems Engineering</div>)
        },
        {
          name: 'sect-software',
          navItem: 'software-btn',
          sectionType: 'type-b',
          scrollProperties: {
            duration: 500,
            smooth: true,
            offset: -100
          },
          content: (<div>Resume for Software Engineering</div>)
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
