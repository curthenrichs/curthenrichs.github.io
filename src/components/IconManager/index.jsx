import Icon from "@ant-design/icons";

import { ReactComponent as AngularIcon } from "./svg/angular.svg";
import { ReactComponent as ArduinoIcon } from "./svg/arduino.svg";
import { ReactComponent as CPPIcon } from "./svg/cplusplus.svg";
import { ReactComponent as CSharpIcon } from "./svg/csharp.svg";
import { ReactComponent as GitIcon } from "./svg/git.svg";
import { ReactComponent as GraduateCapIcon } from "./svg/graduation-cap-solid.svg";
import { ReactComponent as JavaIcon } from "./svg/java.svg";
import { ReactComponent as LinuxIcon } from "./svg/linux.svg";
import { ReactComponent as RobotIcon } from "./svg/mechanical-arm.svg";
import { ReactComponent as MicrochipIcon } from "./svg/microchip-solid.svg";
import { ReactComponent as MenuIcon } from "./svg/menu.svg";
import { ReactComponent as MicrosoftIcon } from "./svg/microsoft.svg";
import { ReactComponent as NodeJSIcon } from "./svg/node-dot-js.svg";
import { ReactComponent as PythonIcon } from "./svg/python.svg";
import { ReactComponent as ReactIcon } from "./svg/react.svg";
import { ReactComponent as ROSIcon } from "./svg/ros.svg";
import { ReactComponent as SketchIcon } from "./svg/sketch.svg";
import { ReactComponent as UnityIcon } from "./svg/unity.svg";
import { ReactComponent as JavascriptIcon } from "./svg/javascript.svg";
import { ReactComponent as KerasIcon } from "./svg/keras.svg";
import { ReactComponent as MongoDBIcon } from "./svg/mongodb.svg";
import { ReactComponent as OverleafIcon } from "./svg/overleaf.svg";
import { ReactComponent as ProjectIcon } from "./svg/project.svg";
import { ReactComponent as MatlabIcon } from "./svg/matlab.svg";
import { ReactComponent as AtlassianIcon } from "./svg/atlassian.svg";
import { ReactComponent as AutodeskIcon } from "./svg/autodesk.svg";
import { ReactComponent as CIcon } from "./svg/c.svg";
import { ReactComponent as LabviewIcon } from "./svg/labview.svg";
import { ReactComponent as TwitterXIcon } from "./svg/twitter-x.svg";
import { ReactComponent as BlueskyIcon } from "./svg/bluesky.svg";
import { ReactComponent as USBIcon } from "./svg/usb.svg";
import { ReactComponent as OkosPolipIcon } from "./svg/okos-polip.svg";
import { ReactComponent as DockerIcon } from "./svg/docker.svg";
import { ReactComponent as RaspberryPiIcon } from "./svg/raspberrypi.svg";
import { ReactComponent as VueIcon } from "./svg/vuedotjs.svg";
import { ReactComponent as RedisIcon } from "./svg/redis.svg";
import { ReactComponent as FlaskIcon } from "./svg/flask.svg";
import { ReactComponent as AntDesignIcon } from "./svg/antdesign.svg";
import { ReactComponent as NvidiaIcon } from "./svg/nvidia.svg";
import { ReactComponent as IntelIcon } from "./svg/intel.svg";
import { ReactComponent as ZigbeeIcon } from "./svg/zigbee.svg";
import { ReactComponent as AltiumDesignerIcon } from "./svg/altiumdesigner.svg";
import { ReactComponent as TypeScriptIcon } from "./svg/typescript.svg";
import { ReactComponent as OpenCVIcon } from "./svg/opencv.svg";
import { ReactComponent as XilinxIcon } from "./svg/xilinx.svg";
import { ReactComponent as DnaIcon } from "./svg/dna.svg";
import { ReactComponent as CircuitBoardIcon } from "./svg/circuit-board.svg";
import { ReactComponent as AnthropicIcon } from "./svg/anthropic.svg";
import { ReactComponent as OpenAIIcon } from "./svg/openai.svg";
import { ReactComponent as GoogleGeminiIcon } from "./svg/googlegemini.svg";
import { ReactComponent as VisualBasicIcon } from "./svg/visualbasic.svg";
import { ReactComponent as UsersIcon } from "./svg/users.svg";
import { ReactComponent as CodeXmlIcon } from "./svg/code-xml.svg";
import { ReactComponent as Box3dIcon } from "./svg/box.svg";
import { ReactComponent as FactoryIcon } from "./svg/factory.svg";
import { ReactComponent as BrainIcon } from "./svg/brain.svg";
import { ReactComponent as SparklesIcon } from "./svg/sparkles.svg";

import {
  WarningOutlined,
  ToolFilled,
  ExperimentFilled,
  StarFilled,
  GithubFilled,
  MailOutlined,
  LinkedinFilled,
  TwitterOutlined as TwitterBird,
  CaretRightOutlined,
  QuestionOutlined,
  DownCircleOutlined,
  UpCircleOutlined,
  DownloadOutlined,
  EnvironmentFilled,
  SettingOutlined
} from "@ant-design/icons";

// Custom SVG icons are decorative: each sits beside visible text or inside a
// labeled control, so the role="img" span antd wraps them in is hidden from
// assistive tech. antd's own icons (GithubFilled etc.) carry an aria-label
// from their name and are left alone.
function Angular() {
  return <Icon component={AngularIcon} aria-hidden="true" />;
}

function Arduino() {
  return <Icon component={ArduinoIcon} aria-hidden="true" />;
}

function CPlusPlus() {
  return <Icon component={CPPIcon} aria-hidden="true" />;
}

function CSharp() {
  return <Icon component={CSharpIcon} aria-hidden="true" />;
}

function Git() {
  return <Icon component={GitIcon} aria-hidden="true" />;
}

function GraduateCap() {
  return <Icon component={GraduateCapIcon} aria-hidden="true" />;
}

function Java() {
  return <Icon component={JavaIcon} aria-hidden="true" />;
}

function Linux() {
  return <Icon component={LinuxIcon} aria-hidden="true" />;
}

function Robot() {
  return <Icon component={RobotIcon} aria-hidden="true" />;
}

function Menu() {
  return <Icon component={MenuIcon} aria-hidden="true" />;
}

function Microchip() {
  return <Icon component={MicrochipIcon} aria-hidden="true" />;
}

function Microsoft() {
  return <Icon component={MicrosoftIcon} aria-hidden="true" />;
}

function NodeJS() {
  return <Icon component={NodeJSIcon} aria-hidden="true" />;
}

function Python() {
  return <Icon component={PythonIcon} aria-hidden="true" />;
}

function React() {
  return <Icon component={ReactIcon} aria-hidden="true" />;
}

function ROS() {
  return <Icon component={ROSIcon} aria-hidden="true" />;
}

function Sketch() {
  return <Icon component={SketchIcon} aria-hidden="true" />;
}

function Unity() {
  return <Icon component={UnityIcon} aria-hidden="true" />;
}

function Javascript() {
  return <Icon component={JavascriptIcon} aria-hidden="true" />;
}

function Keras() {
  return <Icon component={KerasIcon} aria-hidden="true" />;
}

function MongoDB() {
  return <Icon component={MongoDBIcon} aria-hidden="true" />;
}

function Overleaf() {
  return <Icon component={OverleafIcon} aria-hidden="true" />;
}

function Project() {
  return <Icon component={ProjectIcon} aria-hidden="true" />;
}

function Matlab() {
  return <Icon component={MatlabIcon} aria-hidden="true" />;
}

function Atlassian() {
  return <Icon component={AtlassianIcon} aria-hidden="true" />;
}

function Autodesk() {
  return <Icon component={AutodeskIcon} aria-hidden="true" />;
}

function C() {
  return <Icon component={CIcon} aria-hidden="true" />;
}

function Gear() {
  return <SettingOutlined />;
}

function Labview() {
  return <Icon component={LabviewIcon} aria-hidden="true" />;
}

function TwitterX() {
  return <Icon component={TwitterXIcon} aria-hidden="true" />;
}

function Twitter() {
  return <TwitterX />;
}

function Bluesky() {
  return <Icon component={BlueskyIcon} aria-hidden="true" />;
}

function USB() {
  return <Icon component={USBIcon} aria-hidden="true" />;
}

function OkosPolip() {
  return <Icon component={OkosPolipIcon} aria-hidden="true" />;
}

function Docker() {
  return <Icon component={DockerIcon} aria-hidden="true" />;
}

function RaspberryPi() {
  return <Icon component={RaspberryPiIcon} aria-hidden="true" />;
}

function Vue() {
  return <Icon component={VueIcon} aria-hidden="true" />;
}

function Redis() {
  return <Icon component={RedisIcon} aria-hidden="true" />;
}

function Flask() {
  return <Icon component={FlaskIcon} aria-hidden="true" />;
}

function AntDesign() {
  return <Icon component={AntDesignIcon} aria-hidden="true" />;
}

function Nvidia() {
  return <Icon component={NvidiaIcon} aria-hidden="true" />;
}

function Intel() {
  return <Icon component={IntelIcon} aria-hidden="true" />;
}

function Zigbee() {
  return <Icon component={ZigbeeIcon} aria-hidden="true" />;
}

function AltiumDesigner() {
  return <Icon component={AltiumDesignerIcon} aria-hidden="true" />;
}

function TypeScript() {
  return <Icon component={TypeScriptIcon} aria-hidden="true" />;
}

function OpenCV() {
  return <Icon component={OpenCVIcon} aria-hidden="true" />;
}

function Xilinx() {
  return <Icon component={XilinxIcon} aria-hidden="true" />;
}

function Dna() {
  return <Icon component={DnaIcon} aria-hidden="true" />;
}

function CircuitBoard() {
  return <Icon component={CircuitBoardIcon} aria-hidden="true" />;
}

function Anthropic() {
  return <Icon component={AnthropicIcon} aria-hidden="true" />;
}

function OpenAI() {
  return <Icon component={OpenAIIcon} aria-hidden="true" />;
}

function GoogleGemini() {
  return <Icon component={GoogleGeminiIcon} aria-hidden="true" />;
}

function VisualBasic() {
  return <Icon component={VisualBasicIcon} aria-hidden="true" />;
}

function Users() {
  return <Icon component={UsersIcon} aria-hidden="true" />;
}

function CodeXml() {
  return <Icon component={CodeXmlIcon} aria-hidden="true" />;
}

function Box3d() {
  return <Icon component={Box3dIcon} aria-hidden="true" />;
}

function Factory() {
  return <Icon component={FactoryIcon} aria-hidden="true" />;
}

function Brain() {
  return <Icon component={BrainIcon} aria-hidden="true" />;
}

function Sparkles() {
  return <Icon component={SparklesIcon} aria-hidden="true" />;
}

const lookup = {
  angular: <Angular />,
  arduino: <Arduino />,
  cplusplus: <CPlusPlus />,
  csharp: <CSharp />,
  git: <Git />,
  graduatecap: <GraduateCap />,
  java: <Java />,
  linux: <Linux />,
  menu: <Menu />,
  microchip: <Microchip />,
  microsoft: <Microsoft />,
  nodejs: <NodeJS />,
  python: <Python />,
  react: <React />,
  robot: <Robot />,
  ros: <ROS />,
  sketch: <Sketch />,
  unity: <Unity />,
  javascript: <Javascript />,
  keras: <Keras />,
  mongodb: <MongoDB />,
  overleaf: <Overleaf />,
  project: <Project />,
  matlab: <Matlab />,
  atlassian: <Atlassian />,
  autodesk: <Autodesk />,
  c: <C />,
  warning: <WarningOutlined />,
  experiment: <ExperimentFilled />,
  star: <StarFilled />,
  tool: <ToolFilled />,
  github: <GithubFilled />,
  mail: <MailOutlined />,
  linkedin: <LinkedinFilled />,
  twitter: <TwitterX />,      // Thanks Elon
  twitterBird: <TwitterBird />,
  twitterX: <TwitterX />,
  bluesky: <Bluesky />,
  caret: <CaretRightOutlined />,
  caretright: <CaretRightOutlined />,
  question: <QuestionOutlined />,
  downcircle: <DownCircleOutlined />,
  upcircle: <UpCircleOutlined />,
  download: <DownloadOutlined />,
  location: <EnvironmentFilled />,
  gear: <Gear />,
  labview: <Labview />,
  usb: <USB />,
  okos: <OkosPolip />,
  docker: <Docker />,
  raspberrypi: <RaspberryPi />,
  vue: <Vue />,
  redis: <Redis />,
  flask: <Flask />,
  antdesign: <AntDesign />,
  nvidia: <Nvidia />,
  intel: <Intel />,
  zigbee: <Zigbee />,
  altiumdesigner: <AltiumDesigner />,
  typescript: <TypeScript />,
  opencv: <OpenCV />,
  xilinx: <Xilinx />,
  dna: <Dna />,
  circuitboard: <CircuitBoard />,
  anthropic: <Anthropic />,
  openai: <OpenAI />,
  googlegemini: <GoogleGemini />,
  visualbasic: <VisualBasic />,
  users: <Users />,
  codexml: <CodeXml />,
  box3d: <Box3d />,
  factory: <Factory />,
  brain: <Brain />,
  sparkles: <Sparkles />
};

const handler = {
  get: function (target, name) {
    if (Object.keys(target).includes(name.toLowerCase())) {
      return target[name];
    } else {
      return <WarningOutlined />;
    }
  }
};

const IconLookupFromName = new Proxy(lookup, handler);

export {
  // Lookup Handler
  IconLookupFromName,

  // Custom Icons
  Angular,
  Arduino,
  CPlusPlus,
  CSharp,
  Git,
  GraduateCap,
  Java,
  Linux,
  Menu,
  Microchip,
  Microsoft,
  NodeJS,
  Python,
  React,
  Robot,
  ROS,
  Sketch,
  Unity,
  Javascript,
  Keras,
  MongoDB,
  Overleaf,
  Project,
  Matlab,
  Atlassian,
  Autodesk,
  C,
  Gear,
  Labview,
  TwitterX,
  Twitter,
  Bluesky,
  USB,
  OkosPolip,
  Docker,
  RaspberryPi,
  Vue,
  Redis,
  Flask,
  AntDesign,
  Nvidia,
  Intel,
  Zigbee,
  AltiumDesigner,
  TypeScript,
  OpenCV,
  Xilinx,
  Dna,
  CircuitBoard,
  Anthropic,
  OpenAI,
  GoogleGemini,
  VisualBasic,
  Users,
  CodeXml,
  Box3d,
  Factory,
  Brain,
  Sparkles,

  // Antd Icons
  WarningOutlined,
  ToolFilled,
  ExperimentFilled,
  StarFilled,
  GithubFilled,
  MailOutlined,
  LinkedinFilled,
  TwitterBird,
  CaretRightOutlined,
  QuestionOutlined,
  DownCircleOutlined,
  UpCircleOutlined,
  DownloadOutlined,
  EnvironmentFilled,
  SettingOutlined
};
