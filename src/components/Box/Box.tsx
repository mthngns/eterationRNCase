import React from 'react';
import {styles} from './Box.styles';
import {View, ViewProps} from 'react-native';
import {useThemeContext} from '../../theme/themeContext';

interface BoxProps extends ViewProps {
  children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({children, style, ...props}) => {
  const {theme} = useThemeContext();

  return (
    <View style={[styles(theme).box, style]} {...props}>
      {children}
    </View>
  );
};

export default Box;
