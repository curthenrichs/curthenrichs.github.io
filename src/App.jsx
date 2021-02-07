import React from 'react';

import './App.css';
import 'antd/dist/antd.css';

import NavHeader from './components/NavHeader';
import SectionHome from './components/SectionHome';
import SectionExperience from './components/SectionExperience';
import SectionProjects from './components/SectionProjects';
import SectionContact from './components/SectionContact';


import { Typography , Layout, Divider } from 'antd';

const { Text } = Typography;
const { Header, Footer, Sider, Content } = Layout;


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth };

    this.NARROW_WIDTH = 800;
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
      width: '100%'
    };

    if (width >= this.NARROW_WIDTH) {
      headerStyle = {
        ...headerStyle,
        position: 'fixed',
        zIndex: 1
      };
    }

    return (
      <React.Fragment>
        <Layout className="layout">

          <Header style={headerStyle} >
            <NavHeader width={width} narrowWidth={this.NARROW_WIDTH} />
          </Header>

          <Content style={{ padding: '20px 50px', marginTop: 64 }}>

            <section id="sect-home">
              <SectionHome/>
            </section>

            <section id="sect-experience">
              <SectionExperience/>
            </section>

            <section id="sect-projects">
              <SectionProjects/>
            </section>

            <section id="sect-contact">
              <SectionContact/>
            </section>

          </Content>

          <Footer style={{ textAlign: 'center'}}>
            <Divider type="horizontal" />
            <Text strong>Curt Henrichs ©2021</Text>
            <br/>
            <Text>Created with Reactjs and Ant Design</Text>
          </Footer>

        </Layout>
      </React.Fragment>
    );
  }

}


export default App;
