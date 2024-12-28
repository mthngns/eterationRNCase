import {StyleSheet} from 'react-native';
import {CustomTheme} from '../../../../theme/themes';
import {commonStyles} from '../../../../theme/commonStyles';

export const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    image: {
      width: '100%',
      height: 150,
      borderWidth: theme.size.borderSm,
      borderColor: theme.colors.border,
      borderRadius: theme.size.sm,
    },
    descriptionBox: {
      borderWidth: theme.size.borderSm,
      borderColor: theme.colors.border,
      borderRadius: theme.size.sm,
      backgroundColor: theme.colors.card,
      padding: theme.size.md,
    },
    descText: {
      fontSize: theme.size.base,
      color: theme.colors.secondaryText,
      marginTop: theme.size.xs,
      marginBottom: theme.size.huge,
    },
    row: {
      ...commonStyles(theme).rowCenter,
      columnGap: theme.size.md,
      flexWrap: 'nowrap',
      overflow: 'hidden',
      alignItems: 'stretch',
    },
    actionBox: {
      ...commonStyles(theme).rowCenter,
      columnGap: theme.size.md,
      flexWrap: 'nowrap',
      overflow: 'hidden',
      justifyContent: 'flex-end',
      flexGrow: 1,
    },
    price: {
      fontSize: theme.size.lg,
      fontWeight: theme.fonts.heavy.fontWeight,
      color: theme.colors.primary,
    },
  });
