import React, { Fragment } from 'react';

import { Resumes }  from '../../content/resumes';

import { Typography } from 'antd';
const { Title } = Typography;


const SectionResume = (props) => {

  const { title, id } = props;

  return (
    <Fragment>
      <Title>{title}</Title>

      <div style={{ textAlign: 'center'}}>
        <object
          data={Resumes[id].src}
          type="application/pdf"
          style={{minHeight: '100vh', width: '90%' }}
        ></object>
      </div>

    </Fragment>
  );
};


export default SectionResume;
