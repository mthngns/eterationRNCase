import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
  Theme,
} from '@react-navigation/native';

export interface CustomTheme extends Theme {
  colors: Theme['colors'] & {
    success: string;
    light: string;
    warning: string;
    error: string;
    info: string;
    lightText: string;
    darkText: string;
    secondaryBackground: string;
    secondaryText: string;
    disabledText: string;
  };
  size: {
    xxs: number;
    xs: number;
    sm: number;
    base: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
    xxxl: number;
    huge: number;
    borderXs: number;
    borderSm: number;
    borderMd: number;
  };
}

export const sizes: CustomTheme['size'] = {
  xxs: 5,
  xs: 8,
  sm: 12,
  base: 14,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
  xxxl: 40,
  huge: 48,
  borderXs: 0.5,
  borderSm: 1,
  borderMd: 4,
};

export const LightTheme: CustomTheme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    primary: '#2563eb',
    background: '#f5f5f5',
    card: '#ffffff',
    text: '#262626',
    notification: '#dc2626',
    secondaryText: '#6b7280',
    disabledText: '#d1d1d1',
    border: '#e5e5e5',
    light: '#f5f5f5',
    success: '#22c55e',
    warning: '#d77d00',
    error: '#ef4444',
    info: '#3b82f6',
    lightText: '#ffffff',
    darkText: '#000000',
    secondaryBackground: '#f5f5f5',
  },
  size: sizes,
};

export const DarkTheme: CustomTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    primary: '#2563eb',
    background: '#0a0a0a',
    card: '#171717',
    text: '#d4d4d4',
    notification: '#b91c1c',
    secondaryText: '#9ca3af',
    disabledText: '#535353',
    border: '#262626',
    light: '#f5f5f5',
    success: '#16a34a',
    warning: '#ca8a04',
    error: '#dc2626',
    info: '#2563eb',
    lightText: '#f1f5f9',
    darkText: '#1e293b',
    secondaryBackground: '#262626',
  },
  size: sizes,
};
