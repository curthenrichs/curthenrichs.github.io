import React, { useState, useEffect, Fragment } from 'react';
import ReactMarkdown from 'react-markdown';

import { ResumeDescriptionPath } from '../../content/resumes';

import { Typography } from 'antd';
const { Title } = Typography;


const SectionHome = (props) => {

  const renderers = {
    link: (props) => (
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    )
  }

  const [markdown, setMarkdown] = useState('');
  useEffect(() => {
    const path = ResumeDescriptionPath;
    const abortController = new AbortController();

    fetch(path, { signal: abortController.signal})
      .then(res => res.text())
      .then(text => setMarkdown(text));

    return () => {
      abortController.abort();
    };
  });

  return (
    <Fragment>
      <br />
      <Title>Aspiration</Title>

      <div style={{ maxWidth: '1000px'}}>
        <ReactMarkdown source={markdown} renderers={renderers}/>
      </div>
    </Fragment>
  );
};


export default SectionHome;
