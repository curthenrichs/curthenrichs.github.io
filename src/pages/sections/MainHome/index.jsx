import React, { useContext, Fragment } from 'react';

import './index.css';

import DefaultImg from '../../../components/DefaultImg';
import SocialTray from '../../../components/SocialTray';
import MarkdownContent from '../../../components/MarkdownContent';

import data from '../../../content/biography';
import { WidthContext } from '../../../contexts';
import { CaretRightOutlined } from '@ant-design/icons';
import { Row, Col, Typography, Image } from 'antd';

const { Title, Text, Link } = Typography;
const LAYOUT_WIDTH_DIGEST_INLINE = 1500;
const NUM_ABBREVIATED_INTERESTS = 3;


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
        <Text type="secondary">{data["employment"][data["currentEmploymentIndex"]]["position"]} <br/> {data["employment"][data["currentEmploymentIndex"]]["field"]}</Text>
        <br/>
        <Link href={data["employment"][data["currentEmploymentIndex"]]["link"]} target="_blank" rel="noopener noreferrer">{data["employment"][data["currentEmploymentIndex"]]["place"]}</Link>
      </div>
      <SocialTray />
    </div>
  );
};


const Interests = (props) => {
    const { abbreviate } = props;

    const sliceAmount = (data.interests.length > NUM_ABBREVIATED_INTERESTS) ? NUM_ABBREVIATED_INTERESTS : data.interests.length;
    const list = (abbreviate) ? data.interests.slice(0, sliceAmount) : data.interests;

  return (
    <Fragment>
      <Title level={4}>Interests</Title>
      <div style={{padding: '0 20px', fontSize: '16px'}}>
        {list.map((interest, idx) => (
          <div key={idx} style={{ paddingBottom: '5px'}}>
            <CaretRightOutlined /> <Text>{interest}</Text>
            <br/>
          </div>
        ))}
      </div>
    </Fragment>
  );
};


const Education = (props) => {
  return (
    <Fragment>
      <Title level={4}>Education</Title>
      <div style={{padding: '0 20px', fontSize: '16px'}}>
        {data.education.map((education, idx) => (
          <div key={idx} style={{ paddingBottom: '10px'}}>
            {education.time}&nbsp;-&nbsp;
            <Text>{education.title}</Text>
            <br/>
            <Text style={{padding: '0 30px'}} type="secondary" >{education.school}</Text>
          </div>
        ))}
      </div>
    </Fragment>
  );
};


const Career = (props) => {
    return (
        <Fragment>
            <Title level={4}>Career</Title>
            <div style={{padding: '0 20px', fontSize: '16px'}}>
                {data.employment.map((job, idx) => (
                    <div key={idx} style={{ paddingBottom: '10px'}}>
                        {job.time}&nbsp;-&nbsp;
                        <Text>{job.position}</Text>
                        <br/>
                        <Text style={{padding: '0 30px'}} type="secondary">{job.place}</Text>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};


const BioDetail = (props) => {

  let innerLayout = null;
  const { width,  digestInline } = props;
  
  if (digestInline) {
    if (width >= 1800) {
        innerLayout = (
            <Row>  
                <Col flex="auto">
                    <Career />
                </Col>
                <Col flex="auto">
                    <Education />
                </Col>
                <Col flex="auto">
                    <Interests />
                </Col>
            </Row>
        );
      } else {
        innerLayout = (
            <Row>
                <Col flex="auto">
                    <Career />
                </Col>
                <Col flex="auto">
                    <Education />
                    <Interests abbreviate />
                </Col>
            </Row>
        );
      }
  } else {
    if (width >= 1375) {
        innerLayout = (
            <Row>
                <Col flex="auto">
                    <Career />
                </Col>
                <Col flex="auto">
                    <Education />
                </Col>
                <Col flex="auto">
                    <Interests />
                </Col>
            </Row>
        );
      } else if (width >= 1060) {
        innerLayout = (
            <Row>
                <Col flex="auto">
                    <Career />
                </Col>
                <Col flex="auto">
                    <Education />
                    <Interests abbreviate />
                </Col>
            </Row>
        );
      } else if (width >= 850) {
        innerLayout = (
            <div>
                <Row>
                    <Col flex="auto">
                        <Career />
                        <br/>
                        <Education />
                    </Col>
                    <Col  flex="auto">
                        <Interests />
                    </Col>
                </Row>
              
            </div>
          );
      } else {
        innerLayout = (
          <div>
            <Career />
            <br/>
            <Education />
            <br/>
            <Interests abbreviate />
          </div>
        );
      }
  }

  return (
    <Fragment>
      <Title level={3}>Biography</Title>
      <div style={{fontSize: '16px'}}>
        <MarkdownContent
          markdownPath={data.biographyMarkdownPath}
        />
      </div>
      <br/>
      <br/>
      {innerLayout}
    </Fragment>
  );
};


const SectionHome = (props) => { 

  const width = useContext(WidthContext);

  let layout = null;
  if (width >= LAYOUT_WIDTH_DIGEST_INLINE) {
    layout = (
      <Row align="center">
        <Col span={4}>
          <BioDigest />
        </Col>
        <Col span={2}></Col>
        <Col span={18}>
          <BioDetail width={width} digestInline={true} />
        </Col>
      </Row>
    );
  } else {
    layout = (
      <div>
        <BioDigest />
        <br/>
        <BioDetail width={width} digestInline={false} />
      </div>
    );
  }

  return layout;
};


export default SectionHome;
