import AuthrModal from "./markdown/modal/AuthrProject.md";
import ITERModal from "./markdown/modal/ITERProject.md";
import CoFrameModal from "./markdown/modal/EVDProject.md";
import HobbyModal from "./markdown/modal/HobbyProject.md";
import WebsiteModal from "./markdown/modal/WebsiteProject.md";

import AuthrBrief from "./markdown/brief/AuthrProject.md";
import ITERBrief from "./markdown/brief/ITERProject.md";
import CoFrameBrief from "./markdown/brief/EVDProject.md";
import HobbyBrief from "./markdown/brief/HobbyProject.md";
import WebsiteBrief from "./markdown/brief/WebsiteProject.md";

const data = {
    "project-coframe": {
        title: "CoFrame",
        brief: "Cobot operator training environment",
        descriptionMarkdownPath: CoFrameBrief,
        thumbnail: "/static/img/thumbnail/project-coframe.jpg",
        type: "Research",
        _id: "project-coframe",
        modalMarkdownPath: CoFrameModal,
        notable: true,
        skills: [],
        images: [
          {
            img: "/static/img/projects/coframe/evd-authoring-ui.jpg",
            alt: "",
            caption: "CoFrame's authoring interface (still in development)."
          },
          {
            img: "/static/img/projects/coframe/coframe-banner.jpg",
            alt: "",
            caption: ""
          },
          {
            img: "/static/img/projects/coframe/coframe-frames.png",
            alt: "",
            caption: ""
          },
          {
            img: "/static/img/projects/coframe/coframe-mapping.jpg",
            alt: "",
            caption: ""
          },
          {
            img: "/static/img/projects/coframe/coframe-structure.jpg",
            alt: "",
            caption: ""
          },
          {
            img: "/static/img/projects/coframe/coframe-current.jpg",
            alt: "",
            caption: ""
          }
        ],
        publications: ["publication-coframe"]
      },
  "project-authr": {
    title: "Authr",
    brief: "Human-robot task development tool based on Therbligs",
    descriptionMarkdownPath: AuthrBrief,
    thumbnail: "/static/img/thumbnail/project-authr.jpg",
    type: "Research",
    _id: "project-authr",
    modalMarkdownPath: AuthrModal,
    notable: true,
    skills: [],
    images: [
      {
        img: "/static/img/projects/authr/authr-setup.jpg",
        alt: "",
        caption: "Authr setup view allows user to define Agents, Things, and Destinations."
      },
      {
        img: "/static/img/projects/authr/authr-task.jpg",
        alt: "",
        caption: "Authr task view allows user to drag-and-drop Therbligs into tasks."
      },
      {
        img: "/static/img/projects/authr/authr-sim.jpg",
        alt: "",
        caption: "Authr simulation view allows user to inspect the program constructed."
      }
    ],
    publications: ["publication-authr"]
  },
  "project-iter": {
    title: "Task Interdependence and pRAD",
    brief: "Experiments to better understand how operators interact with cobots",
    descriptionMarkdownPath: ITERBrief,
    thumbnail: "/static/img/thumbnail/project-iter.jpg",
    type: "Research",
    _id: "project-iter",
    modalMarkdownPath: ITERModal,
    notable: true,
    skills: [],
    images: [
      {
        img: "/static/img/projects/iter/iter-seq-task.jpg",
        alt: "",
        caption: "Participant constructs wooden block structure with the robot."
      },
      {
        img: "/static/img/projects/iter/iter-displays.png",
        alt: "",
        caption: "Evaluated two interface widgets for communicating pRAD."
      },
      {
        img: "/static/img/projects/iter/iter-workspace.png",
        alt: "",
        caption: "Sketch of participant's workspace for the two experiments."
      },
      {
        img: "/static/img/projects/iter/iter-computer-vision.jpg",
        alt: "",
        caption: "Demonstration of computer vision system capability in ITER system."
      }
    ],
    publications: ["publication-interdependence", "publication-rad"]
  },
  "project-hobby": {
    title: "Hobby Projects",
    brief: "Hobby robotics and home automation projects",
    descriptionMarkdownPath: HobbyBrief,
    thumbnail: "/static/img/thumbnail/project-hobby.jpg",
    type: "Personal",
    _id: "project-hobby",
    modalMarkdownPath: HobbyModal,
    notable: true,
    skills: [],
    images: [
      {
        img: "/static/img/projects/hobby/hobby-taltosoid.jpg",
        alt: "",
        caption: "First version of Taltosoid - A supernumerary robotic finger."
      },
      {
        img: "/static/img/projects/hobby/hobby-robots.jpg",
        alt: "",
        caption: "Some of my older robots in a group photo."
      },
      {
        img: "/static/img/projects/hobby/hobby-leds.jpg",
        alt: "",
        caption: "LEDs being controlled by lighting effects interface, back when I was at MSOE."
      }
    ],
    publications: []
  },
  "project-website": {
    title: "Portfolio Website",
    brief: "Background on the development for this portfolio webiste",
    descriptionMarkdownPath: WebsiteBrief,
    thumbnail: "/static/img/thumbnail/project-website.jpg",
    type: "Personal",
    _id: "project-website",
    modalMarkdownPath: WebsiteModal,
    notable: false,
    skills: [],
    images: [
        {
            img: "/static/img/projects/portfolio/portfolio-home.jpg",
            alt: "",
            caption: "Desktop view ~ Home section and skills section"
        }
    ],
    publications: []
  }
};

export default data;