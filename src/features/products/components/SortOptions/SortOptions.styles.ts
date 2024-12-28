import {StyleSheet} from 'react-native';
import {CustomTheme} from '../../../../theme/themes';
import {commonStyles} from '../../../../theme/commonStyles';

export const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    container: {
      borderRadius: theme.size.sm,
      borderWidth: theme.size.borderSm,
      borderColor: theme.colors.border,
      overflow: 'hidden',
    },
    listWrapper: {
      borderWidth: theme.size.borderSm,
      borderColor: theme.colors.border,
      backgroundColor: theme.colors.card,
      paddingHorizontal: theme.size.sm,
    },
    headerBox: {
      ...commonStyles(theme).rowCenter,
      justifyContent: 'space-between',
      paddingVertical: theme.size.sm,
      borderBottomWidth: 1,
      borderColor: theme.colors.border,
      backgroundColor: theme.colors.card,
    },
    title: {
      fontSize: theme.size.md,
      fontWeight: 'bold',
      color: theme.colors.text,
    },
    optionContainer: {
      ...commonStyles(theme).rowCenter,
      paddingVertical: theme.size.xs,
      columnGap: theme.size.xs,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    text: {color: theme.colors.secondaryText},
    checkedText: {
      fontWeight: theme.fonts.heavy.fontWeight,
      color: theme.colors.primary,
    },
  });
