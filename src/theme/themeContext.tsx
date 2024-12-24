import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ThemeContextType} from './themeContext.types';
import {CustomDarkTheme, LightTheme} from '../theme/themes';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({children}: {children: ReactNode}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const loadTheme = async () => {
    const savedTheme = await AsyncStorage.getItem('user-theme');
    if (savedTheme === 'dark') {
      setIsDarkTheme(true);
    }
  };

  const toggleTheme = async () => {
    const selectedTheme = !isDarkTheme;
    setIsDarkTheme(selectedTheme);
    await AsyncStorage.setItem('user-theme', selectedTheme ? 'dark' : 'light');
  };

  useEffect(() => {
    loadTheme();
  }, []);

  const theme = isDarkTheme ? CustomDarkTheme : LightTheme;

  return (
    <ThemeContext.Provider value={{theme, isDarkTheme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};
