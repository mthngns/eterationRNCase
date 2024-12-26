import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LightTheme, DarkTheme, CustomTheme} from './themes';

interface ThemeContextType {
  theme: CustomTheme;
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

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
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    await AsyncStorage.setItem('user-theme', newTheme ? 'dark' : 'light');
  };

  useEffect(() => {
    loadTheme();
  }, []);

  const theme = isDarkTheme ? DarkTheme : LightTheme;

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
