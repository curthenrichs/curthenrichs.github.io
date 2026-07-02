import React from "react";

const DocumentContainer = (props) => {
  const { children } = props;

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ maxWidth: "900px", width: "100%" }}>
        {children}
      </div>
    </div>
  );
};

export default DocumentContainer;
