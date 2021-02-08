import React from 'react';

import { ProjectDigests as data } from '../content/projects';
import ProjectCard from './ProjectCard';

import { Typography } from 'antd';
import { Row, Col } from 'antd';

const { Title } = Typography;


function SectionProjects(props) {

  const { width } = props;

  return (
    <div>
      <Title>Projects</Title>
      <Row gutter={[24, 24]}>
        {data.map((entry, idx) => (
          <Col flex="auto" xs={24} xl={8}>
            <ProjectCard
              digest={entry}
              width={width}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default SectionProjects;
