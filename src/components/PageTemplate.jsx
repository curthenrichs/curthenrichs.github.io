import React, { Component } from "react";
import { Layout } from "antd";
import { NavHeader, NavDrawer, NavFooter } from "./Navigation";
import { WidthContext, HeightContext } from "../contexts";
import { Element as ScrollElement, scroller } from "react-scroll";
import useScrollbarSize from "react-scrollbar-size";
import { dismissPrerenderVeil } from "../utils/prerenderVeil";
import { chooseActiveNavItem } from "./activeNavSelection";

const { Header, Footer, Content } = Layout;

class _PageTemplate extends Component {
  constructor(props) {
    super(props);

    this.handleResize = this.handleResize.bind(this);
    this.trackScrolling = this.trackScrolling.bind(this);

    const { sections } = this.props;
    const initNavItem = sections.length ? sections[0].navItem : "";

    const prerenderWidth =
      typeof window.__PRERENDERED_WIDTH__ === "number" ? window.__PRERENDERED_WIDTH__ : null;
    const prerenderHeight =
      typeof window.__PRERENDERED_HEIGHT__ === "number" ? window.__PRERENDERED_HEIGHT__ : null;

    this.state = {
      width: prerenderWidth !== null ? prerenderWidth : window.innerWidth,
      height: prerenderHeight !== null ? prerenderHeight : window.innerHeight,
      activeNavItem: initNavItem,
      clickedNavItem: initNavItem,
      menuOpen: false,
    };
  }

  handleResize() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  trackScrolling() {
    const { sections } = this.props;
    const { height, clickedNavItem, activeNavItem } = this.state;

    const measured = sections.map((entry) => {
      if (!entry.navItem) {
        return { navItem: entry.navItem };
      }
      const { top, bottom } = document.getElementById(entry.name).getBoundingClientRect();
      return { navItem: entry.navItem, top, bottom };
    });

    this.setState({
      activeNavItem: chooseActiveNavItem({
        sections: measured,
        viewportHeight: height,
        activeNavItem,
        clickedNavItem
      })
    });
  }

  componentDidMount() {
    if (window.__PRERENDERED_WIDTH__ !== undefined) {
      delete window.__PRERENDERED_WIDTH__;
      delete window.__PRERENDERED_HEIGHT__;
      this.handleResize();
      dismissPrerenderVeil();
    }

    document.addEventListener("scroll", this.trackScrolling);
    window.addEventListener("resize", this.handleResize);

    const { sections } = this.props;

    if (sections.length) {
      const firstSection = sections[0];

      let scrollProperties = firstSection.scrollProperties;
      if (!scrollProperties) {
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
    document.removeEventListener("scroll", this.trackScrolling);
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    const { header, sections, scrollbar } = this.props;
    const { width, height, activeNavItem, menuOpen } = this.state;

    const sectionNavCallback = (e) => {
      for (let key in sections) {
        const entry = sections[key];

        if (entry.navItem === e.target.id) {
          scroller.scrollTo(entry.name, entry.scrollProperties);
          this.setState({ clickedNavItem: entry.navItem });
        }
      }
    };

    const menuClickedCallback = () => {
      this.setState({ menuOpen: !this.state.menuOpen });
    };

    const menuCloseCallback = () => {
      this.setState({ menuOpen: false });
    };

    return (
      <WidthContext.Provider value={width}>
        <HeightContext.Provider value={height}>
          <Layout className="layout">
            
            <Header className="header-style" style={{width: width - scrollbar.width}}>
              <NavHeader
                {...header}
                optionSelectCallback={sectionNavCallback}
                menuClickedCallback={menuClickedCallback}
                selected={activeNavItem}
              />
            </Header>

            <Content style={{ padding: "20px 0 0 0", marginTop: 64 }}>
              {sections.map((entry) => (
                <ScrollElement
                  key={entry.name}
                  name={entry.name}
                  id={entry.name}
                  style={entry.style}
                  className={`sect ${entry.sectionType}`}>
                  <div
                    className={`${entry.notApplyInnerSection ? "" : "sect-inner"}`}
                    style={{
                      position: "relative",
                      paddingTop: `${entry.paddingTop !== undefined ? entry.paddingTop : 0}px`,
                      paddingBottom: `${
                        entry.paddingBottom !== undefined ? entry.paddingBottom : 0
                      }px`
                    }}>
                    {entry.content}
                  </div>
                </ScrollElement>
              ))}
            </Content>

            <Footer style={{ textAlign: "center" }}>
              <NavFooter />
            </Footer>

          </Layout>

          <NavDrawer 
            {...header}
            optionSelectCallback={sectionNavCallback}
            selected={activeNavItem}
            menuCloseCallback={menuCloseCallback}
            open={menuOpen}
          />

        </HeightContext.Provider>
      </WidthContext.Provider>
    );
  }
}

const PageTemplate = (props) => {
  const scrollbar = useScrollbarSize();
  return (<_PageTemplate {...props} scrollbar={scrollbar}></_PageTemplate>);
};

export default PageTemplate;
