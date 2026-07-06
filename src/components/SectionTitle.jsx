import React, { Fragment } from "react";
import { Typography } from "antd";

const { Title } = Typography;

const SectionTitle = (props) => {
  const { title, level } = props;

  return (
    <Fragment>
      <Title level={level !== undefined ? level : 2} underline={true}>
        {title}
      </Title>
      <br />
      <br />
    </Fragment>
  );
};

export default SectionTitle;
