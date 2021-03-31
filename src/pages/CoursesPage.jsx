import React from 'react';

import PageTemplate from './PageTemplate';

import SectionContact from '../components/sections/Contact';


const CoursesPage = (props) => {
  return (
    <PageTemplate
      inDevelopment
      header={{
        simple: false,
        pageName: 'Courses',
        innerButtons: [
          {
            id: 'masters-btn',
            flexPx: 150,
            content: 'Master\'s Degree'
          },
          {
            id: 'bachelors-btn',
            flexPx: 150,
            content: 'Bachelor\'s Degree'
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
            id: 'resume-btn',
            flexPx: 150,
            content: 'Resume',
            route: '/resumes'
          }
        ],
        collapseWidth: 950
      }}
      sections={[
        {
          name: 'sect-masters',
          navItem: 'masters-btn',
          sectionType: 'type-b',
          scrollProperties: {
            duration: 500,
            smooth: true,
            offset: -100
          },
          content: (<div>Master of Science in Computer Science</div>)
        },
        {
          name: 'sect-bachelors',
          navItem: 'bachelors-btn',
          sectionType: 'type-b',
          scrollProperties: {
            duration: 500,
            smooth: true,
            offset: -100
          },
          content: (<div>Bachelor of Science in Computer Engineering</div>)
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


export default CoursesPage;
