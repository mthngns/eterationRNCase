import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './Tabs/TabNavigation';
import {useThemeContext} from '../theme/themeContext';
import {StatusBar} from 'react-native';
import {useInitializeFilters} from '../hooks/initializeFilters';

const Navigation = () => {
  const {theme, isDarkTheme} = useThemeContext();
  useInitializeFilters();
  return (
    <NavigationContainer theme={theme}>
      <StatusBar
        barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <TabNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
