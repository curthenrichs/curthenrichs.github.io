import React from 'react';

import { Result } from 'antd';


const NotFoundNoRoutingPage = (props) => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Apologies, but I don't know what you are looking for."
    />
  );
};


export default NotFoundNoRoutingPage;
