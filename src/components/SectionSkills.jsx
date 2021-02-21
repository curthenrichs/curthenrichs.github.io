import React, { useState } from 'react';

import data from '../content/skills';
import { IconLookupFromName } from '../content/customIcons';
import './SectionSkills.css';

import { DownCircleOutlined, UpCircleOutlined } from '@ant-design/icons';

import { Row, Col } from 'antd';
import { Typography, Progress, Button, Tooltip } from 'antd';

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


function ExpandButton(props) {

  const { type, callback, visible } = props;

  const shouldExpand = type == 'expand'
  const icon = (shouldExpand) ? <DownCircleOutlined /> : <UpCircleOutlined />;
  const text = (shouldExpand) ? "Expand" : "Collapse";

  if (visible) {
    return (
      <Tooltip title={text}>
        <Button type="primary" shape="round" icon={icon} size="large" onClick={() => callback(shouldExpand)}/>
      </Tooltip>
    );
  } else {
    return null;
  }

}


function SectionSkills(props) {

  const [expand, setExpand] = useState(false);

  const { width } = props;
  const skillsCopy = data.skills.slice();


  const tileSize = 240;
  const totalSpace = tileSize * skillsCopy.length;
  const rows = Math.ceil(totalSpace / (width * 0.95 ));
  const items = Math.ceil(Math.floor(totalSpace / rows) / tileSize);
  const span = Math.floor(24 / items);

  let expandButton = null;
  let newData = new Array(rows).fill().map(_ => skillsCopy.splice(0,items));

  const shouldCollapse = newData.length > 3;
  if (shouldCollapse && !expand) {
    newData = newData.splice(0,3);
  }

  return (
    <React.Fragment>
      {newData.map((row, idx) => (
        <Row gutter={[24,24]} justify="center" key={idx} className={`${ (idx >= 2 && shouldCollapse && !expand) ? 'fade-out' : '' }`}>
          {row.map((entry, idx) => (
            <Col span={span} key={idx}>
              <SkillTile skill={entry}/>
            </Col>
          ))}
        </Row>
      ))}

      {shouldCollapse ? <br /> : null}
      <ExpandButton visible={shouldCollapse} type={expand ? 'collapse' : 'expand'} callback={setExpand} />
    </React.Fragment>
  );

}

export default SectionSkills;
