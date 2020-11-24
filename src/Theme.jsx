import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    color1: "red",
    color2: "blue",
  },
  fonts: ["Montserrat", "sans-serif"],
  fontSizes: {
    sm: "",
    m: "",
    l: "",
    xl: "",
  },
  breakPoints: {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
