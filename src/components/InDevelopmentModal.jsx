import React, { useState } from "react";
import { Modal, Button } from "antd";
import { Sketch as SketchIcon } from "./IconManager";

const InDevelopmentModal = () => {
  const [visible, setVisible] = useState(true);

  return (
    <Modal
      title="Under Development"
      centered
      visible={visible}
      onOk={() => {
        setVisible(false);
      }}
      onCancel={() => {
        setVisible(false);
      }}
      footer={[
        <Button
          key="okay"
          type="primary"
          onClick={() => {
            setVisible(false);
          }}>
          Okay
        </Button>
      ]}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "100px" }}>
          <SketchIcon />
        </div>
        <p>Website is under development - Content is not final.</p>
      </div>
    </Modal>
  );
};

export default InDevelopmentModal;
