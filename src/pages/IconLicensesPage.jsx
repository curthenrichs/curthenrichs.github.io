import React, { Fragment } from 'react';

import PageTemplate from './PageTemplate';

import { Result, Button } from 'antd';


const IconLicensesPage = (props) => {
  return (
    <PageTemplate
      header={{
        simple: true,
        pageName: "Icon Licenses"
      }}
      sections={[
        {
          name: 'sect-icons',
          sectionType: 'type-a',
          content: (
            <Fragment>

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

            </Fragment>
          )
        },
        {
          name: 'sect-favicon',
          sectionType: 'type-a',
          content: (
            <Fragment>
              <h2>Favicon</h2>
              <p>This favicon was generated using the following:</p>
              <ul>
                <li>Font Title: Iceland</li>
                <li>Font Author: <a href="http://scripts.sil.org/OFL">http://scripts.sil.org/OFL</a></li>
                <li>Font Source: <a href="http://fonts.gstatic.com/s/iceland/v9/rax9HiuFsdMNOnWPWKxGADBbg0s.ttf">http://fonts.gstatic.com/s/iceland/v9/rax9HiuFsdMNOnWPWKxGADBbg0s.ttf</a></li>
                <li>Font License: SIL Open Font License, 1.1 (<a href="http://scripts.sil.org/OFL">http://scripts.sil.org/OFL</a>)</li>
              </ul>

            </Fragment>
          )
        },
        {
          name: 'sect-return',
          sectionType: 'type-a',
          style: { paddingTop: '3em' },
          content: (
            <Fragment>
              <div style={{textAlign: 'center'}}>
                <Button type="primary" href="/">Take Me Back to the Main Page</Button>
              </div>
            </Fragment>
          )
        }
      ]}
    />
  );
};


export default IconLicensesPage;
