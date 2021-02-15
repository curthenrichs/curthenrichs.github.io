import React from 'react';
import ReactMarkdown from 'react-markdown';

import { ProjectImageCarousel, GetMarkdownPathFromName } from '../content/projects';
import DefaultImg from './DefaultImg';

import { Modal, Button, Carousel , Image, Divider, Typography } from 'antd';

const { Text } = Typography;


function ImageCarousel(props) {

  const { options, imgWidth } = props;

  return (
    <Carousel autoplay dots={false}>
      {options.map((entry, idx) => (
        <div key={idx} style={{verticalAlign: 'middle'}}>
          <Image
            width={imgWidth}
            preview={true}
            src={entry["img"]}
            fallback={DefaultImg}
          />
          <br/>
          <Text>{entry["caption"]}</Text>
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

    let windowWidth = 0.8 * width;
    windowWidth = (width < 800) ? 0.95 * width : 0.8 * width;

    let imgWidth = 0.5 * windowWidth;
    imgWidth = (imgWidth > 500) ? 500 : imgWidth

    const renderers = {
      link: (props) => (<a href={props.href} target="_blank" rel="noopener noreferrer">{props.children}</a>)
    }

    return (
      <Modal
        title={`${digest.title}`}
        centered
        visible={visible}
        width={windowWidth}
        onOk={closeCallback}
        onCancel={closeCallback}
        footer={null}
      >
        <div style={{textAlign: 'center'}}>
          <ImageCarousel imgWidth={imgWidth} options={ProjectImageCarousel[project]}/>
        </div>
        <Divider />
        <ReactMarkdown source={markdown} renderers={renderers}/>
      </Modal>
    );
  }
}

export default ProjectModal;
