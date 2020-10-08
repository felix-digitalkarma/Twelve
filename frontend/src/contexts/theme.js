import React from "react";
import { ThemeProvider } from "styled-components";

// define store initial state
export const theme = {
  color: {
    primary: "#2a52BE", // purple represents colors of brand
    primary_variant: "#10A5F5", // lighter or darker shades of brand
    secondary: "#00FFFF", // teal represents accent colors of brand
    secondary_variant: "#00DBFF", // darker shades of brand
    surface: "#FFFFFF", // sheets - cards, backgrounds
    background: "#FFFFFF", // background of app
    error: "#B00020", // for errors and warnings
    on: {
      primary: "#FFFFFF", // white text against primary color
      secondary: "#FFFFFF", // white text against secondary color
      surface: "#000000", // black text on white surface
      background: "#000000", // black text on white background
      error: "#FFFFFF", // white text on red error background
    },
  },
  mobile: "max-width: 768px",
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
