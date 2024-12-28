import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';
import {styles} from './ThemedButton.styles';
import {useThemeContext} from '../../theme/themeContext';

interface ThemedButtonProps extends TouchableOpacityProps {
  title: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  design?: 'inline' | 'outline';
}

const ThemedButton: React.FC<ThemedButtonProps> = ({
  title,
  textStyle,
  style,
  design = 'inline',
  onPress,
  ...props
}) => {
  const {theme} = useThemeContext();

  return (
    <TouchableOpacity
      style={[
        design === 'inline'
          ? styles(theme).inlineButton
          : styles(theme).outlineButton,
        style,
      ]}
      onPress={onPress}
      {...props}>
      <Text
        numberOfLines={1}
        style={[
          design === 'inline'
            ? styles(theme).inlineButtonText
            : styles(theme).outlineButtonText,
          textStyle,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ThemedButton;
