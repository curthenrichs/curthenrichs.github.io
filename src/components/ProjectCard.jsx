import React from 'react';

import DefaultImg from './DefaultImg';
import ProjectModal from './ProjectModal';

import { ExperimentFilled, ToolFilled, StarFilled } from '@ant-design/icons';

import { Card } from 'antd';
import { Typography, Image } from 'antd';

const { Text } = Typography;


class ProjectCard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.openModalCallback = this.openModalCallback.bind(this);
    this.closeModalCallback = this.closeModalCallback.bind(this);
  }

  openModalCallback() {
    console.log("Open Modal Callback called");
    this.setState({ visible: true });
  };

  closeModalCallback() {
    console.log("Close Modal Callback called");
    this.setState({ visible: false });
  };

  render () {
    const { width, digest } = this.props;
    const { title, brief, img, project, type } = digest;
    const { visible } = this.state

    let icon = null;
    if (type == "Research") {
      icon = (<ExperimentFilled />);
    } else if (type == "Internship") {
      icon = (<ToolFilled />);
    } else if (type == "Personal") {
      icon = (<StarFilled />);
    }

    return (
      <React.Fragment>
        <div onClick={this.openModalCallback} >
          <Card title={title} bordered={false} style={{textAlign: 'center'}} hoverable={true} extra={icon}>
            <Image
            style={{borderRadius: '35%'}}
              preview={false}
              src={img}
              fallback={DefaultImg}
            />
            <div style={{fontSize: '14px'}}>
              <Text>{brief}</Text>
            </div>
          </Card>
        </div>
        <ProjectModal
          project={project}
          digest={digest}
          width={width}
          visible={visible}
          closeCallback={this.closeModalCallback}
        />
      </React.Fragment>
    );
  }

}


export default ProjectCard;
