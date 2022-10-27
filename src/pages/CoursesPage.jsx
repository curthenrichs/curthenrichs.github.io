import React from 'react';

import PageTemplate from '../components/PageTemplate';

import SectionHome from './sections/CoursesHome';
import SectionCourses from './sections/Courses';
import SectionContact from './sections/Contact';


const CoursesPage = (props) => {
  return (
    <PageTemplate
      inDevelopment
      header={{
        simple: false,
        pageName: 'Courses',
        innerButtons: [
          {
            id: 'home-btn',
            flexPx: 150,
            content: 'Philosophy'
          },
          {
            id: 'courses-btn',
            flexPx: 150,
            content: 'Courses'
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
        collapseWidth: 1500
      }}
      sections={[
        {
          name: 'sect-home',
          navItem: 'home-btn',
          sectionType: 'type-a',
          scrollProperties: {
            duration: 500,
            smooth: true,
            offset: -100
          },
          content: (<SectionHome />)
        },
        {
          name: 'sect-courses',
          navItem: 'courses-btn',
          sectionType: 'type-b',
          scrollProperties: {
            duration: 500,
            smooth: true,
            offset: -100
          },
          content: (<SectionCourses />)
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
