import InternshipProject from "./markdown/InternshipCareer.md";
import ResearchCareer from "./markdown/ResearchCareer.md";
import IDESCareer from "./markdown/IDESCareer.md";


const GetMarkdownPathFromName = (name) => {
  let retVal = null;

  switch (name) {
  case "internship":
    retVal = InternshipProject;
    break;
case "research": 
    retVal = ResearchCareer;
    break;
case "ides":
    retVal = IDESCareer;
    break; 
  }

  return retVal;
};


const Career = [
  "internship",
  "research",
  "ides"
];

const CareerDigests = [
  {
    "title": "Integrated Dynamic Electron Solutions",
    "brief": "A brief discussion of my work at IDES",
    "img": null,
    "job": "ides"
  },
  {
    "title": "UW Madison - Computer Sciences",
    "brief": "A brief discussion of my time as a graduate research assistant",
    "img": null,
    "job": "research"
  },
  {
    "title": "Dedicated Computing",
    "brief": "A brief discussion of several projects I worked on during my internship.",
    "img": "/img/teaser-internship.jpg",
    "job": "internship"
  }
];

const CareerImageCarousel = {
  "internship": [
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
  "research": [],
  "ides": []
};


export {
  Career,
  CareerDigests,
  CareerImageCarousel,
  GetMarkdownPathFromName
};
  