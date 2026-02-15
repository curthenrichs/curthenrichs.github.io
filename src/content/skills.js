const data = [
  {
    name: "Arduino",
    icon: "arduino",
    hover: "Uno, ESP, Teensy",
    id: "arduino",
    category: "platform"
  },
  {
    name: "Microchip-Atmel",
    icon: "microchip",
    hover: "AVR, SAM",
    id: "microchip_atmel",
    category: "platform"
  },
  {
    name: "Linux",
    icon: "linux",
    hover: "Ubuntu / Debian",
    id: "linux",
    category: "platform"
  },
  {
    name: "ROS",
    icon: "ros",
    hover: "ROS 1",
    id: "ros",
    category: "framework"
  },
  {
    name: "C",
    icon: "c",
    hover: "Baremetal firmware & embedded systems",
    id: "c_lang",
    category: "language"
  },
  {
    name: "C++",
    icon: "cplusplus",
    hover: "Embedded applications & coursework",
    id: "cpp",
    category: "language"
  },
  {
    name: "Python",
    icon: "python",
    hover: "Grad School & Robotics",
    id: "python",
    category: "language"
  },
  {
    name: "Java",
    icon: "java",
    hover: "Coursework",
    id: "java",
    category: "language"
  },
  {
    name: "Nodejs",
    icon: "nodejs",
    hover: "Automation Servers",
    id: "nodejs",
    category: "framework"
  },
  {
    name: "Git",
    icon: "git",
    hover: "gitlab (work) & github (personal)",
    id: "git",
    category: "tool"
  },
  {
    name: "Universal Robots",
    icon: "robot",
    hover: "UR5, UR3e",
    id: "universal_robots",
    category: "platform"
  },
  {
    name: "Unity",
    icon: "unity",
    hover: "Game Dev. & Hololens",
    id: "unity",
    category: "platform"
  },
  {
    name: "CSharp",
    icon: "csharp",
    hover: "Game Dev. & Hololens",
    id: "csharp",
    category: "language"
  },
  {
    name: "Hololens",
    icon: "microsoft",
    hover: "AR Robotics GUI",
    id: "hololens",
    category: "platform"
  },
  {
    name: "React",
    icon: "react",
    hover: "Robotics GUIs & Automation Dashboards",
    id: "react",
    category: "framework"
  },
  {
    name: "Angular",
    icon: "angular",
    hover: "Robotics GUIs",
    id: "angular",
    category: "framework"
  },
  {
    name: "Javascript",
    icon: "javascript",
    hover: "Web (various)",
    id: "javascript",
    category: "language"
  },
  {
    name: "Keras",
    icon: "keras",
    hover: "ML Coursework",
    id: "keras",
    category: "framework"
  },
  {
    name: "MATLAB",
    icon: "matlab",
    hover: "Coursework",
    id: "matlab",
    category: "language"
  },
  {
    name: "Motion Planning",
    icon: "robot",
    hover: "MoveIT, Relaxed-IK / Lively-TK",
    id: "motion_planning",
    category: "domain"
  },
  {
    name: "Latex / Overleaf",
    icon: "overleaf",
    hover: "Coursework & Research",
    id: "latex_overleaf",
    category: "tool"
  },
  {
    name: "Atlassian",
    icon: "atlassian",
    hover: "Trello, Jira, Confluence",
    id: "atlassian",
    category: "tool"
  },
  {
    name: "MongoDB",
    icon: "mongodb",
    hover: "Web (various)",
    id: "mongodb",
    category: "tool"
  },
  {
    name: "FPGA / SoC",
    icon: "microchip",
    hover: "Verilog, VHDL for Intel Cyclone and Xilinx Zynq",
    id: "fpga_soc",
    category: "platform"
  },
  {
    name: "Assembly",
    icon: "microchip",
    hover: "NIOS, MIPS, ARM",
    id: "assembly",
    category: "language"
  },
  {
    name: "Katana MRP",
    icon: "gear",
    hover: "Manufacturing",
    id: "katana_mrp",
    category: "tool"
  },
  {
    name: "Labview",
    icon: "labview",
    hover: "Robotics, Coursework",
    id: "labview",
    category: "tool"
  },
  {
    name: "FreeRTOS",
    icon: "microchip",
    hover: "For Xilinx Zynq",
    id: "freertos",
    category: "framework"
  },
  {
    name: "USB",
    icon: "usb",
    hover: "Vendor Class, CDC Class, FTDI Bridge",
    id: "usb",
    category: "domain"
  },
  {
    name: "Verilog",
    icon: "xilinx",
    hover: "HDL for Intel Cyclone & Xilinx Zynq FPGAs",
    id: "verilog",
    category: "language"
  },
  {
    name: "VHDL",
    icon: "xilinx",
    hover: "HDL for FPGA coursework",
    id: "vhdl",
    category: "language"
  },
  {
    name: "Altium",
    icon: "altiumdesigner",
    hover: "Schematic capture & PCB layout",
    id: "altium",
    category: "tool"
  },
  {
    name: "PCB Design",
    icon: "circuitboard",
    hover: "Multi-layer board design & PCBA production",
    id: "pcb_design",
    category: "domain"
  },
  {
    name: "Docker",
    icon: "docker",
    hover: "Containerized development & deployment",
    id: "docker",
    category: "tool"
  },
  {
    name: "Vue.js",
    icon: "vue",
    hover: "Web frontends",
    id: "vuejs",
    category: "framework"
  },
  {
    name: "I2C / SPI / UART",
    icon: "microchip",
    hover: "Embedded serial communication protocols",
    id: "i2c_spi_uart",
    category: "domain"
  },
  {
    name: "Computer Vision",
    icon: "opencv",
    hover: "Object detection & image processing",
    id: "computer_vision",
    category: "domain"
  },
  {
    name: "SLAM",
    icon: "robot",
    hover: "Simultaneous Localization and Mapping",
    id: "slam",
    category: "domain"
  },
  {
    name: "pyBullet",
    icon: "python",
    hover: "Physics simulation for robotics",
    id: "pybullet",
    category: "framework"
  },
  {
    name: "HRI Research",
    icon: "robot",
    hover: "Human-Robot Interaction methods & user studies",
    id: "hri_methods",
    category: "domain"
  },
  {
    name: "Technical Writing",
    icon: "overleaf",
    hover: "Research papers, documentation, proposals",
    id: "technical_writing",
    category: "domain"
  },
  {
    name: "REST APIs",
    icon: "gear",
    hover: "API design & integration",
    id: "rest_apis",
    category: "domain"
  },
  {
    name: "CUDA / OpenMP",
    icon: "nvidia",
    hover: "GPU & multi-threaded parallel computing",
    id: "cuda_openmp",
    category: "tool"
  },
  {
    name: "Supply Chain",
    icon: "gear",
    hover: "Procurement, logistics, vendor management",
    id: "supply_chain",
    category: "domain"
  },
  {
    name: "Autodesk",
    icon: "autodesk",
    hover: "Inventor, Fusion 360",
    id: "autodesk",
    category: "tool"
  },
  {
    name: "CAD",
    icon: "gear",
    hover: "Mechanical design & 3D modeling",
    id: "cad",
    category: "domain"
  },
  {
    name: "Franka Emika Panda",
    icon: "robot",
    hover: "7-DOF collaborative research robot",
    id: "franka_panda",
    category: "platform"
  },
  {
    name: "Kinova Mico",
    icon: "robot",
    hover: "Lightweight assistive robot arm",
    id: "kinova_mico",
    category: "platform"
  },
  {
    name: "Robotiq Gripper",
    icon: "robot",
    hover: "2F-85 gripper, ROS driver development",
    id: "robotiq",
    category: "platform"
  },
  {
    name: "Zustand",
    icon: "javascript",
    hover: "Lightweight React state management",
    id: "zustand",
    category: "framework"
  },
  {
    name: "Ant Design",
    icon: "antdesign",
    hover: "Enterprise React UI framework",
    id: "ant_design",
    category: "framework"
  },
  {
    name: "Vivado",
    icon: "xilinx",
    hover: "Xilinx FPGA design & synthesis suite",
    id: "vivado",
    category: "tool"
  },
  {
    name: "Vitis",
    icon: "xilinx",
    hover: "Xilinx embedded software development platform",
    id: "vitis",
    category: "tool"
  },
  {
    name: "MPI",
    icon: "gear",
    hover: "Message Passing Interface for cluster computing",
    id: "mpi",
    category: "tool"
  },
  {
    name: "3D Printing",
    icon: "gear",
    hover: "FDM prototyping & additive manufacturing",
    id: "3d_printing",
    category: "domain"
  },
  {
    name: "Agile / Scrum",
    icon: "atlassian",
    hover: "Sprint planning, standups, retrospectives",
    id: "agile_scrum",
    category: "domain"
  },
  {
    name: "Cypress PSoC",
    icon: "microchip",
    hover: "Programmable System-on-Chip for embedded coursework",
    id: "cypress_psoc",
    category: "platform"
  },
  {
    name: "Wearable Tech",
    icon: "gear",
    hover: "Wearable electronics & supernumerary robotics",
    id: "wearable_tech",
    category: "domain"
  },
  {
    name: "IoT / Home Automation",
    icon: "gear",
    hover: "Smart home systems, device-to-cloud services",
    id: "iot_home_automation",
    category: "domain"
  },
  {
    name: "Raspberry Pi",
    icon: "raspberrypi",
    hover: "Single-board computer for robotics & IoT",
    id: "raspberry_pi",
    category: "platform"
  },
  {
    name: "Flask",
    icon: "flask",
    hover: "Lightweight Python web framework",
    id: "flask",
    category: "framework"
  },
  {
    name: "Express.js",
    icon: "nodejs",
    hover: "Node.js web framework, MERN stack",
    id: "expressjs",
    category: "framework"
  },
  {
    name: "Polyscope",
    icon: "robot",
    hover: "Universal Robots visual programming environment",
    id: "polyscope",
    category: "tool"
  },
  {
    name: "XBee / Zigbee",
    icon: "zigbee",
    hover: "RF wireless serial communication",
    id: "xbee_zigbee",
    category: "platform"
  },
  {
    name: "Nvidia Jetson",
    icon: "nvidia",
    hover: "NVIDIA edge AI computing for robotics",
    id: "nvidia_jetson",
    category: "platform"
  },
  {
    name: "Intel RealSense",
    icon: "intel",
    hover: "Depth & tracking cameras for robotics",
    id: "intel_realsense",
    category: "platform"
  },
  {
    name: "Ethnography",
    icon: "experiment",
    hover: "Qualitative research & field observation",
    id: "ethnography",
    category: "domain"
  },
  {
    name: "Redis",
    icon: "redis",
    hover: "In-memory data store & session management",
    id: "redis",
    category: "tool"
  },
  {
    name: "BeagleBone",
    icon: "microchip",
    hover: "Single-board computer for embedded Linux",
    id: "beaglebone",
    category: "platform"
  },
  {
    name: "PICAXE",
    icon: "microchip",
    hover: "BASIC-programmable microcontroller",
    id: "picaxe",
    category: "platform"
  },
  {
    name: "Evolutionary Algorithms",
    icon: "dna",
    hover: "Neuroevolution & genetic optimization",
    id: "evolutionary_algorithms",
    category: "domain"
  },
  {
    name: "BASIC",
    icon: "visualbasic",
    hover: "Visual Basic, QBasic, PICAXE, Parallax, VBScript",
    id: "basic",
    category: "language"
  },
  {
    name: "TypeScript",
    icon: "typescript",
    hover: "Okos Polip frontend & typed web apps",
    id: "typescript",
    category: "language"
  },
  {
    name: "Microsoft Fluent",
    icon: "microsoft",
    hover: "Microsoft's UI design system for React",
    id: "microsoft_fluent",
    category: "framework"
  },
  {
    name: "AI-Augmented Dev",
    icon: "sparkles",
    hover: "Agentic workflows for code gen, debugging, and planning",
    id: "ai_augmented_dev",
    category: "domain"
  },
  {
    name: "Claude Code",
    icon: "anthropic",
    hover: "Agentic CLI coding assistant",
    id: "claude_code",
    category: "tool"
  },
  {
    name: "Gemini",
    icon: "googlegemini",
    hover: "Google AI assistant (CLI & web)",
    id: "gemini",
    category: "tool"
  },
  {
    name: "ChatGPT",
    icon: "openai",
    hover: "OpenAI conversational AI",
    id: "chatgpt",
    category: "tool"
  },
  {
    name: "Codex",
    icon: "openai",
    hover: "AI code generation in VS Code",
    id: "codex",
    category: "tool"
  },
  {
    name: "Nvidia Holoscan",
    icon: "nvidia",
    hover: "AI sensor processing platform for edge computing",
    id: "nvidia_holoscan",
    category: "framework"
  },
  {
    name: "Altera Quartus",
    icon: "intel",
    hover: "Intel FPGA design & synthesis suite",
    id: "altera_quartus",
    category: "tool"
  }
];

export default data;
