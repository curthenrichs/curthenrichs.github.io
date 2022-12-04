import React, { useEffect } from "react";
import contactData from "../content/contact";


const ResumePage = () => {

    useEffect(() => {
        window.open(contactData.resume.link, "_self");
    });

    return (<div></div>);
};


export default ResumePage;