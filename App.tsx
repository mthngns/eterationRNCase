import React from 'react';
import Navigation from './src/navigation/Navigation';
import {ThemeProvider} from './src/theme/themeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
