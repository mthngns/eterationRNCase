import {StyleSheet} from 'react-native';
import {CustomTheme} from '../../theme/themes';
import {commonStyles} from '../../theme/commonStyles';

export const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    inlineButton: {
      padding: theme.size.sm,
      borderRadius: theme.size.xxl,
      borderWidth: theme.size.borderSm,
      ...commonStyles(theme).center,
      backgroundColor: theme.colors.primary,
      borderColor: theme.colors.border,
      alignSelf: 'center',
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
