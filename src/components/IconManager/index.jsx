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

import { 
  WarningOutlined, 
  ToolFilled, 
  ExperimentFilled, 
  StarFilled,
  GithubFilled, 
  MailOutlined, 
  LinkedinFilled, 
  TwitterOutlined,
  CaretRightOutlined,
  QuestionOutlined,
  DownCircleOutlined,
  UpCircleOutlined,
  DownloadOutlined,
  EnvironmentFilled,
  SettingOutlined
} from "@ant-design/icons";


function Angular() {
  return (<Icon component={AngularIcon} />);
}

function Arduino() {
  return (<Icon component={ArduinoIcon} />);
}

function CPlusPlus() {
  return (<Icon component={CPPIcon} />);
}

function CSharp() {
  return (<Icon component={CSharpIcon} />);
}

function Git() {
  return (<Icon component={GitIcon} />);
}

function GraduateCap() {
  return (<Icon component={GraduateCapIcon} />);
}

function Java() {
  return (<Icon component={JavaIcon} />);
}

function Linux() {
  return (<Icon component={LinuxIcon} />);
}

function Robot() {
  return (<Icon component={RobotIcon} />);
}

function Menu() {
  return (<Icon component={MenuIcon} />);
}

function Microchip() {
  return (<Icon component={MicrochipIcon} />);
}

function Microsoft() {
  return (<Icon component={MicrosoftIcon} />);
}

function NodeJS() {
  return (<Icon component={NodeJSIcon} />);
}

function Python() {
  return (<Icon component={PythonIcon} />);
}

function React() {
  return (<Icon component={ReactIcon} />);
}

function ROS() {
  return (<Icon component={ROSIcon} />);
}

function Sketch() {
  return (<Icon component={SketchIcon} />);
}

function Unity() {
  return (<Icon component={UnityIcon} />);
}

function Javascript() {
  return (<Icon component={JavascriptIcon} />);
}

function Keras() {
  return (<Icon component={KerasIcon} />);
}

function MongoDB() {
  return (<Icon component={MongoDBIcon} />);
}

function Overleaf() {
  return (<Icon component={OverleafIcon} />);
}

function Project() {
  return (<Icon component={ProjectIcon} />);
}

function Matlab() {
  return (<Icon component={MatlabIcon} />);
}

function Atlassian() {
  return (<Icon component={AtlassianIcon} />);
}

function Autodesk() {
  return (<Icon component={AutodeskIcon} />);
}

function C() {
  return (<Icon component={CIcon} />);
}

function Gear() {
  return (<SettingOutlined />);
}

function Labview() {
  return (<Icon component={LabviewIcon} />);
}


const lookup = {
  "angular": <Angular />,
  "arduino": <Arduino />,
  "cplusplus": <CPlusPlus />,
  "csharp": <CSharp />,
  "git": <Git />,
  "graduatecap": <GraduateCap />,
  "java": <Java />,
  "linux": <Linux />,
  "menu": <Menu />,
  "microchip": <Microchip />,
  "microsoft": <Microsoft />,
  "nodejs": <NodeJS />,
  "python": <Python />,
  "react": <React />,
  "robot": <Robot />,
  "ros": <ROS />,
  "sketch": <Sketch />,
  "unity": <Unity />,
  "javascript": <Javascript />,
  "keras": <Keras />,
  "mongodb": <MongoDB />,
  "overleaf": <Overleaf />,
  "project": <Project />,
  "matlab": <Matlab />,
  "atlassian": <Atlassian />,
  "autodesk": <Autodesk />,
  "c": <C />,
  "warning": <WarningOutlined />,
  "experiment": <ExperimentFilled />,
  "star": <StarFilled />,
  "tool": <ToolFilled />,
  "github": <GithubFilled />,
  "mail": <MailOutlined />,
  "linkedin": <LinkedinFilled />,
  "twitter": <TwitterOutlined />,
  "caret": <CaretRightOutlined />,
  "caretright": <CaretRightOutlined />,
  "question": <QuestionOutlined />,
  "downcircle": <DownCircleOutlined />,
  "upcircle": <UpCircleOutlined />,
  "download": <DownloadOutlined />,
  "location": <EnvironmentFilled />,
  "gear": <Gear />,
  "labview": <Labview />
};


const handler = {
  get: function(target, name) {
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

  // Antd Icons
  WarningOutlined, 
  ToolFilled, 
  ExperimentFilled, 
  StarFilled,
  GithubFilled, 
  MailOutlined, 
  LinkedinFilled, 
  TwitterOutlined,
  CaretRightOutlined,
  QuestionOutlined,
  DownCircleOutlined,
  UpCircleOutlined,
  DownloadOutlined,
  EnvironmentFilled,
  SettingOutlined
};
