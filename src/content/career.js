import InternshipModal from "./markdown/modal/InternshipCareer.md";
import ResearchModal from "./markdown/modal/ResearchCareer.md";
import IDESModal from "./markdown/modal/IDESCareer.md";
import InternshipBrief from "./markdown/brief/InternshipCareer.md";
import ResearchBrief from "./markdown/brief/ResearchCareer.md";
import IDESBrief from "./markdown/brief/IDESCareer.md";

const data = {
  "career-internship": {
    id: "career-internship",
    modalMarkdownPath: InternshipModal,
    company: "Dedicated Computing",
    brief: "A brief discussion of several projects I worked on during my internship",
    descriptionMarkdownPath: InternshipBrief,
    skills: [
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
    thumbnail: "/static/img/thumbnail/career-dc.jpg",
    web: "https://www.dedicatedcomputing.com/",
    positions: [
      {
        id: "career-internship-position-swe",
        title: "R&D Software Engineering Intern",
        field: "Storage / Compute",
        start: "2016",
        end: "2018",
        brief: "R&D Software Engineering Intern"
      }
    ],
    images: [
      {
        id: "img-dc-oled-cover",
        img: "/static/img/career/dc/dc-oled-covered.jpg",
        alt: "Custom OLED node ID display that fits within 3.5 inch bay. Shown with 3D printed cover. Text on OLED shows alphabet printed on two lines.",
        caption: "Custom OLED node ID display that fits within 3.5\" bay.",
        carousel: true
      },
      {
        id: "img-dc-oled-pcb",
        img: "/static/img/career/dc/dc-oled-pcb.jpg",
        alt: "OLED display has two capacitive touch buttons, USB serial interface, and multi-page OLED screen.",
        caption: "OLED display has two capacitive touch buttons, USB serial interface, and multi-page screen.",
        carousel: true
      },
      {
        id: "img-dc-fan",
        img: "/static/img/career/dc/dc-fan.jpg",
        alt: "Custom fan controller with 4 4-wire fan connectors with a SAMD Atmel microcontroller. Power supplied with a 4-pin Molex. USB port for external control.",
        caption: "Custom fan controller with a SAMD Atmel microcontroller.",
        carousel: true
      }
    ],
    publications: [],
    primaryLink: null
  },
  "career-research": {
    id: "career-research",
    modalMarkdownPath: ResearchModal,
    company: "University of Wisconsin - Madison",
    brief: "Overview of research conducted at the People and Robots Lab",
    descriptionMarkdownPath: ResearchBrief,
    skills: [
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
    thumbnail: "/static/img/thumbnail/career-uwmad.jpg",
    web: "https://peopleandrobots.wisc.edu/",
    positions: [
      {
        id: "career-research-position-ra",
        title: "Graduate Research Assistant",
        field: "Human-Robot Interaction",
        start: "2019",
        end: "2021",
        brief: "Graduate Research Assistant"
      }
    ],
    images: [
      {
        id: "img-uwmad-lab",
        img: "/static/img/career/uwmad/uwmad-lab.jpg",
        alt: "Lab experiment room with multiple robot arms (UR3e on the left, Franka Emkika Panda in the middle, Kinova Mico on the right).",
        caption: "Lab experiment room with multiple robot arms (UR3e, Franka Emkika Panda, Kinova Mico).",
        carousel: true
      }
    ],
    publications: [
      "publication-interdependence",
      "publication-authr",
      "publication-rad",
      "publication-onet",
      "publication-coframe"
    ],
    primaryLink: null
  },
  "career-ides": {
    id: "career-ides",
    modalMarkdownPath: IDESModal,
    company: "Integrated Dynamic Electron Solutions",
    brief: "High-level overview of my current engineering work at IDES",
    descriptionMarkdownPath: IDESBrief,
    skills: ["arduino", "microchip", "linux", "c", "python", "git", "atlassian", "gear"],
    thumbnail: "/static/img/thumbnail/ides-logo.png",
    web: "https://www.ides-inc.com/",
    positions: [
      {
        id: "career-ides-position-fe",
        title: "Firmware Engineer",
        field: "Electron Microscopy",
        start: "2021",
        end: "2022",
        brief: "Firmware Engineer"
      },
      {
        id: "career-ides-position-se",
        title: "Senior Embedded Systems Engineer",
        field: "Electron Microscopy",
        start: "2022",
        end: null,
        brief: "Senior Embedded Systems Engineer"
      }
    ],
    images: [],
    publications: [
      "publication-syn-tem"
    ],
    primaryLink: null
  }
};

export default data;
