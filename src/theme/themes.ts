import {DarkTheme, DefaultTheme, Theme} from '@react-navigation/native';

export const LightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#dc2626',
    background: '#f5f5f5',
    card: '#ffffff',
    text: '#262626',
    border: '#e5e5e5',
    notification: '#dc2626',
  },
};

export const CustomDarkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#b91c1c',
    background: '#0a0a0a',
    card: '#171717',
    text: '#d4d4d4',
    border: '#262626',
    notification: '#b91c1c',
  },
};
