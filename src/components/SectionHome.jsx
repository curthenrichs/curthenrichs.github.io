import React from 'react';

import DefaultImg from './DefaultImg';
import SocialTray from './SocialTray';

import { GraduateCap } from '../content/customIcons';
import { CaretRightOutlined, GlobalOutlined, EnvironmentOutlined } from '@ant-design/icons';

import { Row, Col } from 'antd';
import { Typography, Image } from 'antd';

import data from '../content/biography';

const { Title, Text, Link } = Typography;


function BioDigest(props) {
  return (
    <div style={{textAlign: 'center'}}>
      <Image
      style={{borderRadius: '35%'}}
        width={250}
        preview={false}
        src={data["img"]}
        fallback={DefaultImg}
      />
      <div style={{fontSize: '18px'}}>
        <Text style={{fontSize: '20px'}} strong>{data["name"]}</Text>
        <br/>
        <Text type="secondary">{data["employment"]["position"]} <br/> {data["employment"]["field"]}</Text>
        <br/>
        <Link href={data["employment"]["link"]} target="_blank" rel="noopener noreferrer">{data["employment"]["place"]}</Link>
      </div>
      <SocialTray />
    </div>
  );
}

function Interests(props) {
  return (
    <React.Fragment>
      <Title level={4}>Interest</Title>
      <div style={{padding: '0 20px', fontSize: '16px'}}>
        {data.interests.map((interest, idx) => (
          <div key={idx}>
            <CaretRightOutlined /> <Text>{interest}</Text>
            <br/>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

function Education(props) {
  return (
    <React.Fragment>
      <Title level={4}>Education</Title>
      <div style={{padding: '0 20px', fontSize: '16px'}}>
        {data.education.map((education, idx) => (
          <div key={idx}>
            <GraduateCap />
            &nbsp;
            <Text>{education.title}, {education.year}</Text>
            <br/>
            <Text type="secondary" style={{padding: '0 30px'}}>{education.school}</Text>
            <Link href={education.link} target="_blank" rel="noopener noreferrer"><GlobalOutlined /></Link>
            &nbsp;
            <Link href={`https://www.google.com/maps/search/?api=1&query=${education.address.replace(" ","+").replace(",","%2C").replace("|","%7C")}`} target="_blank" rel="noopener noreferrer"><EnvironmentOutlined /></Link>
            <br/>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

function BioDetail(props) {

  const { width } = props;

  let innerLayout = null;
  if (width >= 950) {
    innerLayout = (
      <Row>
        <Col flex="auto">
          <Interests />
        </Col>
        <Col flex="auto">
          <Education />
        </Col>
      </Row>
    );
  } else {
    innerLayout = (
      <div>
        <Interests />
        <br/>
        <Education />
      </div>
    );
  }

    return (
    <React.Fragment>
      <Title level={3}>Biography</Title>
      <Text style={{fontSize: '16px'}}>{data.biography}</Text>
      <br/>
      <br/>
      {innerLayout}
    </React.Fragment>
  );
}

function SectionHome(props) {

  const { width } = props;

  let layout = null;
  if (width >= 1500) {
    layout = (
      <Row align="center">
        <Col span={4}>
          <BioDigest />
        </Col>
        <Col span={2}></Col>
        <Col span={18}>
          <BioDetail width={width} />
        </Col>
      </Row>
    );
  } else {
    layout = (
      <div>
        <BioDigest />
        <br/>
        <BioDetail width={width} />
      </div>
    );
  }

  return layout;
}

export default SectionHome;
