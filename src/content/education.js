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
    images: [],
    descriptionMarkdownPath: MSOEBrief,
    thumbnail: "/static/img/thumbnail/msoe-logo.jpg",
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
    images: [],
    descriptionMarkdownPath: UWMBrief,
    thumbnail: "/static/img/thumbnail/uwmadison-crest.png",
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
