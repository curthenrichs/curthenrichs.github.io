import React, { useContext, useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import DefaultImg from '../DefaultImg';
import SocialTray from '../SocialTray';

import data from '../../content/biography';
import { WidthContext } from '../../contexts';

import { GraduateCap } from '../../content/customIcons';
import { CaretRightOutlined, GlobalOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Row, Col, Typography, Image, Button } from 'antd';
const { Title, Text, Link } = Typography;


const BioDigest = (props) => {
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
};


const Interests = (props) => {
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
};


const Education = (props) => {
  return (
    <React.Fragment>
      <Title level={4}>Education</Title>
      <div style={{padding: '0 20px', fontSize: '16px'}}>
        {data.education.map((education, idx) => (
          <div key={idx} style={{ paddingBottom: '10px'}}>
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
};


const BioDetail = (props) => {

  const [markdown, setMarkdown] = useState('');
  useEffect(() => {
    const path =  data.biographyMarkdownPath;
    const abortController = new AbortController();

    fetch(path, { signal: abortController.signal})
      .then(res => res.text())
      .then(text => setMarkdown(text));

    return () => {
      abortController.abort();
    };
  });

  let innerLayout = null;
  const width = useContext(WidthContext);
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
      <div style={{fontSize: '16px'}}>
        <ReactMarkdown source={markdown}/>
      </div>
      <br/>
      <br/>
      {innerLayout}
    </React.Fragment>
  );
};


const SectionHome = (props) => {

  const width = useContext(WidthContext);

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
};


export default SectionHome;
