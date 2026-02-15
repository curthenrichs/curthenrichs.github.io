export const CATEGORY_COLORS = {
  language: "#1A237E",
  framework: "#1976D2",
  platform: "#0277BD",
  tool: "#00838F",
  domain: "#2E7D32"
};

export const domains = [
  {
    key: "embedded",
    title: "Embedded Systems",
    icon: "microchip",
    description:
      "Designing firmware and hardware systems from bare-metal microcontrollers to FPGA-based SoC platforms, with professional experience in USB device classes, serial protocols, and real-time operating systems.",
    skillIds: [
      "arduino",
      "microchip_atmel",
      "c_lang",
      "cpp",
      "assembly",
      "fpga_soc",
      "verilog",
      "vhdl",
      "freertos",
      "usb",
      "i2c_spi_uart",
      "altium",
      "pcb_design",
      "vivado",
      "vitis",
      "cypress_psoc",
      "raspberry_pi",
      "iot_home_automation",
      "xbee_zigbee",
      "beaglebone",
      "picaxe"
    ]
  },
  {
    key: "robotics",
    title: "Robotics & Motion Control",
    icon: "robot",
    description:
      "Research and development with industrial collaborative robots, including motion planning, real-time control, ROS driver development, and robot simulation.",
    skillIds: [
      "ros",
      "universal_robots",
      "franka_panda",
      "kinova_mico",
      "robotiq",
      "python",
      "motion_planning",
      "linux",
      "pybullet",
      "slam",
      "labview",
      "polyscope",
      "nvidia_jetson",
      "intel_realsense"
    ]
  },
  {
    key: "hri",
    title: "Human-Robot Interaction",
    icon: "users",
    description:
      "Graduate research in HRI with multiple publications, spanning user study design, ethnographic analysis, task modeling, and AR-based operator interfaces.",
    skillIds: [
      "hri_methods",
      "latex_overleaf",
      "python",
      "ros",
      "universal_robots",
      "technical_writing",
      "wearable_tech",
      "ethnography"
    ]
  },
  {
    key: "fullstack",
    title: "Full-Stack & Web",
    icon: "codexml",
    description:
      "Building robotics GUIs, automation dashboards, and data-driven web applications across the stack, from React frontends to Node.js backend services.",
    skillIds: [
      "react",
      "angular",
      "javascript",
      "nodejs",
      "mongodb",
      "git",
      "rest_apis",
      "vuejs",
      "java",
      "zustand",
      "ant_design",
      "flask",
      "expressjs",
      "redis",
      "microsoft_fluent",
      "typescript"
    ]
  },
  {
    key: "ar",
    title: "AR / 3D Visualization",
    icon: "box3d",
    description:
      "Developing augmented reality interfaces for robot programming and training, including HoloLens applications and 3D simulation environments.",
    skillIds: ["unity", "csharp", "hololens", "pybullet"]
  },
  {
    key: "manufacturing",
    title: "Manufacturing & Operations",
    icon: "factory",
    description:
      "Managing manufacturing resource planning, supply chain logistics, component procurement, and PCBA production processes.",
    skillIds: [
      "katana_mrp",
      "atlassian",
      "supply_chain",
      "altium",
      "pcb_design",
      "docker",
      "3d_printing",
      "agile_scrum",
      "autodesk",
      "cad"
    ]
  },
  {
    key: "ml",
    title: "Machine Learning & Vision",
    icon: "brain",
    description:
      "Coursework and research applying deep learning, computer vision, and parallel computing to problems in robotics and computational photography.",
    skillIds: ["keras", "python", "matlab", "computer_vision", "cuda_openmp", "mpi", "evolutionary_algorithms"]
  },
  {
    key: "llm_tooling",
    title: "LLM Tooling",
    icon: "sparkles",
    description:
      "Exploring agentic AI workflows for code generation, debugging, content drafting, and concept planning using CLI and web-based LLM tools.",
    skillIds: ["ai_augmented_dev", "claude_code", "gemini", "chatgpt", "codex", "python", "git"]
  }
];
