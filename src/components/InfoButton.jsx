import React, { useState, useContext } from "react";
import { WidthContext } from "../contexts";
import { BP_MODAL_SIZING } from "../breakpoints";
import { Button, Tooltip, Modal } from "antd";
import { QuestionOutlined } from "./IconManager";

const InfoButton = (props) => {
  const { style, children, tooltipProps, title } = props;

  const [visible, setVisible] = useState(false);

  const width = useContext(WidthContext);
  const modalWidth = width > BP_MODAL_SIZING ? 1000 : width * 0.9;

  return (
    <div style={style}>
      <Tooltip {...tooltipProps}>
        <Button
          type="primary"
          shape="circle"
          icon={<QuestionOutlined />}
          onClick={() => {
            setVisible(true);
          }}
        />
      </Tooltip>

      <Modal
        title={title}
        centered
        open={visible}
        width={modalWidth}
        onOk={() => {
          setVisible(false);
        }}
        onCancel={() => {
          setVisible(false);
        }}
        footer={null}>
        {children}
      </Modal>
    </div>
  );
};

export default InfoButton;
