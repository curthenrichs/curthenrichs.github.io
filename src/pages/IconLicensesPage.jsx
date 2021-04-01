import React, { Fragment } from 'react';

import SectionIconLicenses from '../components/sections/IconLicenses';
import SectionFaviconLicenses from '../components/sections/FaviconLicenses'
import ReturnHomeButton from '../components/ReturnHomeButton';

import PageTemplate from './PageTemplate';

import { Result, Button } from 'antd';


const IconLicensesPage = (props) => {
  return (
    <PageTemplate
      header={{
        simple: true,
        pageName: "Icon Licenses"
      }}
      sections={[
        {
          name: 'sect-icons',
          sectionType: 'type-a',
          content: (<SectionIconLicenses />)
        },
        {
          name: 'sect-favicon',
          sectionType: 'type-a',
          content: (<SectionFaviconLicenses />)
        },
        {
          name: 'sect-return',
          sectionType: 'type-a',
          style: { paddingTop: '3em' },
          content: (
            <Fragment>
              <div style={{textAlign: 'center'}}>
                <ReturnHomeButton />
              </div>
            </Fragment>
          )
        }
      ]}
    />
  );
};


export default IconLicensesPage;
