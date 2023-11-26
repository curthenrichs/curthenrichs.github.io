import React from "react";
import { Button } from "antd";

const PrimaryButton = (props) => {
    const { link, description, text, callback } = props;

    let btnProps = {
      type: "primary",
      shape: "round",
      size: "large"
    };

    if (link) {
      btnProps = {
        ...btnProps,
        href: link,
        target: "_blank" ,
        rel: "noopener noreferrer"
      };
    } 
    
    if (callback) {
      btnProps = {
        ...btnProps,
        onClick: () => { if (callback) callback(); }
      }; 
    }
    
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>
        {(description) && (<h3><i>{description}</i></h3>)}
        
        <Button {...btnProps}>{text}</Button>
        
      </div>
    );
  };

  export default PrimaryButton;