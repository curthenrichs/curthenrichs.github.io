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
        >
          <p>
          Your web browser doesn't have a PDF plugin.
          <a href={Resumes[id].src}>Click here to
          download the PDF to your device.</a>
          </p>
        </object>
      </div>

    </Fragment>
  );
};


export default SectionResume;
