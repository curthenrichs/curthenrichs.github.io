import React from 'react';
import ReactMarkdown from 'react-markdown';

import DefaultImg from './DefaultImg';
import { GetMarkdownPathFromName } from '../content/projects'

import { Modal, Button } from 'antd';
import { Image, Divider } from 'antd';


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

    let windowWidth = 0.8 * width;
    windowWidth = (width < 800) ? 0.95 * width : 0.8 * width;

    const renderers = {
      link: (props) => (<a href={props.href} target="_blank" rel="noopener noreferrer">{props.children}</a>)
    }

    return (
      <Modal
        title={`${digest.title} ~ ${digest.brief}`}
        centered
        visible={visible}
        width={windowWidth}
        onOk={closeCallback}
        onCancel={closeCallback}
        footer={null}
      >
        <div style={{textAlign: 'center'}}>
          <Image
          style={{borderRadius: '35%'}}
            preview={false}
            src={digest.img}
            fallback={DefaultImg}
          />
        </div>
        <Divider />
        <ReactMarkdown source={markdown} renderers={renderers}/>
      </Modal>
    );
  }
}

export default ProjectModal;
