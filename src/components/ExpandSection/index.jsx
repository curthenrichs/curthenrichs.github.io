import React, { useState, useContext } from 'react';

import InfoButton from '../../../components/InfoButton';

import data from '../../../content/skills';
import { WidthContext } from '../../../contexts';

import './index.css';

import { IconLookupFromName } from '../../../content/customIcons';
import { DownCircleOutlined, UpCircleOutlined } from '@ant-design/icons';
import { Row, Col, Typography, Progress, Button, Tooltip } from 'antd';
const { Text, Title } = Typography;


const ExpandButton = (props) => {

    const { type, callback, visible } = props;

    const shouldExpand = type == 'expand'
    const icon = (shouldExpand) ? <DownCircleOutlined /> : <UpCircleOutlined />;
    const text = (shouldExpand) ? "Expand" : "Collapse";

    let content = null;
    if (visible) {
        content = (
            <Tooltip title={text}>
                <Button type="primary" shape="round" icon={icon} size="large" onClick={() => callback(shouldExpand)}/>
            </Tooltip>
        );
    }

    return content;
};

const ExpandSection = (props) => {

    const [expand, setExpand] = useState(false);
    const { shouldCollapse, children } = props;

    return (
      <React.Fragment>

        <div className={`${ (shouldCollapse && !expand) ? 'fade-out' : '' }`}>

        </div>
        {children}
  
        {shouldCollapse ? <br /> : null}
  
        <ExpandButton visible={shouldCollapse} type={expand ? 'collapse' : 'expand'} callback={setExpand} />
  
      </React.Fragment>
    );
  };
  
  
  export default ExpandSection;
  