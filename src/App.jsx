import React from 'react';

import 'antd/dist/antd.css';
import './App.css';

import NavHeader from './components/NavHeader';
import SectionHome from './components/SectionHome';
import SectionExperience from './components/SectionExperience';
import SectionProjects from './components/SectionProjects';
import SectionContact from './components/SectionContact';


import { Typography , Layout, Divider } from 'antd';

const { Text, Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth };
  }

  handleResize = (e) => {
    this.setState({width: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }


  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
  }

  render() {

    const { width } = this.state;

    let headerStyle = {
      width: '100%',
      position: 'fixed',
      zIndex: 1
    };

    return (
      <React.Fragment>
        <Layout className="layout">

          <Header style={headerStyle} >
            <NavHeader width={width} />
          </Header>

          <Content style={{ padding: '20px 0 0 0', marginTop: 64 }}>

            <section id="sect-home" className="sect type-a">
              <div className="sect-inner">
                <SectionHome width={width} />
              </div>
            </section>

            <section id="sect-experience" className="sect type-b">
              <div className="sect-inner">
                <SectionExperience/>
              </div>
            </section>

            <section id="sect-skills" style={{ textAlign: 'center'}} className="sect type-a">
              <div className="sect-inner">
                <Title level={3}>Skills</Title>
              </div>
            </section>

            <section id="sect-projects" className="sect type-b">
              <div className="sect-inner">
                <SectionProjects/>
              </div>
            </section>

            <section id="sect-contact" className="sect type-a">
              <div className="sect-inner">
                <SectionContact/>
              </div>
            </section>

          </Content>

          <Footer style={{ textAlign: 'center'}}>
            <Divider type="horizontal" />
            <Text strong>Curt Henrichs ©2021</Text>
            <br/>
            <Text>Created with Reactjs and Ant Design</Text>
            <br/>
            <Text>Fonts from Ant Design</Text>
          </Footer>

        </Layout>
      </React.Fragment>
    );
  }

}


export default App;
