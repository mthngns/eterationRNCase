import {StyleSheet} from 'react-native';
import {CustomTheme} from '../../../../theme/themes';

export const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    content: {
      flex: 1,
      rowGap: theme.size.md,
    },
    listContainer: {
      borderWidth: theme.size.borderSm,
      borderColor: theme.colors.border,
      borderRadius: theme.size.sm,
      backgroundColor: theme.colors.card,
    },
  });
