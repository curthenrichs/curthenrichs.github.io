import React from 'react';

import PageTemplate from './PageTemplate';

import SectionHome from '../components/sections/MainHome';
import SectionSkills from '../components/sections/Skills';
import SectionProjects from '../components/sections/Projects';
import SectionPublications from '../components/sections/Publications';
import SectionContact from '../components/sections/Contact';


const MainPage = (props) => {
  return (
    <PageTemplate
      header={{
        simple: false,
        pageName: 'Main',
        innerButtons: [
          {
            id: 'home-btn',
            flexPx: 150,
            content: 'Home'
          },
          {
            id: 'projects-btn',
            flexPx: 150,
            content: 'Projects'
          },
          {
            id: 'publications-btn',
            flexPx: 150,
            content: 'Publications'
          },
          {
            id: 'contact-btn',
            flexPx: 150,
            content: 'Contact'
          }
        ],
        pageButtons: [
          /*
          {
            id: 'courses-btn',
            flexPx: 150,
            content: 'Courses',
            route: '/courses'
          },
          */
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
          content: (<SectionHome/>)
        },
        {
          name: 'sect-skills',
          navItem: null,
          sectionType: 'type-a',
          style: { textAlign: 'center' },
          scrollProperties: null,
          content: (<SectionSkills/>)
        },
        {
          name: 'sect-projects',
          navItem: 'projects-btn',
          sectionType: 'type-b',
          scrollProperties: {
            duration: 500,
            smooth: true,
            offset: -60
          },
          content: (<SectionProjects/>)
        },
        {
          name: 'sect-publications',
          navItem: 'publications-btn',
          sectionType: 'type-b',
          scrollProperties: {
            duration: 500,
            smooth: true,
            offset: -80
          },
          content: (<SectionPublications/>)
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


export default MainPage;
