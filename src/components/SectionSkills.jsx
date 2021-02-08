import React from 'react';


import { Row, Col } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

function NameToIcon(name) {

  const val = name.toLowerCase();

  let icon = null;
  switch (val) {
    case 'arduino':
      break;
    case 'atmel':
      break;
    case 'linux':
      break;
    case 'ROS':
      break;
    case 'ROS2':
      break;
    case 'c':
    case 'c++':
    case 'c/c++':
      break;
    case 'python':
      break;
    case 'matlab':
      break;
    case 'unity':
      break;
    case 'c#':
      break;
    case 'hololens':
      break;
    case 'git':
      break;
    case 'node':
    case 'nodejs':
      break;
    case 'react':
      break;
    case 'javascript':
      break;
    case 'java':
      break;

    default:
      break;
  }

  return icon;
}


function SectionSkills(props) {

  return (
    <React.Fragment></React.Fragment>
  );
}

export default SectionSkills;
