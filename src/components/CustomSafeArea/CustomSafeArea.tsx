import React from 'react';
import {View, ViewProps} from 'react-native';
import {styles} from './CustomSafeArea.styles';
import {useThemeContext} from '../../theme/themeContext';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface CustomSafeAreaProps extends ViewProps {
  children: React.ReactNode;
}

export const CustomSafeArea: React.FC<CustomSafeAreaProps> = ({
  children,
  style,
  ...restProps
}) => {
  const {theme} = useThemeContext();
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles(theme).container,
        style,
        {paddingTop: insets.top, paddingBottom: theme.size.md},
      ]}
      {...restProps}>
      {children}
    </View>
  );
};
