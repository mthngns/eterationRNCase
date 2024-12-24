if (__DEV__) {
  require('./ReactotronConfig');
}
import './gesture-handler';
import React from 'react';
import Navigation from './src/navigation/Navigation';
import {ThemeProvider} from './src/theme/themeContext';
import {ReduxProvider} from './src/redux/provider';

const App = () => {
  return (
    <ThemeProvider>
      <ReduxProvider>
        <Navigation />
      </ReduxProvider>
    </ThemeProvider>
  );
};

export default App;
