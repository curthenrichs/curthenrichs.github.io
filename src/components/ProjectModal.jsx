import React from 'react';
import ReactMarkdown from 'react-markdown';

import { ProjectImageCarousel, GetMarkdownPathFromName } from '../content/projects';
import DefaultImg from './DefaultImg';

import { Modal, Button, Divider, Image } from 'antd';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


function ImageCarousel(props) {

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
}


class ProjectModal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      markdown: ''
    };
  }

  componentWillMount() {
    const path = GetMarkdownPathFromName(this.props.project);
    fetch(path).then(res => res.text()).then(text => this.setState({ markdown: text}));
  }

  render() {
    const { markdown } = this.state;
    const { project, digest, width, visible, closeCallback } = this.props;

    const renderers = {
      link: (props) => (<a href={props.href} target="_blank" rel="noopener noreferrer">{props.children}</a>)
    }

    const modalWidth = (width > 1111) ? 1000 : width * 0.9;

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
  }
}

export default ProjectModal;
