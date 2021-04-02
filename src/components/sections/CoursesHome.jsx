import React, { Fragment } from 'react';

import MarkdownContent from '../MarkdownContent';
import { CoursesDescriptionPath } from '../../content/courses';

import { Typography } from 'antd';
const { Title } = Typography;


const SectionHome = (props) => {

  return (
    <Fragment>
      <br />
      <Title>Educational Philosophy</Title>
      <br />

      <div style={{ maxWidth: '1000px'}}>
        <MarkdownContent
          markdownPath={CoursesDescriptionPath}
        />
      </div>
    </Fragment>
  );
};


export default SectionHome;
