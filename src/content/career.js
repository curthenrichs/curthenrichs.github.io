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
      "microchip_atmel",
      "linux",
      "c_lang",
      "python",
      "nodejs",
      "git",
      "javascript",
      "atlassian",
      "mongodb",
      "usb",
      "i2c_spi_uart"
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
        alt: "A black 3D-printed box on a desk with a small OLED screen set into its front. The screen shows a test pattern of numbers and letters on two lines in blue. Wiring and a clear acrylic plate sit on top of the box.",
        caption: "Custom OLED node ID display that fits within 3.5\" bay.",
        carousel: true
      },
      {
        id: "img-dc-oled-pcb",
        img: "/static/img/career/dc/dc-oled-pcb.jpg",
        alt: "Close-up of the bare green circuit board held next to a quarter for scale. The OLED shows two lines of characters in blue, with twisted pairs of red, black, green, and orange wire behind it.",
        caption: "OLED display has two capacitive touch buttons, USB serial interface, and multi-page screen.",
        carousel: true
      },
      {
        id: "img-dc-fan",
        img: "/static/img/career/dc/dc-fan.jpg",
        alt: "Two green fan controller boards on a clear acrylic plate. Each has a row of white fan headers and a white 4-pin Molex power connector. The front board has a USB cable plugged in and a ribbon cable running to jumper wires on a breadboard.",
        caption: "Custom fan controller with a SAMD Atmel microcontroller. It drives 4-wire fans, takes Molex power, and has USB for external control.",
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
      "universal_robots",
      "unity",
      "csharp",
      "hololens",
      "react",
      "angular",
      "javascript",
      "keras",
      "matlab",
      "latex_overleaf",
      "polyscope",
      "robotiq",
      "ethnography"
    ],
    thumbnail: "/static/img/thumbnail/career-uwmad.jpg",
    web: "https://peopleandrobots.wisc.edu/",
    positions: [
      {
        id: "career-research-position-ta",
        title: "Graduate Teaching Assistant",
        field: "Software Engineering",
        start: "2018",
        end: "2018",
        brief: "Graduate Teaching Assistant"
      },
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
        alt: "A lab room with three robot arms. A silver UR3e with a gripper is mounted at the end of a table on the left. A white Franka Emika Panda stands on a wooden workbench in the middle, beside a red box, a cardboard box, and a small green block. A black Kinova Mico sits on a smaller table on the right. Cameras on tripods watch from the corners, and blue tape marks the floor and the dark table in the foreground.",
        caption: "Lab experiment room with multiple robot arms (UR3e, Franka Emika Panda, Kinova Mico).",
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
    skills: [
      "arduino",
      "microchip_atmel",
      "linux",
      "c_lang",
      "python",
      "git",
      "atlassian",
      "supply_chain",
      "usb",
      "microsoft_fluent",
      "fpga_soc",
      "vivado",
      "vitis",
      "verilog",
      "freertos",
      "rest_apis",
      "altium",
      "pcb_design",
      "ai_augmented_dev",
      "gemini",
      "claude_code",
      "computer_vision"
    ],
    // No IDES logo asset yet: null renders the DefaultImg placeholder
    // directly instead of 404-fetching a missing file on every page load.
    thumbnail: null,
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
    images: [
      {
        id: "img-ides-flywheel",
        img: "/static/img/career/ides/ides-flywheel.png",
        alt: "Diagram of six labeled circles on a ring, with arrows running clockwise from Process and People to Hardware, Firmware, Software, Manufacturing and QA, Tooling, and back to Process and People. Curved lines cross the ring between groups. A gold ring outside the circles, labeled MiniConsole, is solid from Process and People through Manufacturing and QA, with short gold marks into each of those five circles, and dotted through Tooling.",
        caption: "How each part of my work at IDES feeds the next.",
        carousel: true
      }
    ],
    publications: [
      "publication-syn-tem"
    ],
    primaryLink: null
  }
};

export default data;
