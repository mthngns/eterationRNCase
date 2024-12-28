import {StyleSheet} from 'react-native';
import {CustomTheme} from '../../../../theme/themes';
import {commonStyles} from '../../../../theme/commonStyles';

export const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: theme.size.xs,
      rowGap: theme.size.md,
    },
    content: {
      flex: 1,
      rowGap: theme.size.md,
    },
    buttonBox: {
      alignSelf: 'flex-end',
      borderWidth: theme.size.borderSm,
      borderColor: theme.colors.border,
      borderRadius: theme.size.xs,
      backgroundColor: theme.colors.card,
      padding: theme.size.xs,
      columnGap: theme.size.xs,
      ...commonStyles(theme).rowCenter,
    },
    secondaryText: {
      color: theme.colors.secondaryText,
      fontWeight: theme.fonts.heavy.fontWeight,
    },
    listContainer: {
      borderWidth: theme.size.borderSm,
      borderColor: theme.colors.border,
      borderRadius: theme.size.sm,
      backgroundColor: theme.colors.card,
    },
    amountBox: {
      ...commonStyles(theme).rowCenter,
      columnGap: theme.size.lg,
      overflow: 'hidden',
      flexWrap: 'nowrap',
    },
  });
