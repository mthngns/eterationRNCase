import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {CustomTheme} from '../theme/themes';
import {commonStyles} from '../theme/commonStyles';
import {useThemeContext} from '../theme/themeContext';

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

const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    inlineButton: {
      padding: theme.size.sm,
      borderRadius: theme.size.xxl,
      borderWidth: theme.size.borderSm,
      ...commonStyles(theme).center,
      backgroundColor: theme.colors.primary,
      borderColor: theme.colors.border,
    },
    outlineButton: {
      padding: theme.size.sm,
      borderRadius: theme.size.xxl,
      borderWidth: theme.size.borderSm,
      ...commonStyles(theme).center,
      borderColor: theme.colors.primary,
    },
    inlineButtonText: {
      fontWeight: theme.fonts.heavy.fontWeight,
      fontSize: theme.size.base,
      color: theme.colors.lightText,
    },
    outlineButtonText: {
      fontWeight: theme.fonts.heavy.fontWeight,
      fontSize: theme.size.base,
      color: theme.colors.primary,
    },
  });

export default ThemedButton;
