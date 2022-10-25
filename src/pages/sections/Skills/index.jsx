import React, { useState, useContext } from 'react';

import InfoButton from '../../../components/InfoButton';

import data from '../../../content/skills';
import { WidthContext } from '../../../contexts';

import './index.css';

import { IconLookupFromName } from '../../../content/customIcons';
import { DownCircleOutlined, UpCircleOutlined } from '@ant-design/icons';
import { Row, Col, Typography, Progress, Button, Tooltip } from 'antd';
const { Text, Title } = Typography;


const SkillTile = (props) => {

  const { skill } = props;

  return (
    <Tooltip title={skill.hover}>
      <div style={{ width: 150, margin: 'auto' }}>
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
    </Tooltip>
  )
};


const ExpandButton = (props) => {

  const { type, callback, visible } = props;

  const shouldExpand = type == 'expand'
  const icon = (shouldExpand) ? <DownCircleOutlined /> : <UpCircleOutlined />;
  const text = (shouldExpand) ? "Expand" : "Collapse";

  let content = null;
  if (visible) {
    content = (
      <Tooltip title={text}>
        <Button type="primary" shape="round" icon={icon} size="large" onClick={() => callback(shouldExpand)}/>
      </Tooltip>
    );
  }

  return content;
};


const SectionSkills = (props) => {

  const [expand, setExpand] = useState(false);
  const width = useContext(WidthContext);

  const skillsCopy = data.skills.slice();

  const tileSize = 240;
  const totalSpace = tileSize * skillsCopy.length;
  const rows = Math.ceil(totalSpace / (width * 0.95 ));
  const items = Math.ceil(Math.floor(totalSpace / rows) / tileSize);
  const span = Math.floor(24 / items);

  let expandButton = null;
  let newData = new Array(rows).fill().map(_ => skillsCopy.splice(0,items));

  const shouldCollapse = newData.length > 2;
  if (shouldCollapse && !expand) {
    newData = newData.splice(0,2);
  }

  return (
    <React.Fragment>
      <Title level={3}>Skills</Title>

      <br/>

      <div style={{paddingLeft: '12px', paddingRight: '12px'}}>
        {newData.map((row, idx) => (
          <Row gutter={[24,24]} justify="center" key={idx} className={`${ (idx >= 1 && shouldCollapse && !expand) ? 'fade-out' : '' }`}>
            {row.map((entry, idx) => (
              <Col span={span} key={idx}>
                <SkillTile skill={entry}/>
              </Col>
            ))}
          </Row>
        ))}
      </div>

      {shouldCollapse ? <br /> : null}

      <ExpandButton visible={shouldCollapse} type={expand ? 'collapse' : 'expand'} callback={setExpand} />
    </React.Fragment>
  );
};


export default SectionSkills;
