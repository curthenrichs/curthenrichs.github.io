import AuthrModal from "./markdown/modal/AuthrProject.md";
import ITERModal from "./markdown/modal/ITERProject.md";
import CoFrameModal from "./markdown/modal/EVDProject.md";
import HobbyModal from "./markdown/modal/HobbyProject.md";

import AuthrBrief from "./markdown/brief/AuthrProject.md";
import ITERBrief from "./markdown/brief/ITERProject.md";
import CoFrameBrief from "./markdown/brief/EVDProject.md";
import HobbyBrief from "./markdown/brief/HobbyProject.md";


const data = {
  "project-authr": {
    "title": "Authr",
    "brief": "Human-robot task development tool based on Therbligs",
    "descriptionMarkdownPath":  AuthrBrief,
    "thumbnail": "/static/img/thumbnail/project-authr.png",
    "type": "Research",
    "_id": "project-authr",
    "modalMarkdownPath": AuthrModal,
    "notable": true,
    "skills": [],
    "images": [
      {
        "img": "/static/img/projects/authr/authr-setup.png",
        "alt": "",
        "caption": "Authr setup view allows user to define Agents, Things, and Destinations."
      },
      {
        "img": "/static/img/projects/authr/authr-task.png",
        "alt": "",
        "caption": "Authr task view allows user to drag-and-drop Therbligs into tasks."
      },
      {
        "img": "/static/img/projects/authr/authr-sim.png",
        "alt": "",
        "caption": "Authr simulation view allows user to inspect the program constructed."
      }
    ],
    "publications": [
      "publication-authr"
    ]
  },
  "project-coframe": {
    "title": "CoFrame",
    "brief": "Cobot operator training environment",
    "descriptionMarkdownPath": CoFrameBrief,
    "thumbnail": "/static/img/thumbnail/project-coframe.png",
    "type": "Research",
    "_id": "project-coframe",
    "modalMarkdownPath": CoFrameModal,
    "notable": true,
    "skills": [],
    "images": [
      {
        "img": "/static/img/projects/coframe/evd-authoring-ui.jpg",
        "alt": "",
        "caption": "CoFrame's authoring interface (still in development)."
      }
    ],
    "publications": [
      "publication-coframe"
    ]
  },
  "project-iter": {
    "title": "Task Interdependence and pRAD",
    "brief": "Experiments to better understand how operators interact with cobots",
    "descriptionMarkdownPath": ITERBrief,
    "thumbnail": "/static/img/thumbnail/project-iter.png",
    "type": "Research",
    "_id": "project-iter",
    "modalMarkdownPath": ITERModal,
    "notable": true,
    "skills": [],
    "images": [
      {
        "img": "/static/img/projects/iter/iter-seq-task.png",
        "alt": "",
        "caption": "Participant constructs wooden block structure with the robot."
      },
      {
        "img": "/static/img/projects/iter/iter-displays.png",
        "alt": "",
        "caption": "Evaluated two interface widgets for communicating pRAD."
      },
      {
        "img": "/static/img/projects/iter/iter-workspace.png",
        "alt": "",
        "caption": "Sketch of participant's workspace for the two experiments."
      },
      {
        "img": "/static/img/projects/iter/iter-computer-vision.png",
        "alt": "",
        "caption": "Demonstration of computer vision system capability in ITER system."
      }
    ],
    "publications": [
      "publication-interdependence",
      "publication-rad"
    ]
  },
  "project-hobby": {
    "title": "Hobby Projects",
    "brief": "Hobby robotics and home automation projects",
    "descriptionMarkdownPath": HobbyBrief,
    "thumbnail": "/static/img/thumbnail/project-hobby.jpg",
    "type": "Personal",
    "_id": "project-hobby",
    "modalMarkdownPath": HobbyModal,
    "notable": true,
    "skills": [],
    "images": [
      {
        "img": "/static/img/projects/hobby/hobby-taltosoid.jpg",
        "alt": "",
        "caption": "First version of Taltosoid - A supernumerary robotic finger."
      },
      {
        "img": "/static/img/projects/hobby/hobby-robots.jpg",
        "alt": "",
        "caption": "Some of my older robots in a group photo."
      },
      {
        "img": "/static/img/projects/hobby/hobby-leds.jpg",
        "alt": "",
        "caption": "LEDs being controlled by lighting effects interface, back when I was at MSOE."
      }
    ],
    "publications": []
  }
};


export default data;


// Old data no longer needed but don't want to throw away just yet


// import ComputerVisionModal from "./markdown/modal/VisionMLProject.md";
// import EmbeddedModal from "./markdown/modal/EmbeddedProject.md";
// import HCIModal from "./markdown/modal/HCIProject.md";

// import ComputerVisionBrief from "./markdown/brief/VisionMLProject.md";
// import EmbeddedBrief from "./markdown/brief/EmbeddedProject.md";
// import HCIBrief from "./markdown/brief/HCIProject.md";

/*
"project-vision": {
    "title": "Computer Vision and ML Projects",
    "brief": "Various computer vision and machine learning projects from coursework.",
    "descriptionMarkdownPath": ComputerVisionBrief,
    "thumbnail": "/img/teaser-computer-vision.png",
    "type": "Coursework",
    "_id": "project-vision",
    "modalMarkdownPath": ComputerVisionModal,
    "notable": false,
    "skills": [],
    "images": [
      {
        "img": "/img/computer-vision-iter.png",
        "alt": "",
        "caption": "ITER computer vision spinoff detects magnetic blocks in 3D space using AR markers."
      },
      {
        "img": "/img/computer-vision-gan-learning.gif",
        "alt": "",
        "caption": "Sprite GAN learning body armor."
      },
      {
        "img": "/img/computer-vision-gan-single.gif",
        "alt": "",
        "caption": "Sprite GAN learning body armor - single example."
      }
    ],
    "publications": []
  },
  "project-embedded": {
    "title": "Embedded System Projects",
    "brief": "Various embedded systems projects from my undergrad coursework.",
    "descriptionMarkdownPath": EmbeddedBrief,
    "thumbnail": "/img/teaser-embedded.jpg",
    "type": "Coursework",
    "_id": "project-embedded",
    "modalMarkdownPath": EmbeddedModal,
    "notable": false,
    "skills": [],
    "images": [
      {
        "img": "/img/embedded-networking.jpg",
        "alt": "",
        "caption": "Networking one project hardware where I am using a Cypress SOC."
      },
      {
        "img": "/img/embedded-treadmill.jpg",
        "alt": "",
        "caption": "Embedded Systems IV course project. Firmware implementation for a treadmill on a Cypress SOC."
      },
      {
        "img": "/img/embedded-tracking.jpg",
        "alt": "",
        "caption": "Embedded Systems III course project. Uses camera to track hand on NIOS soft-core processor."
      },
      {
        "img": "/img/embedded-pcb.jpg",
        "alt": "",
        "caption": "Embedded Systems III homework. I implemented a Atmel microcontroller PCB in Eagle."
      }
    ],
    "publications": []
  },
  "project-hci": {
    "title": "HCI and Data Visualization",
    "brief": "A few HCI and data visualization course projects.",
    "descriptionMarkdownPath": HCIBrief,
    "thumbnail": "/img/teaser-hci.jpg",
    "type": "Coursework",
    "_id": "project-hci",
    "modalMarkdownPath": HCIModal,
    "notable": false,
    "skills": [],
    "images": [
      {
        "img": "/img/hci-hifi-mockup.jpg",
        "alt": "",
        "caption": "High fidelity mockup of my Universal Robots teach pendant redesign in Adobe XD."
      },
      {
        "img": "/img/hci-vis-overview.jpg",
        "alt": "",
        "caption": "Overview interactive visualization of Amazon product categories created by Plotly in Python."
      },
      {
        "img": "/img/hci-vis-detail.jpg",
        "alt": "",
        "caption": "Detail interactive visualization of Amazon product categories created by Plotly in Python."
      }
    ],
    "publications": []
  }
*/