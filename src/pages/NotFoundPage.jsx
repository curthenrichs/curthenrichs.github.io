import React from 'react';

import SimpleHeader from '../components/SimpleHeader';
import Copyright from '../components/Copyright';

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
          subTitle="I am afraid I did not create such a page."
          extra={<Button type="primary" href="/">Go Back to Home</Button>}
        />
      </Content>

      <Footer style={{ textAlign: 'center'}}>
        <Copyright />
      </Footer>

    </Layout>
  );
}

export default NotFoundPage;
