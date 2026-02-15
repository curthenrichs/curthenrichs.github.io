import Biography from "./markdown/Biography.md";

const data = {
  id: "biography",
  markdownPath: Biography,
  name: "Curt Henrichs",
  currentEmploymentId: {
    company: "career-ides",
    position: "career-ides-position-se"
  },
  img: "/static/img/bio-main.jpg",
  interests: [
    "Embedded Systems",
    "Software Development & HCI",
    "Robotics & HRI",
    "Home Automation",
    "Computer Vision & ML",
    "Agentic AI & LLM Tooling"
  ]
};

export default data;
