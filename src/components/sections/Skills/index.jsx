import React, { useState, useContext } from 'react';

import InfoButton from '../../InfoButton';

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

  const tilePad = 50;
  // @ 500 - 50px
  // @ 600 - 20px
  // @ 700 - 45px
  // @ 1300 - 45px
  // @ 1500 - 65px

  // < 520px


  const shouldCollapse = newData.length > 2;
  if (shouldCollapse && !expand) {
    newData = newData.splice(0,2);
  }

  return (
    <React.Fragment>
      <Title level={3}>Skills</Title>

      <br/>

      <div>
          {newData.map((row, idx) => (
            <Row gutter={[24,24]} justify="center" key={idx} className={`${ (idx >= 1 && shouldCollapse && !expand) ? 'fade-out' : '' }`}>
              {row.map((entry, idx) => (
                <Col span={span} key={idx}>
                  <SkillTile skill={entry}/>
                </Col>
              ))}
            </Row>
          ))}

          {shouldCollapse ? <br /> : null}
      </div>

      <ExpandButton visible={shouldCollapse} type={expand ? 'collapse' : 'expand'} callback={setExpand} />


      <InfoButton
        style={{position: 'absolute', top: '-2px', right: '30px'}}
        tooltipProps={{placement:"left", title:"Curious about these skills?"}}
      >
        <p>
          I selected these specific technical skills to be representative of my
          development experiences and to highlight areas I am interested in
          continuing into the future. Obviously, I had to be selective lest the
          list be so long and boring that any reader would just navigate away.
        </p>

        <p>
          As for my rating, the scales should be read as percent. Though I am keeping
          this intentionally vague to suggest the subjective nature of these values. It
          is probably better to do comparison across skills rather than trying to
          determine the exact level. If you are interested in proof of proficiency then
          look at my projects section. Hopefully this gives a more complete perspective
          of my skills.
        </p>

        <p>
          Note: It might be interesting to see these skills naturally emerge from
          tagging both my courses and projects. When I find some free time, it
          might be a good weekend project.
        </p>
      </InfoButton>

    </React.Fragment>
  );

  return null;
};


export default SectionSkills;
