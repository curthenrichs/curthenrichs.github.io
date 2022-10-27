import React, { Component } from 'react';
import { Element as ScrollElement, scroller} from "react-scroll";

import NavHeader from './NavHeader';
import Copyright from './Copyright';
import InDevelopmentModal from './InDevelopmentModal'

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
      activeNavItem: initNavItem,
      clickedNavItem: initNavItem
    };

    this.handleResize = this.handleResize.bind(this);
    this.trackScrolling = this.trackScrolling.bind(this);
  }

  handleResize(e) {
    this.setState({width: window.innerWidth, height: window.innerHeight });
  };

  trackScrolling(e) {
    const { sections } = this.props;
    const { height, clickedNavItem, activeNavItem } = this.state;
    const intersectPoint = height * 1; //TODO some scalar [0 to 1 depending on where it is in the global screen]

    // Generate area and intersection data
    const data = sections.reduce((acc, entry) => {
        let area, point;

        if (!entry.navItem) {
            area = -1; // No nav item then give it failing score
            point = false;

        } else {
            const { top, bottom } = document.getElementById(entry.name).getBoundingClientRect();

            if (top > height || bottom < 0) {               // section not in viewport
                area = 0; 
            } else if (top < 0 && bottom > height) {        // section within viewport (and larger than viewport)
                area = (bottom - top) / height;
            } else if (top < 0) {                           // section partialy within viewport
                area = (bottom - 0) / height;    
            } else if (bottom > height) {                   // section partialy within viewport
                area = (height - top) / height;
            } else {                                        // section fully within viewport
                area = 1;
            }

            // section contains interestion point - used for tie break
            point = intersectPoint > top && intersectPoint < bottom; 
        }

        return {...acc, [entry.navItem]: {area, point}};
    }, {});
    console.log(data);

    // Find best area match
    let nextChoice = [activeNavItem];
    let nextArea = data[activeNavItem].area;
    for (let key of Object.keys(data)) {
        if (data[key].area > nextArea) {
            nextChoice = [key];
            nextArea = data[key].area;
        } else if (data[key].area == nextArea && !nextChoice.includes(key)) {
            nextChoice.push(key);
        }
    }

    // Select nav item
    let newNavItem;
    if (nextChoice.length > 1) {
        if (clickedNavItem != null && nextChoice.includes(clickedNavItem)) {
            newNavItem = clickedNavItem;
        } else {
            //iterate through data for point intersect
            const intersect = Object.keys(data).map((key) => ({key, point: data[key].point})).filter(({point}) => (point));
            if (intersect.length < 1) {         // Failed - select current nav itme
                newNavItem = activeNavItem;
            } else {
                newNavItem = intersect[0].key;
            }
        }
    } else {
        newNavItem = nextChoice[0];
    }

    this.setState({activeNavItem: newNavItem});
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
                      this.setState({clickedNavItem: entry.navItem});
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
