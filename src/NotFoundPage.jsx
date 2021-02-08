import React from 'react';

import SimpleHeader from './components/SimpleHeader';
import Copyright from './components/Copyright';

import { Result, Button, Layout } from 'antd';

const { Header, Footer, Content } = Layout;


function NotFoundPage(props) {

  return (
    <Layout className="layout">

      <Header className="header-style" >
        <SimpleHeader pageName="404 - Page Not Found" />
      </Header>

      <Content style={{ padding: '20px 0 0 0', marginTop: 64 }}>
        <Result
          status="404"
          title="404"
          subTitle="Apologies, but I don't know what you are looking for."
          extra={<Button type="primary" href="/">Take Me Back to the Main Page</Button>}
        />
      </Content>

      <Footer style={{ textAlign: 'center'}}>
        <Copyright />
      </Footer>

    </Layout>
  );
}

export default NotFoundPage;
