import InternshipModal from "./markdown/modal/InternshipCareer.md";
import ResearchModal from "./markdown/modal/ResearchCareer.md";
import IDESModal from "./markdown/modal/IDESCareer.md";
import InternshipBrief from "./markdown/brief/InternshipCareer.md";
import ResearchBrief from "./markdown/brief/ResearchCareer.md";
import IDESBrief from "./markdown/brief/IDESCareer.md";

const data = {
  "career-internship": {
    "_id": "career-internship",
    "modalMarkdownPath": InternshipModal,
    "company": "Dedicated Computing",
    "brief": "A brief discussion of several projects I worked on during my internship",
    "descriptionMarkdownPath": InternshipBrief,
    "skills": [
      "arduino",
      "microchip",
      "linux",
      "c",
      "python",
      "nodejs",
      "git",
      "javascript",
      "atlassian",
      "mongodb"
    ],
    "thumbnail": "/img/dc-logo.png",
    "web": "https://www.dedicatedcomputing.com/",
    "positions": [
      {
        "_id": "career-internship-position-swe",
        "title": "R&D Software Engineering Intern",
        "field": "Storage / Compute",
        "start": "2016",
        "end": "2018",
        "brief": ""
      }
    ],
    "images": [
      {
        "img": "/img/internship-oled-covered.jpg",
        "alt": "",
        "caption": "Custom OLED node ID display that fits within 3.5\" bay."
      },
      {
        "img": "/img/internship-oled.jpg",
        "alt": "",
        "caption": "OLED display has two capacitive touch buttons, USB serial interface, and multi-page screen."
      },
      {
        "img": "/img/internship-fan.jpg",
        "alt": "",
        "caption": "Custom fan controller with a SAMD Atmel microcontroller."
      }
    ],
    "projects": [],
    "publications": []
  },
  "career-research": {
    "_id": "career-research",
    "modalMarkdownPath": ResearchModal,
    "company": "University of Wisconsin - Madison",
    "brief": "Overview of research conducted at the People and Robots Lab",
    "descriptionMarkdownPath": ResearchBrief,
    "skills": [
      "linux",
      "ros",
      "python",
      "git",
      "nodejs",
      "robot",
      "unity",
      "csharp",
      "microsoft",
      "react",
      "angular",
      "javascript",
      "keras",
      "matlab",
      "overleaf"
    ],
    "thumbnail": "/img/uwmadison-crest.png",
    "web": "https://peopleandrobots.wisc.edu/",
    "positions": [
      {
        "_id": "career-research-position-ra",
        "title": "Graduate Research Assistant",
        "field": "Human-Robot Interaction",
        "start": "2019",
        "end": "2021",
        "brief": ""
      }
    ],
    "images": [],
    "projects": [
      "project-authr",
      "project-coframe",
      "project-iter"
    ],
    "publications": [
      "publication-interdependence",
      "publication-authr",
      "publication-rad",
      "publication-onet",
      "publication-coframe"
    ]
  },
  "career-ides": {
    "_id": "career-ides",
    "modalMarkdownPath": IDESModal,
    "company": "Integrated Dynamic Electron Solutions",
    "brief": "High-level overview of my current engineering work at IDES",
    "descriptionMarkdownPath": IDESBrief,
    "skills": [
      "arduino",
      "microchip",
      "linux",
      "c",
      "python",
      "git",
      "atlassian",
      "gear"
    ],
    "thumbnail": "/img/ides-logo.png",
    "web": "https://www.ides-inc.com/",
    "positions": [
      {
        "_id": "career-ides-position-fe",
        "title": "Firmware Engineer",
        "field": "Electron Microscopy",
        "start": "2021",
        "end": "2022",
        "brief": ""
      },
      {
        "_id": "career-ides-position-se",
        "title": "Senior Embedded Systems Engineer",
        "field": "Electron Microscopy",
        "start": "2022",
        "end": null,
        "brief": ""
      }
    ],
    "images": [],
    "projects": [],
    "publications": [
      "publication-syn-tem"
    ]
  }
};


export default data;
  