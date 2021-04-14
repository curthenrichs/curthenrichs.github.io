import React from 'react';

import { ProjectDigests as data } from '../../content/projects';
import ProjectCard from '../../components/ProjectCard';

import { Row, Col, Typography } from 'antd';
const { Title } = Typography;


const SectionProjects = (props) => {
  return (
    <div>
      <Title>Projects</Title>
      <br/>
      <br/>
      <Row gutter={[24, 24]} justify="center" align="middle">
        {data.map((entry, idx) => (
          <Col flex="auto" key={idx} style={{height: '100%'}}>
            <ProjectCard
              digest={entry}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};


export default SectionProjects;
