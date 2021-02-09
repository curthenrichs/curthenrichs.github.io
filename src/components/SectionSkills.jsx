import React from 'react';

import data from '../content/skills';
import { IconLookupFromName } from '../content/customIcons';

import { Row, Col } from 'antd';
import { Typography, Progress } from 'antd';

const { Text } = Typography;


function SkillTile(props) {

  const { skill } = props;

  return (
    <div style={{ width: 150 }}>
      <div style={{fontSize: '50px'}}>
        {IconLookupFromName[skill.icon]}
      </div>
      <div style={{fontSize: '20px'}}>
        <Text type="secondary">
          {skill.name}
        </Text>
      </div>
      <Progress
        type="line"
        percent={skill.progress}
        size="small"
        showInfo={false}
        trailColor="#E8E8E8"
        status="active"
      />
    </div>
  )
}


function SectionSkills(props) {

  const { width } = props;
  const skillsCopy = data.skills.slice();

  const totalSpace = (210) * skillsCopy.length;
  const rows = Math.ceil(totalSpace / width);
  const items = Math.ceil(Math.floor(totalSpace / rows) / (210));
  const span = Math.floor(24 / items);

  const newData = new Array(rows).fill().map(_ => skillsCopy.splice(0,items));

  return (
    <React.Fragment>
      {newData.map((row, idx) => (
        <Row gutter={[24,24]} justify="center" key={idx}>
          {row.map((entry, idx) => (
            <Col span={span} key={idx}>
              <SkillTile skill={entry}/>
            </Col>
          ))}
        </Row>
      ))}
    </React.Fragment>
  );

}

export default SectionSkills;
