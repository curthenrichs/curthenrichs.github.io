import React from 'react';

import { animateScroll as scroller } from 'react-scroll';

import SimpleHeader from './components/SimpleHeader';
import Copyright from './components/Copyright';

import { Result, Button, Layout } from 'antd';

const { Header, Footer, Content } = Layout;


class IconLicensesPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    scroller.scrollToTop({
      duration: 500,
      smooth: true,
      offset: 0
    });
  }

  render() {
    return (
      <Layout className="layout">

        <Header className="header-style" >
          <SimpleHeader pageName="Icon Licenses" />
        </Header>

        <Content style={{ padding: '20px 0 0 0', marginTop: 64 }}>

          <div className="sect">
            <div className="sect-inner">

              <h2>Icons</h2>
              <h3>Ant Design Icons</h3>
              <a href="https://ant.design/components/icon/">ant.design</a>
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

              <h3>Flaticon Icons</h3>
              <ul>
                <li>
                  <div>Icon (mechanical-arm.svg) made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </li>
                <li>
                  <div>Icons (menu.svg) made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </li>
                <li>
                  <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </li>
              </ul>

              <h3>Font Awesome Icons</h3>
              <ul>
                <li>
                  <div>Icon (graduation-cap-solid.svg) from <a href="https://fontawesome.com/icons/graduation-cap?style=solid">fontawesome.com</a></div>
                </li>
                <li>
                  <div>Icon (microchip-solid.svg) from <a href="https://fontawesome.com/icons/microchip?style=solid">fontawesome.com</a></div>
                </li>
              </ul>

              <h3>Simple-Icons Icons</h3>
              <a href="https://simpleicons.org/">simpleicons.org</a>
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

              <h2>Favicon</h2>
              <p>This favicon was generated using the following:</p>
              <ul>
                <li>Font Title: Iceland</li>
                <li>Font Author: <a href="http://scripts.sil.org/OFL">http://scripts.sil.org/OFL</a></li>
                <li>Font Source: <a href="http://fonts.gstatic.com/s/iceland/v9/rax9HiuFsdMNOnWPWKxGADBbg0s.ttf">http://fonts.gstatic.com/s/iceland/v9/rax9HiuFsdMNOnWPWKxGADBbg0s.ttf</a></li>
                <li>Font License: SIL Open Font License, 1.1 (<a href="http://scripts.sil.org/OFL">http://scripts.sil.org/OFL</a>)</li>
              </ul>

              <br/>
              <br/>
              <br/>

              <div style={{textAlign: 'center'}}>
                <Button type="primary" href="/">Take Me Back to the Main Page</Button>
              </div>

            </div>
          </div>
        </Content>

        <Footer style={{ textAlign: 'center'}}>
          <Copyright />
        </Footer>

      </Layout>
    );
  }
}

export default IconLicensesPage;
