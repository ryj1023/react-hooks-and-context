import React, { useState, useReducer, useContext, createContext } from 'react';

export const ThemeContext = createContext();

const ThemeContextWrapper = ({ children }) => {
  // prodiver will pass down any props to children to use with useContext

  return (
    <ThemeContext.Provider
      value={{
        state: 'dark'
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextWrapper;
