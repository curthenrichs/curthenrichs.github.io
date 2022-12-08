import React, { useState } from "react";
import { Button, Tooltip } from "antd";
import "./index.css";

import { DownCircleOutlined, UpCircleOutlined } from "../IconManager";

const ExpandButton = (props) => {
  const { type, callback, visible } = props;

  const shouldExpand = type == "expand";
  const icon = shouldExpand ? <DownCircleOutlined /> : <UpCircleOutlined />;
  const text = shouldExpand ? "Expand" : "Collapse";

  let content = null;
  if (visible) {
    content = (
      <Tooltip title={text}>
        <Button
          type="primary"
          shape="round"
          icon={icon}
          size="large"
          onClick={() => callback(shouldExpand)}
        />
      </Tooltip>
    );
  }

  return content;
};

const ExpandSection = (props) => {
  const [expand, setExpand] = useState(false);
  const { centerButton, insertBreak, style, generator } = props;
  const { shouldCollapse, children } = generator(expand);

  return (
    <div style={centerButton ? { position: "relative" } : {}}>
      <div style={style}>
        {children.map((child, idx) => {
          return React.cloneElement(child, {
            key: idx,
            className: idx + 1 >= children.length && shouldCollapse && !expand ? "fade-out" : ""
          });
        })}
      </div>

      {shouldCollapse && insertBreak ? <br /> : null}

      <div style={centerButton ? { textAlign: "center" } : {}}>
        <ExpandButton
          visible={shouldCollapse}
          type={expand ? "collapse" : "expand"}
          callback={setExpand}
        />
      </div>
    </div>
  );
};

export default ExpandSection;
