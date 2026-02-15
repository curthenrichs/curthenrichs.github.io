import React, { useContext } from "react";
import { WidthContext } from "../contexts";
import { BP_MODAL_SIZING } from "../breakpoints";
import { Modal } from "antd";

const ItemModalTemplate = (props) => {
  const { children, open, closeCallback, title } = props;

  const width = useContext(WidthContext);
  const modalWidth = width > BP_MODAL_SIZING ? 1000 : width * 0.9;

  return (
    <Modal
      title={title}
      centered
      open={open}
      width={modalWidth}
      onOk={closeCallback}
      onCancel={closeCallback}
      footer={null}
      destroyOnClose
    >
      {children}
    </Modal>
  );
};

export default ItemModalTemplate;
