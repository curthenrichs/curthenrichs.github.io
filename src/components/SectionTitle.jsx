import React, { Fragment } from "react";
import { Typography } from "antd";


const { Title } = Typography;


const SectionTitle = (props) => {
    const { title } = props;

    return (
        <Fragment>
            <Title>{title}</Title>
            <br/>
            <br/>
        </Fragment>
    );
};


export default SectionTitle;