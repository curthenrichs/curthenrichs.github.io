import React, { useState, useContext, Fragment } from "react";
import DefaultImg from "../../components/DefaultImg";
import SocialTray from "../../components/SocialTray";
import MarkdownContent from "../../components/MarkdownContent";
import ExpandSection from "../../components/ExpandSection";
import bioData from "../../content/biography";
import contactData from "../../content/contact";
import educationData from "../../content/education";
import careerData from "../../content/career";
import { WidthContext } from "../../contexts";
import { CaretRightOutlined, DownloadOutlined } from "@ant-design/icons";
import { Row, Col, Typography, Image, Button } from "antd";

 
const { Title, Text, Link } = Typography;
const LAYOUT_WIDTH_DIGEST_INLINE = 1500;

const currentCompany = careerData.slice().filter((company) => {
  return company._id == bioData.currentEmploymentId.company;
})[0];

const currentJob = currentCompany.positions.slice().filter((job) => {
  return job._id == bioData.currentEmploymentId.position;
})[0];


const BioDigest = () => {
  const [size, ] = useState("large");

  return (
    <div style={{textAlign: "center"}}>
      <Image
        style={{borderRadius: "35%"}}
        width={250}
        preview={false}
        src={(bioData.img) ? bioData.img : ""}
        fallback={DefaultImg}
      />
      <div style={{fontSize: "18px"}}>
        <Text style={{fontSize: "20px"}} strong>{bioData.name}</Text>
        <br/>
        <Text type="secondary">{currentJob.title} <br/> {currentJob.field}</Text>
        <br/>
        <Link href={currentCompany.web} target="_blank" rel="noopener noreferrer">{currentCompany.company}</Link>
      </div>
      <SocialTray 
        githubLink={contactData.github.link}
        emailLink={contactData.email.link}
        linkedinLink={contactData.linkedin.link}
        twitterLink={contactData.twitter.link}
      />
      <br/>
      <Button type="primary" href={contactData.resume.link} download icon={<DownloadOutlined />} size={size} >
        Download Resume
      </Button>
    </div>
  );
};


const Interests = (props) => {
  const { abbreviate, numAbbrev } = props;

  return (
    <Fragment>
      <Title level={4}>Interests</Title>
      <ExpandSection
        centerButton={true}
        style={{padding: "0 20px", fontSize: "16px"}}
        generator={(expand) => {

          const sliceAmount = (bioData.interests.length > numAbbrev) ? numAbbrev : bioData.interests.length;
          const list = (abbreviate  && !expand) ? bioData.interests.slice(0, sliceAmount) : bioData.interests.slice();

          return {
            shouldCollapse: abbreviate,
            children: list.map((interest, idx) => (
              <div key={idx} style={{ paddingBottom: "5px"}}>
                <CaretRightOutlined /> <Text>{interest}</Text>
                <br/>
              </div>
            ))
          };
        }}
      />
    </Fragment>
  );
};


const Education = (props) => {
  const { abbreviate, numAbbrev } = props;

  return (
    <Fragment>
      <Title level={4}>Education</Title>
      <ExpandSection
        centerButton={true}
        style={{padding: "0 20px", fontSize: "16px"}}
        generator={(expand) => {

          let list = educationData.slice().reverse();
        
          const sliceAmount = (list.length > numAbbrev) ? numAbbrev : list.length;

          list = (abbreviate  && !expand) ? list.slice(0, sliceAmount) : list;

          return {
            shouldCollapse: abbreviate,
            children: list.map((education, idx) => (
              <div key={idx} style={{ paddingBottom: "10px"}}>
                <Text strong={true}>{education.end}</Text>&nbsp;-&nbsp;
                <Text>{education.title}</Text>
                <br/>
                <Text style={{padding: "0 30px"}} type="secondary" >{education.school}</Text>
              </div>
            ))
          };
        }}
      />
    </Fragment>
  );
};


const Career = (props) => {
  const { abbreviate, numAbbrev } = props;

  return (
    <Fragment>
      <Title level={4}>Career</Title>
      <ExpandSection
        centerButton={true}
        style={{padding: "0 20px", fontSize: "16px"}}
        generator={(expand) => {

          let list = careerData.slice().reduce((acc, company) => {
            return acc.concat(company.positions.map((job) => {
              return {
                ...job,
                company: company.company,
                link: company.web
              };
            }));
          }, []);

          list = list.reverse();

          const sliceAmount = (list.length > numAbbrev) ? numAbbrev : list.length;
          list = (abbreviate  && !expand) ? list.slice(0, sliceAmount) : list;

          return {
            shouldCollapse: abbreviate,
            children: list.map((job, idx) => (
              <div key={idx} style={{ paddingBottom: "10px"}}>
                <Text strong={true}>{job.start}</Text>&nbsp;-&nbsp;
                <Text>{job.title}</Text>
                <br/>
                <Text style={{padding: "0 30px"}} type="secondary">{job.company}</Text>
              </div>
            ))
          };
        }}
      />
    </Fragment>
  );
};


const BioDetail = (props) => {

  let innerLayout = null;
  const { width,  digestInline } = props;


  if ((digestInline && width >= 1800) || (!digestInline && width >= 1375)) {
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
  } else if ((digestInline) || (width >= 850)) {
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
        <Career abbreviate numAbbrev={1} />
        <br/>
        <Education abbreviate numAbbrev={1} />
        <br/>
        <Interests abbreviate numAbbrev={2} />
      </div>
    );
  }

  return (
    <Fragment>
      <Title level={3}>Biography</Title>
      <div style={{fontSize: "16px"}}>
        <MarkdownContent
          markdownPath={bioData.markdownPath}
        />
      </div>
      <br/>
      <br/>
      {innerLayout}
    </Fragment>
  );
};


const SectionHome = () => { 

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
