import React, { Component } from 'react';
import { Element as ScrollElement, scroller} from "react-scroll";

import NavHeader from '../components/NavHeader';
import Copyright from '../components/Copyright';
import InDevelopmentModal from '../components/InDevelopmentModal'

import { WidthContext, HeightContext } from '../contexts';

import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;


class PageTemplate extends Component {

  constructor(props) {
    super(props);

    const { sections } = this.props;
    const initNavItem = sections.length ? sections[0].navItem : '';

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      activeNavItem: initNavItem
    };

    this.handleResize = this.handleResize.bind(this);
    this.trackScrolling = this.trackScrolling.bind(this);
  }

  handleResize(e) {
    this.setState({width: window.innerWidth, height: window.innerHeight });
  };

  trackScrolling(e) {

    const { sections } = this.props;
    const { height, activeNavItem } = this.state;

    let newItem = activeNavItem;

    for (let key in sections.slice().reverse()) {
      const entry = sections[key];

      if (entry.navItem) {
        const sectionComp = document.getElementById(entry.name).getBoundingClientRect();
        if (sectionComp.top <= height * 0.66) {
          newItem = entry.navItem;
        }
      }
    }

    this.setState({activeNavItem: newItem})
  };

  componentDidMount() {
    document.addEventListener("scroll", this.trackScrolling)
    window.addEventListener("resize", this.handleResize);

    const { sections } = this.props;

    if (sections.length) {

      const firstSection = sections[0];

      let scrollProperties = firstSection.scrollProperties;
      if (! scrollProperties) {
        scrollProperties = {
          duration: 500,
          smooth: true,
          offset: -100
        };
      }

      scroller.scrollTo(firstSection.name, scrollProperties);
    }
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.trackScrolling)
    window.removeEventListener("resize", this.handleResize);
  }


  render() {
    const { header, sections, inDevelopment } = this.props;
    const { width, height, activeNavItem } = this.state;

    return (
      <WidthContext.Provider value={width}>
        <HeightContext.Provider value={height}>

          <Layout className="layout">

            <Header className="header-style" >
              <NavHeader
                {...header}
                callback={(e) => {
                  for (let key in sections) {
                    const entry = sections[key];

                    if (entry.navItem === e.target.id) {
                      scroller.scrollTo(entry.name, entry.scrollProperties);
                    }
                  }
                }}
                selected={activeNavItem}
              />
            </Header>

            <Content style={{ padding: '20px 0 0 0', marginTop: 64 }}>

              {sections.map((entry) => (
                <ScrollElement
                  key={entry.name}
                  name={entry.name}
                  id={entry.name}
                  style={entry.style}
                  className={`sect ${entry.sectionType}`}
                >
                  <div className={`${entry.notApplyInnerSection ? '' : "sect-inner"}`} style={{ position: 'relative' }}>
                    {entry.content}
                  </div>
                </ScrollElement>
              ))}

            </Content>

            <Footer style={{ textAlign: 'center'}}>
              <Copyright />
            </Footer>

            {inDevelopment ? <InDevelopmentModal /> : undefined}

          </Layout>

        </HeightContext.Provider>
      </WidthContext.Provider>
    );
  }

}


export default PageTemplate;
