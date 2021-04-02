import React, { Fragment } from 'react';

import MarkdownContent from '../MarkdownContent';
import { ResumeDescriptionPath } from '../../content/resumes';

import { Typography } from 'antd';
const { Title } = Typography;


const SectionHome = (props) => {

  return (
    <Fragment>
      <br />
      <Title>Aspiration</Title>

      <div style={{ maxWidth: '1000px'}}>
        <MarkdownContent
          markdownPath={ResumeDescriptionPath}
        />
      </div>
    </Fragment>
  );
};


export default SectionHome;
