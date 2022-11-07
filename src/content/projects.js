import AuthrProject from "./markdown/AuthrProject.md";
import ITERProject from "./markdown/ITERProject.md";
import EvDProject from "./markdown/EvDProject.md";
import HobbyProject from "./markdown/HobbyProject.md";
import ComputerVisionProject from "./markdown/VisionMLProject.md";
import EmbeddedProject from "./markdown/EmbeddedProject.md";
import HCIProject from "./markdown/HCIProject.md";


const data = [
  {
    "title": "Authr",
    "brief": "Human-robot task development tool based on Therbligs.",
    "thumbnail": "/img/teaser-authr.png",
    "type": "Research",
    "_id": "project-authr",
    "markdownPath": AuthrProject,
    "images": [
      {
        "img": "/img/authr-setup.png",
        "alt": "",
        "caption": "Authr setup view allows user to define Agents, Things, and Destinations."
      },
      {
        "img": "/img/authr-task.png",
        "alt": "",
        "caption": "Authr task view allows user to drag-and-drop Therbligs into tasks."
      },
      {
        "img": "/img/authr-sim.png",
        "alt": "",
        "caption": "Authr simulation view allows user to inspect the program constructed."
      }
    ],
    "publications": [
      "publication-authr"
    ]
  },
  {
    "title": "CoFrame",
    "brief": "Training and authoring tool for operators to modify their cobot's programs.",
    "thumbnail": "/img/teaser-evd.jpg",
    "type": "Research",
    "_id": "project-coframe",
    "markdownPath": EvDProject,
    "images": [
      {
        "img": "/img/evd-authoring-ui.jpg",
        "alt": "",
        "caption": "CoFrame's authoring interface (still in development)."
      }
    ],
    "publications": [
      "publication-coframe"
    ]
  },
  {
    "title": "Task Interdependence and pRAD",
    "brief": "Experiments to better understand how operators interact with cobots.",
    "thumbnail": "/img/teaser-iter.png",
    "type": "Research",
    "_id": "project-iter",
    "markdownPath": ITERProject,
    "images": [
      {
        "img": "/img/iter-seq-task.png",
        "alt": "",
        "caption": "Participant constructs wooden block structure with the robot."
      },
      {
        "img": "/img/iter-displays.png",
        "alt": "",
        "caption": "Evaluated two interface widgets for communicating pRAD."
      },
      {
        "img": "/img/iter-workspace.png",
        "alt": "",
        "caption": "Sketch of participant's workspace for the two experiments."
      }
    ],
    "publications": [
      "publication-interdependence",
      "publication-rad"
    ]
  },
  {
    "title": "Hobby Projects",
    "brief": "Personal robot, embedded systems, and home automation projects.",
    "thumbnail": "/img/teaser-hobby.jpg",
    "type": "Personal",
    "_id": "project-hobby",
    "markdownPath": HobbyProject,
    "images": [
      {
        "img": "/img/hobby-taltosoid.jpg",
        "alt": "",
        "caption": "First version of Taltosoid - A supernumerary robotic finger."
      },
      {
        "img": "/img/hobby-robots.jpg",
        "alt": "",
        "caption": "Some of my older robots in a group photo."
      },
      {
        "img": "/img/hobby-leds.jpg",
        "alt": "",
        "caption": "LEDs being controlled by lighting effects interface, back when I was at MSOE."
      }
    ]
  },
  {
    "title": "Computer Vision and ML Projects",
    "brief": "Various computer vision and machine learning projects from coursework.",
    "thumbnail": "/img/teaser-computer-vision.png",
    "type": "Coursework",
    "_id": "project-vision",
    "markdownPath": ComputerVisionProject,
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
    ]
  },
  {
    "title": "Embedded System Projects",
    "brief": "Various embedded systems projects from my undergrad coursework.",
    "thumbnail": "/img/teaser-embedded.jpg",
    "type": "Coursework",
    "_id": "project-embedded",
    "markdownPath": EmbeddedProject,
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
    ]
  },
  {
    "title": "HCI and Data Visualization",
    "brief": "A few HCI and data visualization course projects.",
    "thumbnail": "/img/teaser-hci.jpg",
    "type": "Coursework",
    "_id": "project-hci",
    "markdownPath": HCIProject,
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
    ]
  }
];


export default data;
