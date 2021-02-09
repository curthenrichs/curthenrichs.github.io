
import AuthrProject from './projects/Authr.md';
import ITERProject from './projects/ITER.md';
import EvDProject from './projects/EvD.md';
import InternshipProject from './projects/Internship.md';
import HobbyProject from './projects/HobbyRobotics.md';
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
    "img": "/img/authr.png",
    "type": "Research",
    "project": "authr"
  },
  {
    "title": "Expert View Dashboard",
    "brief": "Training tool for cobot operators.",
    "img": "/img/evd.png",
    "type": "Research",
    "project": "evd"
  },
  {
    "title": "Task Interdependence and pRAD",
    "brief": "Experiments to better understand how operators interact with cobots.",
    "img": "/img/iter.png",
    "type": "Research",
    "project": "iter"
  },
  {
    "title": "Dedicated Computing Internship",
    "brief": "A brief discussion of several projects I worked on during my internship.",
    "img": "/img/internship.png",
    "type": "Internship",
    "project": "internship"
  },
  {
    "title": "Hobby Robotics",
    "brief": "Personal robot projects I work on in my free time.",
    "img": "/img/hobby.png",
    "type": "Personal",
    "project": "hobby"
  },
  {
    "title": "Misc.",
    "brief": "Miscellaneous projects that do not fit into other topics.",
    "img": "/img/misc.png",
    "type": "Personal",
    "project": "misc"
  }
]

export {
  Projects,
  ProjectDigests,
  GetMarkdownPathFromName
};
