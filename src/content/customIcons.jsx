import Icon from '@ant-design/icons';
import { WarningOutlined } from '@ant-design/icons';

import { ReactComponent as AngularIcon } from '../icons/angular.svg';
import { ReactComponent as ArduinoIcon } from '../icons/arduino.svg';
import { ReactComponent as CPPIcon } from '../icons/cplusplus.svg';
import { ReactComponent as CSharpIcon } from '../icons/csharp.svg';
import { ReactComponent as GitIcon } from '../icons/git.svg';
import { ReactComponent as GraduateCapIcon } from '../icons/graduation-cap-solid.svg';
import { ReactComponent as JavaIcon } from '../icons/java.svg';
import { ReactComponent as LinuxIcon } from '../icons/linux.svg';
import { ReactComponent as RobotIcon } from '../icons/mechanical-arm.svg';
import { ReactComponent as MicrochipIcon } from '../icons/microchip-solid.svg';
import { ReactComponent as MicrosoftIcon } from '../icons/microsoft.svg';
import { ReactComponent as NodeJSIcon } from '../icons/node-dot-js.svg';
import { ReactComponent as PythonIcon } from '../icons/python.svg';
import { ReactComponent as ReactIcon } from '../icons/react.svg';
import { ReactComponent as ROSIcon } from '../icons/ros.svg';
import { ReactComponent as UnityIcon } from '../icons/unity.svg';

function Angular(props) {
  return (<Icon component={AngularIcon} />);
}

function Arduino(props) {
  return (<Icon component={ArduinoIcon} />);
}

function CPlusPlus(props) {
  return (<Icon component={CPPIcon} />);
}

function CSharp(props) {
  return (<Icon component={CSharpIcon} />);
}

function Git(props) {
  return (<Icon component={GitIcon} />);
}

function GraduateCap(props) {
  return (<Icon component={GraduateCapIcon} />);
}

function Java(props) {
  return (<Icon component={JavaIcon} />);
}

function Linux(props) {
  return (<Icon component={LinuxIcon} />);
}

function Robot(props) {
  return (<Icon component={RobotIcon} />);
}

function Microchip(props) {
  return (<Icon component={MicrochipIcon} />);
}

function Microsoft(props) {
  return (<Icon component={MicrosoftIcon} />);
}

function NodeJS(props) {
  return (<Icon component={NodeJSIcon} />);
}

function Python(props) {
  return (<Icon component={PythonIcon} />);
}

function React(props) {
  return (<Icon component={ReactIcon} />);
}

function ROS(props) {
  return (<Icon component={ROSIcon} />);
}

function Unity(props) {
  return (<Icon component={UnityIcon} />);
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
  "microchip": <Microchip />,
  "microsoft": <Microsoft />,
  "nodejs": <NodeJS />,
  "python": <Python />,
  "react": <React />,
  "robot": <Robot />,
  "ros": <ROS />,
  "unity": <Unity />
};

const handler = {
  get: function(target, name) {
    return target.hasOwnProperty(name) ? target[name] : <WarningOutlined />
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
  Microchip,
  Microsoft,
  NodeJS,
  Python,
  React,
  Robot,
  ROS,
  Unity,

  IconLookupFromName
};
