import React from 'react';

import PageTemplate from '../components/PageTemplate';
import ReturnHomeButton from '../components/ReturnHomeButton';

import { Result, Button } from 'antd';


const NotFoundPage = (props) => {
  return (
    <PageTemplate
      header={{
        simple: true,
        pageName: "404 - Page Not Found"
      }}
      sections={[
        {
          name: 'sect-results',
          sectionType: 'type-a',
          content: (
            <Result
              status="404"
              title="404"
              subTitle="Apologies, but I don't know what you are looking for."
              extra={<ReturnHomeButton />}
            />
          )
        }
      ]}
    />
  );
};


export default NotFoundPage;
