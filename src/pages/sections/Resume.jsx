import React, { Fragment, useContext } from 'react';

import { Resumes }  from '../../content/resumes';
import { HeightContext, WidthContext } from '../../contexts';

import { Typography } from 'antd';
const { Title } = Typography;


const SectionResume = (props) => {

  const { title, id } = props;
  const height = useContext(HeightContext);
  const width = useContext(WidthContext);

  const resumeHeight = 0.8 * height;
  const minHeightStyle = (width > height) ? `${resumeHeight}px`: '60vh';

  return (
    <Fragment>
      <Title>{title}</Title>

      <div style={{ textAlign: 'center'}}>
        <object
          data={Resumes[id].src}
          type="application/pdf"
          style={{minHeight: minHeightStyle, width: '90%' }}
        >
          <p>
          Your web browser doesn't have a PDF plugin.
          </p>
          <a href={Resumes[id].src}>
          Click here to download the PDF to your device.
          </a>

        </object>
      </div>

    </Fragment>
  );
};


export default SectionResume;
