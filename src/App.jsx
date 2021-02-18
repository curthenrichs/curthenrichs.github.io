import React from 'react';

import InDevelopmentModal from './components/InDevelopmentModal'
import NavHeader from './components/NavHeader';
import SectionHome from './components/SectionHome';
import SectionSkills from './components/SectionSkills';
import SectionProjects from './components/SectionProjects';
import SectionContact from './components/SectionContact';
import Copyright from './components/Copyright';

import { Element as ScrollElement, scroller} from "react-scroll";

import { Typography, Layout } from 'antd';

const { Text, Title } = Typography;
const { Header, Footer, Content } = Layout;


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      navItemSelected: 'home-btn'
    };

    this.handleResize = this.handleResize.bind(this);
    this.trackScrolling = this.trackScrolling.bind(this);
  }

  handleResize(e) {
    this.setState({width: window.innerWidth, height: window.innerHeight });
  };

  trackScrolling(e) {

    const { height } = this.state;

    const contactSection = document.getElementById("sect-contact").getBoundingClientRect();
    if (contactSection.top <= height*0.66) {
      this.setState({navItemSelected: 'contact-btn'});
      return;
    }

    const projectsSection = document.getElementById("sect-projects").getBoundingClientRect();
    if (projectsSection.top <= height*0.66) {
      this.setState({navItemSelected: 'projects-btn'});
      return;
    }

    const homeSection = document.getElementById("sect-home").getBoundingClientRect();
    if (homeSection.top <= height*0.66) {
      this.setState({navItemSelected: 'home-btn'});
      return;
    }
  };

  componentDidMount() {
    document.addEventListener("scroll", this.trackScrolling)
    window.addEventListener("resize", this.handleResize);

    scroller.scrollTo('sect-home', {
      duration: 500,
      smooth: true,
      offset: -100
    });
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.trackScrolling)
    window.addEventListener("resize", this.handleResize);
  }


  handleNavBarCallback = (e) => {

    if (e.target.id != "resume-btn") {
      switch (e.target.id) {
        case "home-btn":
          scroller.scrollTo('sect-home', {
            duration: 500,
            smooth: true,
            offset: -100
          });
          break;
        case "projects-btn":
          scroller.scrollTo('sect-projects', {
            duration: 500,
            smooth: true,
            offset: -65
          });
          break;
        case "contact-btn":
          scroller.scrollTo('sect-contact', {
            duration: 500,
            smooth: true,
            offset: 0
          });
          break;
      }

    } else {
      window.open("/docs/resume.pdf");
    }
  }

  render() {

    const { width, navItemSelected } = this.state;

    return (
      <Layout className="layout">

        <Header className="header-style" >
          <NavHeader width={width} callback={this.handleNavBarCallback} selected={navItemSelected}/>
        </Header>

        <Content style={{ padding: '20px 0 0 0', marginTop: 64 }}>

          <InDevelopmentModal />

          <ScrollElement name="sect-home" id="sect-home" className="sect type-a">
            <div className="sect-inner">
              <SectionHome width={width} />
            </div>
          </ScrollElement>

          <ScrollElement name="sect-skills" id="sect-skills" style={{ textAlign: 'center'}} className="sect type-a">
            <div className="sect-inner">
              <Title level={3}>Skills</Title>
              <br/>
              <SectionSkills width={width} />
            </div>
          </ScrollElement>

          <ScrollElement name="sect-projects" id="sect-projects" className="sect type-b">
            <div className="sect-inner">
              <SectionProjects width={width} />
            </div>
          </ScrollElement>

          <ScrollElement name="sect-contact" id="sect-contact" className="sect type-a">
            <div className="sect-inner">
              <SectionContact width={width} />
            </div>
          </ScrollElement>

        </Content>

        <Footer style={{ textAlign: 'center'}}>
          <Copyright />
        </Footer>

      </Layout>
    );
  }

}


export default App;
