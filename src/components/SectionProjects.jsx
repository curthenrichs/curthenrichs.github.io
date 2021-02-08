import React from 'react';

import DefaultImg from '../content/DefaultImg';
import { ProjectDigests as data } from '../content/projects';

import { ExperimentFilled, ToolFilled, StarFilled } from '@ant-design/icons';

import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Typography, Image } from 'antd';

const { Title, Text } = Typography;


function ProjectCard(props) {

  const { title, brief, img, id, type } = props;

  let icon = null;
  if (type == "Research") {
    icon = (<ExperimentFilled />);
  } else if (type == "Internship") {
    icon = (<ToolFilled />);
  } else if (type == "Personal") {
    icon = (<StarFilled />);
  }

  return (
    <div onClick={() => alert(`Card ${id} clicked.`)}>
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
  );
}

function SectionProjects(props) {

  return (
    <div>
      <Title>Projects</Title>
      <Row gutter={[24, 24]}>
        {data.map((entry, idx) => (
          <Col flex="auto" xs={24} xl={8}>
            <ProjectCard
              title={entry.title}
              brief={entry.brief}
              img={entry.img}
              id={entry.project}
              type={entry.type}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default SectionProjects;
