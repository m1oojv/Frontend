import { createTheme } from "@mui/material/styles";

let defaultFontSize = "1.3";
let defaultLetterSpacing = "0.1";

let defaultFont = {
  fontFamily: ["Public Sans", "Arial", "Proxima Nova"].join(","),
  fontSize: defaultFontSize + "rem",
  letterSpacing: defaultLetterSpacing + "rem",
  lineHeight: "1",
};

const theme = createTheme({
  // colors
  palette: {
    primary: {
      main: "#1e7eac", // blue
      contrastText: "#e9eae5", // beige
    },
    secondary: {
      main: "#e9eae5", // beige
      contrastText: "#1e7eac", // blue
    },
    tertiary: {
      main: "#4e9bbf", // beige
      contrastText: "#e9eae5", // blue
    },
    error: {
      main: "#e74c3c", // red
    },
    disabled: {
      main: "#bdc3c7", //grey
    },
    text: {
      primary: "#1e7eac", // blue
      secondary: "#e9eae5", // beige
      disabled: "#bdc3c7", // grey
    },
  },

  // fonts
  typography: {
    defaultFont: {
      ...defaultFont,
    },
    // font types
    bold: {
      fontFamily: ["Public Sans", "Arial", "Proxima Nova"].join(","),
    },
    thin: {
      fontFamily: ["Public Sans", "Arial", "Proxima Nova"].join(","),
    },
    // fontSizes
    huge: {
      fontSize: defaultFontSize * 1.8 + "rem",
    },
    big: {
      fontSize: defaultFontSize * 1.2 + "rem",
    },
    normalFS: {
      fontSize: defaultFont.fontSize,
    },
    small: {
      fontSize: defaultFontSize * 0.8 + "rem",
    },
    // letter spacings
    wide: {
      letterSpacing: defaultLetterSpacing * 1.5 + "rem",
    },
    normalLS: {
      letterSpacing: defaultLetterSpacing + "rem",
    },
    // line heights
    tall: {
      lineHeight: "1.8",
    },
    normalLH: {
      lineHeight: "1.5",
    },
    short: {
      lineHeight: "1",
    },
  },

  // defaults
  components: {
    MuiCssBaseline: {
      "@global": {
        ...defaultFont,
      },
    },
  },
});

export default theme;
