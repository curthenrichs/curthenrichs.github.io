
import AuthrProject from './markdown/Authr.md';
import ITERProject from './markdown/ITER.md';
import EvDProject from './markdown/EvD.md';
import InternshipProject from './markdown/Internship.md';
import HobbyProject from './markdown/Hobby.md';
import MiscProject from './markdown/Misc.md'


const GetMarkdownPathFromName = (name) => {
  let retVal = null;

  switch (name) {
    case "authr":
      retVal = AuthrProject;
      break;
    case "iter":
      retVal = ITERProject;
      break;
    case "evd":
      retVal = EvDProject;
      break;
    case "internship":
      retVal = InternshipProject;
      break;
    case "hobby":
      retVal = HobbyProject;
      break;
    case "misc":
      retVal = MiscProject;
      break;
  }

  return retVal;
};

const Projects = [
  "authr",
  "iter",
  "evd",
  "internship",
  "hobby",
  "misc"
];

const ProjectDigests = [
  {
    "title": "Authr",
    "brief": "Human-robot task development tool based on Therbligs.",
    "img": "/img/teaser-authr.png",
    "type": "Research",
    "project": "authr"
  },
  {
    "title": "Expert View Dashboard",
    "brief": "Training and authoring tool for operators to modify their cobot's programs.",
    "img": "/img/teaser-evd.jpg",
    "type": "Research",
    "project": "evd"
  },
  {
    "title": "Task Interdependence and pRAD",
    "brief": "Experiments to better understand how operators interact with cobots.",
    "img": "/img/teaser-iter.png",
    "type": "Research",
    "project": "iter"
  },
  {
    "title": "Dedicated Computing Internship",
    "brief": "A brief discussion of several projects I worked on during my internship.",
    "img": "/img/teaser-internship.jpg",
    "type": "Internship",
    "project": "internship"
  },
  {
    "title": "Hobby Projects",
    "brief": "Personal robot, embedded systems, and home automation projects.",
    "img": "/img/teaser-hobby.jpg",
    "type": "Personal",
    "project": "hobby"
  },
  {
    "title": "Misc. Projects",
    "brief": "Projects that have further shaped my experience.",
    "img": "/img/teaser-misc.png",
    "type": "Personal",
    "project": "misc"
  }
]

const ProjectImageCarousel = {
  "authr": [
    {
      "img": "/img/authr-setup.png",
      "caption": "Authr setup view allows user to define Agents, Things, and Destinations."
    },
    {
      "img": "/img/authr-task.png",
      "caption": "Authr task view allows user to drag-and-drop Therbligs into tasks."
    },
    {
      "img": "/img/authr-sim.png",
      "caption": "Authr simulation view allows user to inspect the program constructed."
    }
  ],
  "evd": [
    {
      "img": "/img/evd-authoring-ui.jpg",
      "caption": "Expert View Dashboard's authoring interface (still in development)."
    }
  ],
  "iter": [
    {
      "img": "/img/iter-seq-task.png",
      "caption": "Participant constructs wooden block structure with the robot."
    },
    {
      "img": "/img/iter-displays.png",
      "caption": "Evaluated two interface widgets for communicating pRAD."
    },
    {
      "img": "/img/iter-workspace.png",
      "caption": "Sketch of participant's workspace for the two experiments."
    }
  ],
  "internship": [
    {
      "img": "/img/internship-oled-covered.jpg",
      "caption": "Custom OLED node ID display that fits within 3.5\" bay."
    },
    {
      "img": "/img/internship-oled.jpg",
      "caption": "OLED display has two capacitive touch buttons, USB serial interface, and multi-page screen."
    },
    {
      "img": "/img/internship-fan.jpg",
      "caption": "Custom fan controller with a SAMD Atmel microcontroller."
    }
  ],
  "hobby": [
    {
      "img": "/img/hobby-taltosoid.jpg",
      "caption": "First version of Taltosoid - A supernumerary robotic finger."
    },
    {
      "img": "/img/hobby-robots.jpg",
      "caption": "Some of my older robots in a group photo."
    },
    {
      "img": "/img/hobby-leds.jpg",
      "caption": "LEDs being controlled by lighting effects interface, back when I was at MSOE."
    }
  ],
  "misc": [
    {
      "img": "/img/misc-comp-vision.png",
      "caption": "ITER computer vision spinoff detects magnetic blocks in 3D space using AR markers."
    },
    {
      "img": "/img/misc-gan-learning.gif",
      "caption": "Sprite GAN learning body armor."
    },
    {
      "img": "/img/misc-gan-single.gif",
      "caption": "Sprite GAN learning body armor - single example."
    }
  ]
}

export {
  Projects,
  ProjectDigests,
  ProjectImageCarousel,
  GetMarkdownPathFromName
};
