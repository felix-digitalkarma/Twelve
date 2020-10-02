import React from 'react';

// define store initial state
export const intitialState = {
  isLightTheme: true,
  dark: {
    color: {
      primary: '#222222',  // dark
      primary_variant: '#5b358d',  // darker purple
      // secondary: 'rgb(24,202,230)', // tron blue
      secondary: '#18cae6',
      secondary_variant: '#018786', // darker teal
      surface: '#222222', // sheets - cards, backgrounds
      background: '#222222',  // window background of app
      error: "#B00020", // for errors and warnings
      on: {
        primary: "#FFFFFF",
        secondary: '#000000',
        background: '#FFFFFF',
        surface: "#FFFFFF",
        error: "#FFFFFF",
      }
    },
    mobile: 'max-width: 768px',
  },
  light: {
    color: {
      primary: '#222222',  // purple represents colors of brand
      primary_variant: '#5b358d', // lighter or darker shades of brand
      secondary: '#18cae6', // teal represents accent colors of brand
      secondary_variant: '#018786', // darker shades of brand
      surface: '#FFFFFF', // sheets - cards, backgrounds
      background: '#FFFFFF',  // background of app
      error: "#B00020", // for errors and warnings
      on: {
        primary: "#FFFFFF", // white text against primary color
        secondary: '#FFFFFF', // white text against secondary color
        surface: "#000000",  // black text on white surface
        background: '#000000', // black text on white background
        error: "#FFFFFF",  // white text on red error background
      }
    },
    mobile: 'max-width: 768px',
  }
};

// define actions to mutate
// toggleTheme: !isLightTheme


// create Store 

// useHook or Subscriber/Consumer approach

export const ThemeContext = React.createContext(intitialState);