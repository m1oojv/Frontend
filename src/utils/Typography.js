import React from "react";
import { Typography } from "@mui/material";

import theme from "./Theme.js";

function Text({
  // weight and style
  // weight=2, italic=false,
  bold = false,
  fontSize = "normalFS",
  ls = "normalLS",
  lh = "normalLH",
  squish = false,
  // alignment
  left = false,
  center = false,
  right = false,
  justify = false,
  // color and decoration
  transparent = false,
  color = "text.primary",
  secondary = false,
  underline = false,
  // font, others
  font = "default",
  sx = {},
  ...props
}) {
  // weight
  if (font === "default") {
    font = theme.typography.defaultFont.fontFamily;
  }
  if (bold) {
    font = font.replace("Regular", "Bold");
  }

  // alignment
  if (left) {
    sx["textAlign"] = "left";
  }
  if (center) {
    sx["textAlign"] = "center";
  }
  if (right) {
    sx["textAlign"] = "right";
  }
  if (justify) {
    sx["textAlign"] = "justify";
  }

  // size
  sx["fontSize"] = theme.typography[fontSize];
  // letter spacing
  sx["letterSpacing"] = theme.typography[ls];
  // line height
  sx["lineHeight"] = theme.typography[lh];
  // squish
  if (squish) {
    sx["transform"] = "scaleY(0.85)";
  }

  // color
  if (transparent) {
    sx["color"] = "transparent";
  } else if (secondary) {
    sx["color"] = "text.secondary";
  } else {
    sx["color"] = color;
  }

  // decoration
  if (underline) {
    sx["textDecoration"] = "underline";
  } else {
    sx["textDecoration"] = "none";
  }

  return <FontText fontFamily={font} sx={sx} {...props}></FontText>;
}

function FontText({
  fontFamily,
  sx = {},
  paragraph = true,
  children,
  ...props
}) {
  return (
    <Typography
      sx={{
        fontFamily: fontFamily,
        whiteSpace: paragraph ? "pre-line" : null,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}

function Paragraph({ sx = {}, children, ...props }) {
  return (
    <pre>
      <Text
        sx={{
          whiteSpace: "pre-line",
          ...sx,
        }}
        {...props}
      >
        {children}
      </Text>
    </pre>
  );
}

export { Text, FontText, Paragraph };
