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
        alt: "CoFrame's authoring interface (still in development).",
        caption: "CoFrame's authoring interface (still in development)."
      },
      {
        img: "/static/img/projects/coframe/coframe-banner.jpg",
        alt: "CoFrame paper banner, decent visual summary of each feedback frame.",
        caption: "CoFrame paper banner, decent visual summary of each feedback frame."
      },
      {
        img: "/static/img/projects/coframe/coframe-frames.png",
        alt: "Visuals showing the \"skill tree\" that operators work through while modifying programs broken down by frame.",
        caption: "Visuals showing the \"skill tree\" that operators work through while modifying programs broken down by frame."
      },
      {
        img: "/static/img/projects/coframe/coframe-mapping.jpg",
        alt: "Visual mapping the CoFrame frames compared to the themes identified via ENA on ethnography.",
        caption: "Visual mapping the CoFrame frames compared to the themes identified via ENA on ethnography."
      },
      {
        img: "/static/img/projects/coframe/coframe-structure.jpg",
        alt: "Structure breakdown of CoFrame, showing expert feedback, simulation, and programming sections.",
        caption: "Structure breakdown of CoFrame, showing expert feedback, simulation, and programming sections."
      },
      {
        img: "/static/img/projects/coframe/coframe-current.jpg",
        alt: "CoFrame interface (current demo application) with machine tending task.",
        caption: "CoFrame interface (current demo application) with machine tending task."
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
        alt: "Authr setup view allows user to define Agents, Things, and Destinations.",
        caption: "Authr setup view allows user to define Agents, Things, and Destinations."
      },
      {
        img: "/static/img/projects/authr/authr-task.jpg",
        alt: "Authr task view allows user to drag-and-drop Therbligs into tasks.",
        caption: "Authr task view allows user to drag-and-drop Therbligs into tasks."
      },
      {
        img: "/static/img/projects/authr/authr-sim.jpg",
        alt: "Authr simulation view allows user to inspect the program constructed.",
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
        alt: "Participant constructs wooden block structure with the robot.",
        caption: "Participant constructs wooden block structure with the robot."
      },
      {
        img: "/static/img/projects/iter/iter-displays.png",
        alt: "Evaluated two interface widgets for communicating pRAD.",
        caption: "Evaluated two interface widgets for communicating pRAD."
      },
      {
        img: "/static/img/projects/iter/iter-workspace.png",
        alt: "Sketch of participant's workspace for the two experiments.",
        caption: "Sketch of participant's workspace for the two experiments."
      },
      {
        img: "/static/img/projects/iter/iter-computer-vision.jpg",
        alt: "Demonstration of computer vision system capability in ITER system.",
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
        alt: "First version of my sumpernumerary robotic finger named Taltosioid shown worn on my hand with capatitive flex detection glove.",
        caption: "First version of Taltosoid - A supernumerary robotic finger."
      },
      {
        img: "/static/img/projects/hobby/hobby-robots.jpg",
        alt: "Small hobby robots shown in a group photo (left to right): YAM, Beta-Rex, Roverbot, BOE-Bot, Hexbug Larva, Solar Roller, Symet, NBB, Spinbot, Photoflower, Herbie, Beetle (large), Beetle (small), and Bubbles.",
        caption: "Some of my older robots in a group photo."
      },
      {
        img: "/static/img/projects/hobby/hobby-leds.jpg",
        alt: "LED strips on ceiling of apartment with lighting effect control.",
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
    notable: true,
    skills: [],
    images: [
      {
        img: "/static/img/projects/website/portfolio-home-desktop.jpg",
        alt: "Desktop view of website portfolio home section and skills section.",
        caption: "Desktop view ~ Home section and skills section"
      },
      {
        img: "/static/img/projects/website/portfolio-home-tablet.png",
        alt: "Tablet view of website portfolio home section.",
        caption: "Tablet view ~ Home section"
      },
      {
        img: "/static/img/projects/website/portfolio-home-mobile.png",
        alt: "Mobile view of website portfolio home section.",
        caption: "Mobile view ~ Home section"
      },
    ],
    publications: []
  }
};

export default data;