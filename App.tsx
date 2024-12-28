if (__DEV__) {
  require('./ReactotronConfig');
}
import './gesture-handler';
import React from 'react';
import Navigation from './src/navigation/Navigation';
import {ThemeProvider} from './src/theme/themeContext';
import {ReduxProvider} from './src/redux/provider';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <ThemeProvider>
      <ReduxProvider>
        <GestureHandlerRootView>
          <Navigation />
        </GestureHandlerRootView>
      </ReduxProvider>
    </ThemeProvider>
  );
};

export default App;
