
import AuthrProject from './projects/Authr.md';
import ITERProject from './projects/ITER.md';
import EvDProject from './projects/EvD.md';
import InternshipProject from './projects/Internship.md';
import HobbyProject from './projects/Hobby.md';
import MiscProject from './projects/Misc.md'


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
    "brief": "Training tool for cobot operators.",
    "img": "/img/teaser-evd.png",
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
    "brief": "Personal robot and home automation projects.",
    "img": "/img/teaser-hobby.png",
    "type": "Personal",
    "project": "hobby"
  },
  {
    "title": "Misc.",
    "brief": "Miscellaneous projects that do not fit into other topics.",
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
      "caption": "Authr task view allows user to drag-and-drop therbligs into tasks."
    },
    {
      "img": "/img/authr-sim.png",
      "caption": "Authr simulation view allows user to inspect the program constructed."
    }
  ],
  "evd": [

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

  ],
  "misc": [

  ]
}

export {
  Projects,
  ProjectDigests,
  ProjectImageCarousel,
  GetMarkdownPathFromName
};
