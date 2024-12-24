import {Theme} from '@react-navigation/native';

export type ThemeContextType = {
  theme: Theme;
  isDarkTheme: boolean;
  toggleTheme: () => void;
};
