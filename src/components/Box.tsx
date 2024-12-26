import React from 'react';
import {View, ViewProps, StyleSheet} from 'react-native';
import {useThemeContext} from '../theme/themeContext';
import {CustomTheme} from '../theme/themes';

interface BoxProps extends ViewProps {
  children?: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({children, style, ...props}) => {
  const {theme} = useThemeContext();

  return (
    <View style={[styles(theme).box, style]} {...props}>
      {children}
    </View>
  );
};

const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    box: {
      borderWidth: theme.size.borderSm,
      borderColor: theme.colors.border,
      borderRadius: theme.size.sm,
      backgroundColor: theme.colors.card,
      padding: theme.size.md,
      rowGap: theme.size.xxl,
    },
  });

export default Box;
