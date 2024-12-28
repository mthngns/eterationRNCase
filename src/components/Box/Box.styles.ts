import {StyleSheet} from 'react-native';
import {CustomTheme} from '../../theme/themes';

export const styles = (theme: CustomTheme) =>
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
