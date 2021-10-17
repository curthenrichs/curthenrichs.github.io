import Biography from './markdown/Biography.md';

const data = {
  "biographyMarkdownPath": Biography,
  "interests": [
    "Embedded Systems",
    "Software Development",
    "Human-Robot Interaction",
    "Collaborative Robotics",
    "Computer Vision",
    "Hobby Robotics"
  ],
  "education": [
    {
      "title": "Master of Science in Computer Science",
      "year": "2021",
      "school": "University of Wisconsin - Madison",
      "link": "https://www.cs.wisc.edu/",
      "address": "1210 W Dayton St, Madison, WI 53706"
    },
    {
      "title": "Bachelor of Science in Computer Engineering",
      "year": "2018",
      "school": "Milwaukee School of Engineering",
      "link": "https://www.msoe.edu/academics/undergraduate-degrees/engineering/computer-engineering/",
      "address": "1025 N Broadway, Milwaukee, WI 53202"
    }
  ],
  "name": "Curt Henrichs",
  "employment": {
    "position": "Firmware Engineer",
    "field": "Electron Microscopy",
    "link": "https://www.ides-inc.com/",
    "place": "Integrated Dynamic Electron Solutions (IDES)"
  },
  "img": "/img/bio-main.png"
};



export default data;
