import React, { useState } from 'react';

import { Sketch as SketchIcon } from '../content/customIcons';
import { Modal, Button } from 'antd';

const InDevelopmentModal = () => {

  const [isModalVisible, setIsModalVisible] = useState(true);

  const handleClose = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      title="Under Development"
      centered
      visible={isModalVisible}
      onOk={handleClose}
      onCancel={handleClose}
      footer={[<Button key="okay" type="primary" onClick={handleClose}>Okay</Button>]}
    >
      <div style={{textAlign: "center"}}>
        <div style={{fontSize: "100px"}}>
          <SketchIcon />
        </div>
        <p>Website is under development - content is not final.</p>
      </div>
    </Modal>
  );
}


export default InDevelopmentModal;
