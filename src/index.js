import React from 'react';
import ReactDOM from 'react-dom';
import ThemeContextWrapper from './ThemeContext';

// import the component that uses the provider (not the provider itself)

import App from './App';

ReactDOM.render(
  <ThemeContextWrapper>
    <App />
  </ThemeContextWrapper>,
  document.getElementById('root')
);
