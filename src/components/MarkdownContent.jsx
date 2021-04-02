import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';


const MarkdownContent = (props) => {

  const { markdownPath } = props;

  const renderers = {
    link: (props) => (
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    )
  }

  const [markdown, setMarkdown] = useState('');
  useEffect(() => {
    const abortController = new AbortController();

    fetch(markdownPath, { signal: abortController.signal})
      .then(res => res.text())
      .then(text => setMarkdown(text))
      .catch(ex => {
        setMarkdown('');
      });

    return () => {
      abortController.abort();
    };
  });

  return (<ReactMarkdown source={markdown} renderers={renderers}/>);
};


export default MarkdownContent;
