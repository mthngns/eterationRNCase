if (__DEV__) {
  require('./ReactotronConfig');
}

import './gesture-handler';
import React from 'react';
import Navigation from './src/navigation/Navigation';

function App(): React.JSX.Element {
  return <Navigation />;
}

export default App;
