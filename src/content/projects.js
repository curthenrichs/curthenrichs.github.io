import AuthrModal from "./markdown/modal/AuthrProject.md";
import ITERModal from "./markdown/modal/ITERProject.md";
import CoFrameModal from "./markdown/modal/EVDProject.md";
import HobbyModal from "./markdown/modal/HobbyProject.md";
import WebsiteModal from "./markdown/modal/WebsiteProject.md";
import OkosModal from "./markdown/modal/OkosProject.md";

import AuthrBrief from "./markdown/brief/AuthrProject.md";
import ITERBrief from "./markdown/brief/ITERProject.md";
import CoFrameBrief from "./markdown/brief/EVDProject.md";
import HobbyBrief from "./markdown/brief/HobbyProject.md";
import WebsiteBrief from "./markdown/brief/WebsiteProject.md";
import OkosBrief from "./markdown/brief/OkosProject.md";

const data = {
  "project-okos": {
    title: "Okos Polip",
    brief: "Home automation device state ingest platform as a service",
    descriptionMarkdownPath: OkosBrief,
    thumbnail: "/static/img/thumbnail/project-okos.jpg",
    type: "Personal",
    id: "project-okos",
    modalMarkdownPath: OkosModal,
    notable: true,
    skills: [
      "arduino",
      "linux",
      "ros",
      "c",
      "python",
      "nodejs",
      "react",
      "javascript",
      "mongodb"
    ],
    images: [],
    publications: [],
    primaryLink: {
      link: "https://www.okospolip.com/",
      description: "Check out Okos Polip PaaS",
      text: "Click Here"
    }
  },
  "project-coframe": {
    title: "CoFrame",
    brief: "Cobot operator training environment",
    descriptionMarkdownPath: CoFrameBrief,
    thumbnail: "/static/img/thumbnail/project-coframe.jpg",
    type: "Research",
    id: "project-coframe",
    modalMarkdownPath: CoFrameModal,
    notable: true,
    skills: [
      "robot",
      "ros",
      "overleaf",
      "python",
      "linux",
      "javascript",
      "react"
    ],
    images: [
      {
        id: "img-coframe-current",
        img: "/static/img/projects/coframe/coframe-current.jpg",
        alt: "CoFrame interface (current demo application) with machine tending task.",
        caption: "CoFrame interface (current demo application) with machine tending task.",
        carousel: true
      },
      {
        id: "img-coframe-prototype",
        img: "/static/img/projects/coframe/evd-authoring-ui.jpg",
        alt: "CoFrame's authoring interface (early development).",
        caption: "CoFrame's authoring interface (early development).",
        carousel: true
      },
      {
        id: "img-coframe-frames",
        img: "/static/img/projects/coframe/coframe-mapping.jpg",
        alt: "Visual mapping the CoFrame frames compared to the themes identified via ENA on ethnography.",
        caption: "Visual mapping the CoFrame frames compared to the themes identified via ENA on ethnography.",
        carousel: false
      },
      {
        id: "img-coframe-skills",
        img: "/static/img/projects/coframe/coframe-frames.png",
        alt: "\"Skill Tree\" that users work through when defining their cobot applications.",
        caption: "\"Skill Tree\" that users work through when defining their cobot applications.",
        carousel: false
      },
      {
        id: "img-coframe-structure",
        img: "/static/img/projects/coframe/coframe-structure.jpg",
        alt: "Structure of CoFrame application at time of paper submission.",
        caption: "Structure of CoFrame application at time of paper submission.",
        carousel: false
      }
    ],
    publications: [
      "publication-coframe"
    ],
    primaryLink: {
      link: "https://wisc-hci.github.io/CoFrame/",
      description: null,
      text: "Launch CoFrame"
    }
  },
  "project-authr": {
    title: "Authr",
    brief: "Human-robot task development tool based on Therbligs",
    descriptionMarkdownPath: AuthrBrief,
    thumbnail: "/static/img/thumbnail/project-authr.jpg",
    type: "Research",
    id: "project-authr",
    modalMarkdownPath: AuthrModal,
    notable: true,
    skills: [
      "robot",
      "ros",
      "overleaf",
      "python",
      "linux",
      "javascript",
      "angular"
    ],
    images: [
      {
        id: "img-authr-setup",
        img: "/static/img/projects/authr/authr-setup.jpg",
        alt: "Authr setup view allows user to define Agents, Things, and Destinations.",
        caption: "Authr setup view allows user to define Agents, Things, and Destinations.",
        carousel: true
      },
      {
        id: "img-authr-task",
        img: "/static/img/projects/authr/authr-task.jpg",
        alt: "Authr task view allows user to drag-and-drop Therbligs into tasks.",
        caption: "Authr task view allows user to drag-and-drop Therbligs into tasks.",
        carousel: true
      },
      {
        id: "img-authr-sim",
        img: "/static/img/projects/authr/authr-sim.jpg",
        alt: "Authr simulation view allows user to inspect the program constructed.",
        caption: "Authr simulation view allows user to inspect the program constructed.",
        carousel: true
      }
    ],
    publications: [
      "publication-authr"
    ],
    primaryLink: null
  },
  "project-iter": {
    title: "Task Interdependence and pRAD",
    brief: "Experiments to better understand how operators interact with cobots",
    descriptionMarkdownPath: ITERBrief,
    thumbnail: "/static/img/thumbnail/project-iter.jpg",
    type: "Research",
    id: "project-iter",
    modalMarkdownPath: ITERModal,
    notable: true,
    skills: [
      "robot",
      "ros",
      "overleaf",
      "python",
      "linux"
    ],
    images: [
      {
        id: "img-iter-task",
        img: "/static/img/projects/iter/iter-seq-task.jpg",
        alt: "Participant constructs wooden block structure with the robot.",
        caption: "Participant constructs wooden block structure with the robot.",
        carousel: true
      },
      {
        id: "img-iter-display",
        img: "/static/img/projects/iter/iter-displays.png",
        alt: "Evaluated two interface widgets for communicating pRAD.",
        caption: "Evaluated two interface widgets for communicating pRAD.",
        carousel: true
      },
      {
        id: "img-iter-workspace",
        img: "/static/img/projects/iter/iter-workspace.png",
        alt: "Sketch of participant's workspace for the two experiments.",
        caption: "Sketch of participant's workspace for the two experiments.",
        carousel: true
      },
      {
        id: "img-iter-vision",
        img: "/static/img/projects/iter/iter-computer-vision.jpg",
        alt: "Demonstration of computer vision system capability in ITER system.",
        caption: "Demonstration of computer vision system capability in ITER system.",
        carousel: true
      }
    ],
    publications: [
      "publication-interdependence", 
      "publication-rad"
    ],
    primaryLink: null
  },
  "project-hobby": {
    title: "Hobby Projects & Blog",
    brief: "Hobby robotics and home automation projects",
    descriptionMarkdownPath: HobbyBrief,
    thumbnail: "/static/img/thumbnail/project-hobby.jpg",
    type: "Personal",
    id: "project-hobby",
    modalMarkdownPath: HobbyModal,
    notable: true,
    skills: [
      "arduino",
      "ros",
      "c",
      "python",
      "robot",
    ],
    images: [
      {
        id: "img-hobby-taltosoid",
        img: "/static/img/projects/hobby/hobby-taltosoid.jpg",
        alt: "First version of my sumpernumerary robotic finger named Taltosioid shown worn on my hand with capatitive flex detection glove.",
        caption: "First version of Taltosoid - A supernumerary robotic finger.",
        carousel: false
      },
      {
        id: "img-hobby-small-robots",
        img: "/static/img/projects/hobby/hobby-robots.jpg",
        alt: "Small hobby robots shown in a group photo (left to right): YAM, Beta-Rex, Roverbot, BOE-Bot, Hexbug Larva, Solar Roller, Symet, NBB, Spinbot, Photoflower, Herbie, Beetle (large), Beetle (small), and Bubbles.",
        caption: "Some of my older robots in a group photo.",
        carousel: false
      },
      {
        id: "img-hobby-leds",
        img: "/static/img/projects/hobby/hobby-leds.jpg",
        alt: "LED strips on ceiling of apartment with lighting effect control.",
        caption: "LEDs being controlled by lighting effects interface, back when I was at MSOE.",
        carousel: false
      }
    ],
    publications: [],
    primaryLink: {
      link: "https://homebuiltrobotics.blogspot.com/",
      description: "Checkout my blog \"Home-Built-Robotics\"",
      text: "Go To Blog"
    }
  },
  "project-website": {
    title: "Portfolio Website",
    brief: "Background on the development of this website",
    descriptionMarkdownPath: WebsiteBrief,
    thumbnail: "/static/img/thumbnail/project-website.jpg",
    type: "Personal",
    id: "project-website",
    modalMarkdownPath: WebsiteModal,
    notable: true,
    skills: [
      "react",
      "javascript"
    ],
    images: [
      {
        id: "img-web-large",
        img: "/static/img/projects/website/portfolio-home-desktop.jpg",
        alt: "Desktop view of website portfolio home section and skills section.",
        caption: "Desktop view ~ Home section and skills section",
        carousel: true
      },
      {
        id: "img-web-med",
        img: "/static/img/projects/website/portfolio-home-tablet.png",
        alt: "Tablet view of website portfolio home section.",
        caption: "Tablet view ~ Home section",
        carousel: true
      },
      {
        id: "img-web-small",
        img: "/static/img/projects/website/portfolio-home-mobile.png",
        alt: "Mobile view of website portfolio home section.",
        caption: "Mobile view ~ Home section",
        carousel: true
      },
    ],
    publications: [],
    primaryLink: null
  }
};

export default data;
