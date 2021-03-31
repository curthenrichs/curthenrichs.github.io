import React, { useState, useContext } from 'react';

import { WidthContext } from '../contexts';

import { QuestionOutlined } from '@ant-design/icons';
import { Button, Tooltip, Modal } from 'antd';


const InfoButton = (props) => {

  const { style, children } = props;

  const [visible, setVisible] = useState(false);

  const width = useContext(WidthContext);
  const modalWidth = (width > 1111) ? 1000 : width * 0.9;

  return (
    <div style={style}>
      <Tooltip placement="left" title="Curious about these skills?">
        <Button type="primary" shape="circle" icon={<QuestionOutlined />}
          onClick={() => { setVisible(true); }}
        />
      </Tooltip>

      <Modal
        title="Skills Explained"
        centered
        visible={visible}
        width={modalWidth}
        onOk={() => { setVisible(false); }}
        onCancel={() => { setVisible(false); }}
        footer={null}
      >
        {children}
      </Modal>
    </div>
  );
};


export default InfoButton;
