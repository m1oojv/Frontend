import React from "react";

import { Box } from "@material-ui/core";

function ContentWrapper(props) {
  return (
    <div
      role="wrapper"
      style={{
        background: "#FFF",
        padding: "10px",
        borderRadius: "10px",
        border: "0.5px solid #DFDFDF",
        height: "auto",
      }}
    >
      <Box p={3}>{props.children}</Box>
    </div>
  );
}

export default ContentWrapper;
