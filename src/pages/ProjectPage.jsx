import React from 'react';

import SimpleHeader from '../components/SimpleHeader';
import Copyright from '../components/Copyright';
import NotFoundPage from './NotFoundPage';

import { Layout, Button } from 'antd';

const { Header, Footer, Content } = Layout;
const projects = ['test'];


function ProjectPage(props) {

  const { name } = props.match.params;

  let page = null;
  if ( projects.indexOf(name) < 0) {
    page = (<NotFoundPage />);

  } else {
    page = (
      <Layout className="layout">

        <Header className="header-style" >
          <SimpleHeader pageName={name} />
        </Header>

        <Content style={{ padding: '20px 0 0 0', marginTop: 64 }}>
          TODO content goes here

          <Button type="primary" href="/">Go Back to Home</Button>
        </Content>

        <Footer style={{ textAlign: 'center'}}>
          <Copyright />
        </Footer>

      </Layout>
    );
  }

  return page;
}

export default ProjectPage;
