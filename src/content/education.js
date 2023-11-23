import UWMModal from "./markdown/modal/UWM.md";
import MSOEModal from "./markdown/modal/MSOE.md";
import UWMBrief from "./markdown/brief/UWM.md";
import MSOEBrief from "./markdown/brief/MSOE.md";

const data = {
  "education-msoe": {
    id: "education-msoe",
    modalMarkdownPath: MSOEModal,
    title: "Bachelor of Science in Computer Engineering",
    school: "Milwaukee School of Engineering",
    web: "https://www.msoe.edu/academics/undergraduate-degrees/engineering/computer-engineering/",
    address: "1025 N Broadway, Milwaukee, WI 53202",
    start: "2014",
    end: "2018",
    images: [
      {
        id: "img-networking",
        img: "/static/img/education/msoe/embedded-networking.jpg",
        alt: "Networking Course Project (left Cypress PSoc, center custom hardware for network connection, right Analog Discover oscilloscope)",
        caption: "Networking Course Project (left Cypress PSoc, center custom hardware for network connection, right Analog Discover oscilloscope)",
        carousel: true
      },
      {
        id: "img-pcb",
        img: "/static/img/education/msoe/embedded-pcb.jpg",
        alt: "Atmel AVR PCB layout for Embedded III coursework",
        caption: "Atmel AVR PCB layout for Embedded III coursework",
        carousel: true
      },
      {
        id: "img-tracking",
        img: "/static/img/education/msoe/embedded-tracking.jpg",
        alt: "Capture of video stream 2-axis servo tracking system for Embedded III coursework",
        caption: "Capture of video stream 2-axis servo tracking system for Embedded III coursework",
        carousel: true
      },
      {
        id: "img-treadmill",
        img: "/static/img/education/msoe/embedded-treadmill.jpg",
        alt: "Control system for a treadmill implemented on a Cypress PSoC for Embedded IV",
        caption: "Control system for a treadmill implemented on a Cypress PSoC for Embedded IV",
        carousel: true
      }
    ],
    descriptionMarkdownPath: MSOEBrief,
    thumbnail: "/static/img/thumbnail/msoe-logo.png",
    skills: [
      "arduino",
      "microchip",
      "atlassian",
      "matlab",
      "angular",
      "git",
      "java",
      "python",
      "c",
      "linux"
    ],
    publications: [],
    primaryLink: null
  },
  "education-uwmad": {
    id: "education-uwmad",
    modalMarkdownPath: UWMModal,
    title: "Master of Science in Computer Science",
    school: "University of Wisconsin - Madison",
    web: "https://www.cs.wisc.edu/",
    address: "1210 W Dayton St, Madison, WI 53706",
    start: "2018",
    end: "2021",
    images: [
      {
        id: "img-cv-gan-set",
        img: "/static/img/education/uwmad/computer-vision-gan-learning.gif",
        alt: "Sprite GAN training example for computational photography coursework",
        caption: "Sprite GAN training example for computational photography coursework",
        carousel: true
      },
      {
        id: "img-hci-ur",
        img: "/static/img/education/uwmad/hci-hifi-mockup.jpg",
        alt: "High fidelity mockup redesign of the Universal Robots control interface for HCI coursework",
        caption: "High fidelity mockup redesign of the Universal Robots control interface for HCI coursework",
        carousel: true
      },
      {
        id: "img-vis-detail",
        img: "/static/img/education/uwmad/hci-vis-detail.jpg",
        alt: "Detailed categorical interactive visualization of Amazon dataset for HCI coursework",
        caption: "Detailed categorical interactive visualization of Amazon dataset for HCI coursework",
        carousel: true
      },
      {
        id: "img-vis-overview",
        img: "/static/img/education/uwmad/hci-vis-overview.jpg",
        alt: "Interactive overview visualization of Amazon dataset for HCI coursework",
        caption: "Interactive overview visualization of Amazon dataset for HCI coursework",
        carousel: true
      }
    ],
    descriptionMarkdownPath: UWMBrief,
    thumbnail: "/static/img/thumbnail/uw-logo.png",
    skills: [
      "python", 
      "keras", 
      "matlab", 
      "overleaf", 
      "microchip", 
      "robot"
    ],
    publications: [],
    primaryLink: null
  }
};

export default data;
