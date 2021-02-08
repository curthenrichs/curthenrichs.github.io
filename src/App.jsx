import React from 'react';

import NavHeader from './components/NavHeader';
import SectionHome from './components/SectionHome';
import SectionSkills from './components/SectionSkills';
import SectionProjects from './components/SectionProjects';
import SectionContact from './components/SectionContact';

import { Element as ScrollElement, scroller} from "react-scroll";

import { Typography , Layout, Divider } from 'antd';

const { Text, Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      navItemSelected: '1'
    };
  }

  handleResize = (e) => {
    this.setState({width: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);

    scroller.scrollTo('sect-home', {
      duration: 500,
      smooth: true,
      offset: -100
    });
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
  }

  handleNavBarCallback = (e) => {
    this.setState({navItemSelected: e.key});

    switch (e.key) {
      case "1":
        scroller.scrollTo('sect-home', {
          duration: 500,
          smooth: true,
          offset: -100
        });
        break;
      case "2":
        scroller.scrollTo('sect-projects', {
          duration: 500,
          smooth: true,
          offset: 0
        });
        break;
      case "3":
        scroller.scrollTo('sect-contact', {
          duration: 500,
          smooth: true,
          offset: 0
        });
        break;
    }
  }

  render() {

    const { width, navItemSelected } = this.state;

    let headerStyle = {
      width: '100%',
      position: 'fixed',
      zIndex: 1
    };

    return (
      <React.Fragment>
        <Layout className="layout">

          <Header style={headerStyle} >
            <NavHeader width={width} callback={this.handleNavBarCallback} selected={navItemSelected}/>
          </Header>

          <Content style={{ padding: '20px 0 0 0', marginTop: 64 }}>

            <ScrollElement name="sect-home" id="sect-home" className="sect type-a">
              <div className="sect-inner">
                <SectionHome width={width} />
              </div>
            </ScrollElement>

            <ScrollElement name="sect-skills" id="sect-skills" style={{ textAlign: 'center'}} className="sect type-a">
              <div className="sect-inner">
                <Title level={3}>Skills</Title>
                <SectionSkills />
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
            <Divider type="horizontal" />
            <Text strong>Curt Henrichs ©2021</Text>
            <br/>
            <Text>Created with Reactjs and Ant Design</Text>
            <br/>
            <Text>Icons from Ant Design and Font Awesome</Text>
          </Footer>

        </Layout>
      </React.Fragment>
    );
  }

}


export default App;