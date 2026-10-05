import AuthrModal from "./markdown/modal/AuthrProject.md";
import ITERModal from "./markdown/modal/ITERProject.md";
import CoFrameModal from "./markdown/modal/EVDProject.md";
import HobbyModal from "./markdown/modal/HobbyProject.md";
import WebsiteModal from "./markdown/modal/WebsiteProject.md";
// import OkosModal from "./markdown/modal/OkosProject.md"; // TODO: Uncomment when Okos Polip project is ready to publish

import AuthrBrief from "./markdown/brief/AuthrProject.md";
import ITERBrief from "./markdown/brief/ITERProject.md";
import CoFrameBrief from "./markdown/brief/EVDProject.md";
import HobbyBrief from "./markdown/brief/HobbyProject.md";
import WebsiteBrief from "./markdown/brief/WebsiteProject.md";
// import OkosBrief from "./markdown/brief/OkosProject.md"; // TODO: Uncomment when Okos Polip project is ready to publish

const data = {
  // TODO: Uncomment when Okos Polip project is ready to publish
  // "project-okos": {
  //   title: "Okos Polip",
  //   brief: "Home automation device state ingest platform as a service",
  //   descriptionMarkdownPath: OkosBrief,
  //   thumbnail: "/static/img/thumbnail/project-okos.jpg",
  //   type: "Personal",
  //   id: "project-okos",
  //   modalMarkdownPath: OkosModal,
  //   notable: true,
  //   skills: [
  //     "okos",
  //     "arduino",
  //     "linux",
  //     "ros",
  //     "c",
  //     "python",
  //     "nodejs",
  //     "react",
  //     "javascript",
  //     "mongodb"
  //   ],
  //   images: [],
  //   publications: [],
  //   primaryLink: {
  //     link: "https://www.okospolip.com/",
  //     description: "Check out Okos Polip PaaS",
  //     text: "Click Here"
  //   }
  // },
  "project-coframe": {
    title: "CoFrame",
    brief: "Cobot operator training environment",
    descriptionMarkdownPath: CoFrameBrief,
    thumbnail: "/static/img/thumbnail/project-coframe.jpg",
    type: "Research",
    id: "project-coframe",
    modalMarkdownPath: CoFrameModal,
    notable: true,
    skills: [
      "universal_robots",
      "ros",
      "latex_overleaf",
      "python",
      "linux",
      "javascript",
      "react",
      "zustand",
      "ant_design",
      "pybullet",
      "unity",
      "hololens",
      "csharp",
      "microsoft_fluent"
    ],
    images: [
      {
        id: "img-coframe-current",
        img: "/static/img/projects/coframe/coframe-current.jpg",
        alt: "A dark three-panel web app. On the left, a Review list shows End Effector Poses, Thing Safety, Pinch Points, Collisions, and Occupancy, with category tabs above it. In the center, a 3D simulator shows a small robot arm on a table between two large dark machines, with a Task Goals list below it marked by red crosses and pink checks. On the right, a Program Editor holds colored nested blocks on a grid, such as Machine Initialize, Move Trajectory, and Move Gripper.",
        caption: "CoFrame interface (current demo application) with machine tending task.",
        carousel: true
      },
      {
        id: "img-coframe-prototype",
        img: "/static/img/projects/coframe/evd-authoring-ui.jpg",
        alt: "An earlier version of the app, titled Expert View Dashboard. It has a Checklist panel with Safety, Program Quality, Robot Performance, and Business Objectives tabs. A Simulation panel shows a 3D printer and a robot arm on a table. A Program Editor holds Blockly-style blocks for Gripper, Delay, and Move Trajectory, with a category list down its side.",
        caption: "CoFrame's authoring interface in early development, when it was still the Expert View Dashboard.",
        carousel: true
      },
      {
        id: "img-coframe-frames",
        img: "/static/img/projects/coframe/coframe-mapping.jpg",
        alt: "A network diagram of eight concept nodes, Trajectory, Reliability, Operator, Performance Factors, Safety, Integration, Application, and Programming, joined by gray lines of varying thickness. Four translucent colored regions overlap the nodes. Robot Performance in orange covers the top, Safety Concerns in pink stretches from Safety to Operator, Business Objectives in green covers the left, and Program Quality in blue sweeps down to Programming.",
        caption: "Visual mapping of the CoFrame frames compared to the themes identified via ENA on ethnography. From Schoen et al., HRI 2022, adapted from Siebert-Evenstone et al. © 2022 IEEE.",
        carousel: false
      },
      {
        id: "img-coframe-skills",
        img: "/static/img/projects/coframe/coframe-frames.png",
        alt: "Four colored columns of boxes, one per frame. Safety Concerns in pink lists End Effector Pose, Thing Movement, Collisions, Pinch Points, and Occupancy. Program Quality in blue lists Missing Blocks, Missing Parameters, Machine Logic, Unused Skills, Unused Features, and Empty Blocks. Robot Performance in orange lists Reachability, Joint Speed, End Effector Speed, Payload, and Space Usage. Business Objectives in green lists Cycle Time, Idle Time, and Return on Investment. Colored arrows link items across columns, such as Reachability to End Effector Pose and Cycle Time to Return on Investment.",
        caption: "\"Skill Tree\" that users work through when defining their cobot applications. From Schoen et al., HRI 2022. © 2022 IEEE.",
        carousel: false
      },
      {
        id: "img-coframe-structure",
        img: "/static/img/projects/coframe/coframe-structure.jpg",
        alt: "The CoFrame Knife Assembly screen with seven regions outlined in color and lettered A to G. A, red, is the review panel with frame tabs and a list of checks. B, green, is the 3D simulator with the arm and white trajectory lines. C, yellow, is an issue panel that reads \"The robot's joint speeds are too fast\". D, orange, is a column of action blocks. E, pink, and F, teal, hold the program being edited with a Move Trajectory block. G, blue, is the whole program editor.",
        caption: "Structure of CoFrame application at time of paper submission. From Schoen et al., HRI 2022. © 2022 IEEE.",
        carousel: false
      }
    ],
    publications: [
      "publication-coframe"
    ],
    primaryLink: {
      link: "https://wisc-hci.github.io/CoFrame/",
      description: null,
      text: "Launch CoFrame"
    }
  },
  "project-authr": {
    title: "Authr",
    brief: "Human-robot task development tool based on Therbligs",
    descriptionMarkdownPath: AuthrBrief,
    thumbnail: "/static/img/thumbnail/project-authr.jpg",
    type: "Research",
    id: "project-authr",
    modalMarkdownPath: AuthrModal,
    notable: true,
    skills: [
      "universal_robots",
      "ros",
      "latex_overleaf",
      "python",
      "linux",
      "javascript",
      "angular"
    ],
    images: [
      {
        id: "img-authr-setup",
        img: "/static/img/projects/authr/authr-setup.jpg",
        alt: "The Authr Interaction Plan app on its Setup tab. A 3D view shows a robot arm on a blue grid, with labels for Human, Cube, and Robot. Below it, a Destinations Setup form lists Initial:Human and Initial:Cube, each with position and orientation fields and Reachable and Movable toggles. A side menu lists General, Agents, Things, and Destinations.",
        caption: "Authr setup view allows user to define Agents, Things, and Destinations.",
        carousel: false
      },
      {
        id: "img-authr-task",
        img: "/static/img/projects/authr/authr-task.jpg",
        alt: "The Authr Plan tab. A Therbligs palette on the left lists Transport Empty, Transport Loaded, Grasp, Release Load, Hold, and Rest as teal cards. A First Task column holds Transport Empty, Grasp, Transport Loaded, and Hold, and a Second Task column holds Release Load and Rest. Small icons on each card mark the agents involved, and an Add task button sits to the right.",
        caption: "Authr task view allows user to drag-and-drop Therbligs into tasks.",
        carousel: false
      },
      {
        id: "img-authr-sim",
        img: "/static/img/projects/authr/authr-sim.jpg",
        alt: "The Authr Simulate tab. A 3D scene labeled Robot, Cube, and Goal shows a robot arm, a blue cube, and colored arrow-and-ring position markers. Below it are reset, play, and pause buttons, and a timeline with a row for each agent. The human's row runs Transport Empty, Grasp, Transport Loaded, Release Load, and Transport Empty, and the robot's row runs Transport Empty and Grasp.",
        caption: "Authr simulation view allows user to inspect the program constructed.",
        carousel: false
      }
    ],
    publications: [
      "publication-authr"
    ],
    primaryLink: null
  },
  "project-iter": {
    title: "Task Interdependence and pRAD",
    brief: "Experiments to better understand how operators interact with cobots",
    descriptionMarkdownPath: ITERBrief,
    thumbnail: "/static/img/thumbnail/project-iter.jpg",
    type: "Research",
    id: "project-iter",
    modalMarkdownPath: ITERModal,
    notable: true,
    skills: [
      "universal_robots",
      "ros",
      "latex_overleaf",
      "python",
      "linux",
      "polyscope"
    ],
    images: [
      {
        id: "img-iter-task",
        img: "/static/img/projects/iter/iter-seq-task.jpg",
        alt: "A silver Universal Robots arm with a gripper places a block onto a small stack of red, green, and blue wooden blocks on a black table. A person in a gray sweater reaches in with a blue block. Orange blocks and blue tape lines are spread across the table, and a printed sheet of target structures lies in the corner.",
        caption: "Participant constructs wooden block structure with the robot. From Zhao et al., RO-MAN 2020. © 2020 IEEE.",
        carousel: true
      },
      {
        id: "img-iter-display",
        img: "/static/img/projects/iter/iter-displays.png",
        alt: "Two rows, Timeline and Timer, under three columns labeled Neglect, Warn, and Interact, with arrows between them. The Timeline row shows a timeline bar of teal and purple segments with a marker that moves right, topped by a green check, then a yellow exclamation point, then a red people icon. The Timer row shows a countdown at 00:15 in green, 00:04 in yellow, and 00:00 in red.",
        caption: "Evaluated two interface widgets for communicating pRAD. From Henrichs et al., RO-MAN 2021. © 2021 IEEE.",
        carousel: true
      },
      {
        id: "img-iter-workspace",
        img: "/static/img/projects/iter/iter-workspace.png",
        alt: "A top-down sketch of an L-shaped table. Along the top are a green Operator Zone with a parts tray, a purple Assembly Zone under the robot arm, and an orange Storage Zone of red bars. Down the left side is a Sorting Zone of six bins, with a pRAD Display on the outer edge. An Interaction Button sits beside the Assembly Zone, and the operator stands in the corner of the L.",
        caption: "Sketch of participant's workspace for the two experiments. From Henrichs et al., RO-MAN 2021. © 2021 IEEE.",
        carousel: true
      },
      {
        id: "img-iter-vision",
        img: "/static/img/projects/iter/iter-computer-vision.jpg",
        alt: "An overhead camera view of about twenty colored wooden blocks scattered on a dark table. Each block is outlined in green, with red boxes on its faces and red number labels such as 1:1, 2:2, and 17:2. Four square fiducial markers numbered 0 to 3 sit at the corners, and a round black object is near the bottom.",
        caption: "Demonstration of computer vision system capability in ITER system.",
        carousel: true
      }
    ],
    publications: [
      "publication-interdependence", 
      "publication-rad"
    ],
    primaryLink: null
  },
  "project-hobby": {
    title: "Hobby Projects & Half-Built-Robots Blog",
    brief: "Hobby robotics and home automation projects",
    descriptionMarkdownPath: HobbyBrief,
    thumbnail: "/static/img/thumbnail/project-hobby.jpg",
    type: "Personal",
    id: "project-hobby",
    modalMarkdownPath: HobbyModal,
    notable: true,
    skills: [
      "arduino",
      "ros",
      "c_lang",
      "python",
      "basic",
      "rest_apis",
      "slam",
      "nvidia_jetson",
      "intel_realsense",
      "iot_home_automation",
      "ai_augmented_dev",
      "claude_code"
    ],
    images: [
      {
        id: "img-hobby-taltosoid",
        img: "/static/img/projects/hobby/hobby-taltosoid.jpg",
        alt: "A hand in a black glove with dark flex strips sewn along each finger. A development board and a row of servo connectors are strapped to the wrist, with a rainbow ribbon cable running off to the right. A white 3D-printed robotic finger driven by small servos sticks out from beside the pinky.",
        caption: "First version of Taltosoid, a supernumerary robotic finger.",
        carousel: false
      },
      {
        id: "img-hobby-small-robots",
        img: "/static/img/projects/hobby/hobby-robots.jpg",
        alt: "Small hobby robots shown in a group photo (left to right): YAM, Beta-Rex, Roverbot, BOE-Bot, Hexbug Larva, Solar Roller, Symet, NBB, Spinbot, Photoflower, Herbie, Beetle (large), Beetle (small), and Bubbles.",
        caption: "Some of my older robots in a group photo.",
        carousel: false
      },
      {
        id: "img-hobby-leds",
        img: "/static/img/projects/hobby/hobby-leds.jpg",
        alt: "A dark room lit by four LED strips running across the ceiling. Three glow cyan and one glows violet. Curtains and a world map wall hanging are lit blue below them.",
        caption: "LEDs being controlled by lighting effects interface, back when I was at MSOE.",
        carousel: false
      }
    ],
    publications: [],
    primaryLink: {
      link: "https://www.half-built-robots.com/",
      description: "Checkout my blog \"Half-Built-Robots\"",
      text: "Peek at the Workbench"
    }
  },
  "project-website": {
    title: "Portfolio Website",
    brief: "Background on the development of this website",
    descriptionMarkdownPath: WebsiteBrief,
    thumbnail: "/static/img/thumbnail/project-website.jpg",
    type: "Personal",
    id: "project-website",
    modalMarkdownPath: WebsiteModal,
    notable: true,
    skills: [
      "react",
      "javascript",
      "ant_design",
      "ai_augmented_dev",
      "claude_code"
    ],
    images: [
      {
        id: "img-web-large",
        img: "/static/img/projects/website/portfolio-home-desktop.jpg",
        alt: "A full-width screenshot of this site's home page. A portrait, name, title, social icons, and a Download Resume button are on the left. A Biography beside them is followed by Career, Education, and Interests lists. Below is a Skills grid of icons with blue progress bars, such as Arduino, Linux, ROS, C/C++, and Python.",
        caption: "Desktop view of the home and skills sections.",
        carousel: true
      },
      {
        id: "img-web-med",
        img: "/static/img/projects/website/portfolio-home-tablet.png",
        alt: "A medium-width screenshot of the home page with a hamburger menu in the header. The portrait, name, title, social icons, and Download Resume button sit centered above the Biography text.",
        caption: "Tablet view of the home section.",
        carousel: true
      },
      {
        id: "img-web-small",
        img: "/static/img/projects/website/portfolio-home-mobile.png",
        alt: "A narrow phone-width screenshot of the home page. The large portrait, name, title, social icons, and Download Resume button fill the screen, with the start of the Biography below.",
        caption: "Mobile view of the home section.",
        carousel: true
      },
    ],
    publications: [],
    primaryLink: null
  }
};

export default data;
