import React, { useContext, useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import DefaultImg from './DefaultImg';
import { WidthContext } from '../contexts';
import { ProjectImageCarousel, GetMarkdownPathFromName } from '../content/projects';

import { Modal, Button, Divider, Image } from 'antd';


const ImageCarousel = (props) => {

  const { options } = props;

  return (
    <Carousel autoPlay infiniteLoop>
      {options.map((entry, idx) => (
        <div key={idx} style={{display: 'flex', justifyContent: 'center'}}>
          <img
            src={entry["img"]}
            style={{maxHeight: '500px', maxWidth: '800px'}}
          />
          <p className="legend">{entry["caption"]}</p>
        </div>
      ))}
    </Carousel>
  );
};


const ProjectModal = (props) => {

  const { project, digest, visible, closeCallback } = props;

  const width = useContext(WidthContext);
  const modalWidth = (width > 1111) ? 1000 : width * 0.9;

  const renderers = {
    link: (props) => (
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    )
  }

  const [markdown, setMarkdown] = useState('');
  useEffect(() => {
    const path = GetMarkdownPathFromName(project);
    const abortController = new AbortController();
    
    fetch(path, { signal: abortController.signal})
      .then(res => res.text())
      .then(text => setMarkdown(text));

    return () => {
      abortController.abort();
    };
  });

  return (
    <Modal
      title={`${digest.title}`}
      centered
      visible={visible}
      width={modalWidth}
      onOk={closeCallback}
      onCancel={closeCallback}
      footer={null}
    >
      <div style={{textAlign: 'center'}}>
        <ImageCarousel options={ProjectImageCarousel[project]}/>
      </div>
      <Divider />
      <ReactMarkdown source={markdown} renderers={renderers}/>
    </Modal>
  );
};


export default ProjectModal;
