import React from 'react';

import SimpleHeader from './components/SimpleHeader';
import Copyright from './components/Copyright';

import { Result, Button, Layout } from 'antd';

const { Header, Footer, Content } = Layout;


function IconLicensesPage(props) {

  return (
    <Layout className="layout">

      <Header className="header-style" >
        <SimpleHeader pageName="404 - Page Not Found" />
      </Header>

      <Content style={{ padding: '20px 0 0 0', marginTop: 64 }}>

        <div className="sect">
          <div className="sect-inner">

            <h1>Icons</h1>
            <h2>Ant Design Icons</h2>
            <ul>
              <li>CaretRightOutline</li>
              <li>EnvironmentFilled</li>
              <li>EnvironmentOutline</li>
              <li>GithubFilled</li>
              <li>GlobeOutline</li>
              <li>LinkedinFilled</li>
              <li>MailOutlined</li>
              <li>PhoneFilled</li>
            </ul>

            <h2>Flaticon Icons</h2>
            <ul>
              <li>
                <div>Icon (mechanical-arm.svg) made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
              </li>
            </ul>

            <h2>Font Awesome Icons</h2>
            <ul>
              <li>
                <div>Icon (graduation-cap-solid.svg) from <a href="https://fontawesome.com/icons/graduation-cap?style=solid">fontawesome.com</a></div>
              </li>
              <li>
                <div>Icon (microchip-solid.svg) from <a href="https://fontawesome.com/icons/microchip?style=solid">fontawesome.com</a></div>
              </li>
            </ul>

            <h2>Simple-Icons Icons</h2>
            <ul>
              <li>angular.svg</li>
              <li>arduino.svg</li>
              <li>cplusplus</li>
              <li>csharp.svg</li>
              <li>git.svg</li>
              <li>java.svg</li>
              <li>linux.svg</li>
              <li>microsoft.svg</li>
              <li>node-dot-js.svg</li>
              <li>python.svg</li>
              <li>react.svg</li>
              <li>ros.svg</li>
              <li>unity.svg</li>
            </ul>

            <h1>Favicon</h1>
            <p>This favicon was generated using the following font:</p>
            <ul>
              <li>Font Title: Iceland</li>
              <li>Font Author: http://scripts.sil.org/OFL</li>
              <li>Font Source: http://fonts.gstatic.com/s/iceland/v9/rax9HiuFsdMNOnWPWKxGADBbg0s.ttf</li>
              <li>Font License: SIL Open Font License, 1.1 (http://scripts.sil.org/OFL)</li>
            </ul>

            <Button type="primary" href="/">Take Me Back to the Main Page</Button>

          </div>
        </div>
      </Content>

      <Footer style={{ textAlign: 'center'}}>
        <Copyright />
      </Footer>

    </Layout>
  );
}

export default IconLicensesPage;
