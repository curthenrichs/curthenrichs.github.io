import React, { useContext } from "react";
import { WidthContext } from "../contexts";
import { Modal } from "antd";

const ItemModalTemplate = (props) => {
  const { children, visible, closeCallback, title } = props;

  const width = useContext(WidthContext);
  const modalWidth = width > 1111 ? 1000 : width * 0.9;

  return (
    <Modal
      title={title}
      centered
      open={visible}
      width={modalWidth}
      onOk={closeCallback}
      onCancel={closeCallback}
      footer={null}>
      {children}
    </Modal>
  );
};

export default ItemModalTemplate;
