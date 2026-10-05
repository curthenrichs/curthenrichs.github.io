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
        alt: "A black Cypress PSoC development board on a wooden table, wired to a breadboard with chips, resistors, and red, green, and blue LEDs. A character LCD sits at the bottom left, and a black Digilent Analog Discovery unit on the right has a bundle of colored probe wires.",
        caption: "Networking Course Project (left Cypress PSoC, center custom hardware for network connection, right Analog Discovery oscilloscope)",
        carousel: true
      },
      {
        id: "img-pcb",
        img: "/static/img/education/msoe/embedded-pcb.jpg",
        alt: "A two-layer circuit board layout on a black background, with red top traces and blue bottom traces. A wide VCC trace runs across the middle between two rows of chip pads, with parts labeled IC1, IC2, and LED1 on the right.",
        caption: "Atmel AVR PCB layout for Embedded III coursework",
        carousel: true
      },
      {
        id: "img-tracking",
        img: "/static/img/education/msoe/embedded-tracking.jpg",
        alt: "A photo of a monitor showing a very low-resolution grayscale camera frame after filtering. Blocky light and dark patches fill the screen, the brightest a white blob across the upper right, with a few horizontal streaks of glitched lines.",
        caption: "Capture of video stream 2-axis servo tracking system for Embedded III coursework",
        carousel: true
      },
      {
        id: "img-treadmill",
        img: "/static/img/education/msoe/embedded-treadmill.jpg",
        alt: "A green character LCD on a black development board reads \"Type: Moderate fit and toned\" in dark text. Red, white, and teal jumper wires run to a small breadboard above it, and a red treadmill rail is at the left edge.",
        caption: "Control system for a treadmill implemented on a Cypress PSoC for Embedded IV",
        carousel: true
      }
    ],
    descriptionMarkdownPath: MSOEBrief,
    thumbnail: "/static/img/thumbnail/msoe-logo.png",
    skills: [
      "arduino",
      "microchip_atmel",
      "atlassian",
      "matlab",
      "angular",
      "git",
      "java",
      "python",
      "c_lang",
      "linux",
      "assembly",
      "cypress_psoc",
      "i2c_spi_uart"
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
        alt: "An animation of a four-by-four grid of small generated images. The tiles start as uniform gray noise, then blur into colorful blobs, and by the end form rough symmetric sprite shapes with outlines.",
        caption: "Sprite GAN training example for computational photography coursework",
        carousel: true
      },
      {
        id: "img-hci-ur",
        img: "/static/img/education/uwmad/hci-hifi-mockup.jpg",
        alt: "A desktop app titled Universal Robots Graphical Programming Environment. A left column lists node buttons grouped as Actions in blue, Primitives in green, and Control Flow in orange. A middle pane holds a program tree with Main and Initialize. A right pane on the Parameterization tab explains how the node categories work.",
        caption: "High fidelity mockup redesign of the Universal Robots control interface for HCI coursework",
        carousel: true
      },
      {
        id: "img-vis-detail",
        img: "/static/img/education/uwmad/hci-vis-detail.jpg",
        alt: "A chart titled Amazon Categories Detail View, with three sliders and a dropdown set to Books above it. A gray bar labeled All* splits into top-level categories such as Books, Clothing, Shoes & Jewelry, Automotive, Toys & Games, and Electronics. From Books, red and cyan lines fan out through several columns of subcategories to a long column of end points on the right.",
        caption: "Detailed categorical interactive visualization of Amazon dataset for HCI coursework",
        carousel: true
      },
      {
        id: "img-vis-overview",
        img: "/static/img/education/uwmad/hci-vis-overview.jpg",
        alt: "A sunburst chart titled Amazon Categories Depth Summary View, with sliders and a Show Other Branches checkbox above it. A small center circle labeled All is ringed by colored segments such as Books and Other. Long, narrow wedges of deeper subcategories radiate outward in green, purple, pink, yellow, and blue.",
        caption: "Interactive overview visualization of Amazon dataset for HCI coursework",
        carousel: true
      },
      {
        id: "img-hobby-taltosoid",
        img: "/static/img/projects/hobby/hobby-taltosoid.jpg",
        alt: "A hand in a black glove with dark flex strips sewn along each finger. A development board and a row of servo connectors are strapped to the wrist, with a rainbow ribbon cable running off to the right. A white 3D-printed robotic finger driven by small servos sticks out from beside the pinky.",
        caption: "First version of Taltosoid, a supernumerary robotic finger. Prototyped in my wearable course.",
        carousel: true
      }
    ],
    descriptionMarkdownPath: UWMBrief,
    thumbnail: "/static/img/thumbnail/uw-logo.png",
    skills: [
      "python",
      "keras",
      "matlab",
      "latex_overleaf",
      "microchip_atmel",
      "hri_methods",
      "computer_vision",
      "cuda_openmp",
      "mpi",
      "ethnography"
    ],
    publications: [],
    primaryLink: null
  }
};

export default data;
