import Icon from "@ant-design/icons";
import { WarningOutlined } from "@ant-design/icons";
import { ReactComponent as AngularIcon } from "../icons/angular.svg";
import { ReactComponent as ArduinoIcon } from "../icons/arduino.svg";
import { ReactComponent as CPPIcon } from "../icons/cplusplus.svg";
import { ReactComponent as CSharpIcon } from "../icons/csharp.svg";
import { ReactComponent as GitIcon } from "../icons/git.svg";
import { ReactComponent as GraduateCapIcon } from "../icons/graduation-cap-solid.svg";
import { ReactComponent as JavaIcon } from "../icons/java.svg";
import { ReactComponent as LinuxIcon } from "../icons/linux.svg";
import { ReactComponent as RobotIcon } from "../icons/mechanical-arm.svg";
import { ReactComponent as MicrochipIcon } from "../icons/microchip-solid.svg";
import { ReactComponent as MenuIcon } from "../icons/menu.svg";
import { ReactComponent as MicrosoftIcon } from "../icons/microsoft.svg";
import { ReactComponent as NodeJSIcon } from "../icons/node-dot-js.svg";
import { ReactComponent as PythonIcon } from "../icons/python.svg";
import { ReactComponent as ReactIcon } from "../icons/react.svg";
import { ReactComponent as ROSIcon } from "../icons/ros.svg";
import { ReactComponent as SketchIcon } from "../icons/sketch.svg";
import { ReactComponent as UnityIcon } from "../icons/unity.svg";
import { ReactComponent as JavascriptIcon } from "../icons/javascript.svg";
import { ReactComponent as KerasIcon } from "../icons/keras.svg";
import { ReactComponent as MongoDBIcon } from "../icons/mongodb.svg";
import { ReactComponent as OverleafIcon } from "../icons/overleaf.svg";
import { ReactComponent as ProjectIcon } from "../icons/project.svg";
import { ReactComponent as MatlabIcon } from "../icons/matlab.svg";
import { ReactComponent as AtlassianIcon } from "../icons/atlassian.svg";
import { ReactComponent as AutodeskIcon } from "../icons/autodesk.svg";
import { ReactComponent as CIcon } from "../icons/c.svg";


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
  "c": <C />
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
  IconLookupFromName
};
