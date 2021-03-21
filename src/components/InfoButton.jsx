import React, { useState } from 'react';

import { Button, Tooltip, Modal } from 'antd';
import { QuestionOutlined } from '@ant-design/icons';


const InfoButton = (props) => {

  const { style, width } = props;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const modalWidth = (width > 1111) ? 1000 : width * 0.9;

  return (
    <div style={style}>
      <Tooltip placement="left" title="Curious about these skills?">
        <Button type="primary" shape="circle" icon={<QuestionOutlined />}
          onClick={() => { setIsModalVisible(true); }}
        />
      </Tooltip>

      <Modal
        title="Skills Explained"
        centered
        visible={isModalVisible}
        width={modalWidth}
        onOk={() => { setIsModalVisible(false); }}
        onCancel={() => { setIsModalVisible(false); }}
        footer={null}
      >
        <p>
          I selected these specific technical skills to be representative of my
          development experiences and to highlight areas I am interested in
          continuing into the future. Obviously, I had to be selective lest the
          list be so long and boring that any reader will just navigate away.
        </p>

        <p>
          As for my rating, the scales should be read as percent. Though I am keeping
          this intentionally vague to suggest the subjective nature of these values. It
          is probably better to do comparison across skills rather than trying to
          determine the exact level. If you are interested in proof of proficiency then
          look at my projects section. Hopefully this gives a more complete perspective
          of my skills.
        </p>

        <p>
          Note: once I find some time I want to implement a coursework section that
          captures all courses I have taken in my college life. This could further
          document my experiences as proof of the ratings given.
        </p>
      </Modal>
    </div>
  );
};


export default InfoButton;
