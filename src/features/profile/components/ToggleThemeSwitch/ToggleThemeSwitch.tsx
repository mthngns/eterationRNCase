import React from 'react';
import {Switch} from 'react-native';
import {useThemeContext} from '../../../../theme/themeContext';

const ToggleThemeSwitch = () => {
  const {theme, isDarkTheme, toggleTheme} = useThemeContext();
  return (
    <Switch
      thumbColor={theme.colors.primary}
      trackColor={{
        false: theme.colors.border,
        true: theme.colors.border,
      }}
      style={{transform: [{scale: 0.8}]}}
      value={isDarkTheme}
      onValueChange={toggleTheme}
    />
  );
};

export default ToggleThemeSwitch;
