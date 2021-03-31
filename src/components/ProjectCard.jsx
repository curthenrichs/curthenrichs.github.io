import React, { useState, Fragment } from 'react';

import DefaultImg from './DefaultImg';
import ProjectModal from './ProjectModal';

import { ExperimentFilled, ToolFilled, StarFilled } from '@ant-design/icons';
import { Card, Typography, Image } from 'antd';
const { Text } = Typography;


const ProjectCard = (props) => {

  const { digest } = props;
  const { title, brief, img, project, type, style } = digest;

  const [visible, setVisible] = useState(false);

  let icon = null;
  if (type == "Research") {
    icon = (<ExperimentFilled />);
  } else if (type == "Internship") {
    icon = (<ToolFilled />);
  } else if (type == "Personal") {
    icon = (<StarFilled />);
  }

  return (
    <Fragment>
      <div onClick={() => { setVisible(true); }} style={{style}}>
        <Card
          title={title}
          bordered={true}
          style={{
            textAlign: 'center'
          }}
          hoverable={true}
          extra={icon}
          className="type-c"
        >
          <Image
            style={{borderRadius: '35%'}}
            height={250}
            width={250}
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
        visible={visible}
        closeCallback={() => { setVisible(false); }}
        className="type-c"
      />
    </Fragment>
  );
};


export default ProjectCard;
