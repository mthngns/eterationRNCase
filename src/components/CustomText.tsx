import React, {ReactElement} from 'react';
import {Text, TextProps} from 'react-native';
import {useThemeContext} from '../theme/themeContext';

interface CustomTextProps extends TextProps {
  children: React.ReactNode;
}

const CustomText: React.FC<CustomTextProps> = ({
  children,
  style,
  ...props
}): ReactElement => {
  const {theme} = useThemeContext();

  return (
    <Text style={[{color: theme.colors.text}, style]} {...props}>
      {children}
    </Text>
  );
};

export default CustomText;
