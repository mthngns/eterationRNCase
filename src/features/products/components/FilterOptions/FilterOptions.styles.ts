import {StyleSheet} from 'react-native';
import {CustomTheme} from '../../../../theme/themes';
import {commonStyles} from '../../../../theme/commonStyles';

export const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
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
    selectedText: {
      fontSize: theme.size.sm,
      fontWeight: theme.fonts.bold.fontWeight,
      color: theme.colors.primary,
    },
    unSelectedText: {
      fontSize: theme.size.sm,
      color: theme.colors.secondaryText,
    },
    optionContainer: {
      ...commonStyles(theme).rowCenter,
      paddingVertical: theme.size.xs,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
  });
