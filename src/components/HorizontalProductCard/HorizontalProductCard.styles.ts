import {StyleSheet} from 'react-native';
import {CustomTheme} from '../../theme/themes';

export const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    card: {
      flexDirection: 'row',
      paddingHorizontal: theme.size.xs,
      paddingVertical: theme.size.sm,
      borderBottomWidth: theme.size.borderSm,
      borderColor: theme.colors.border,
      backgroundColor: theme.colors.card,
      columnGap: theme.size.sm,
    },
    details: {
      flex: 5,
      rowGap: theme.size.xs,
      justifyContent: 'space-between',
    },
    priceBox: {
      flex: 2,
      alignItems: 'flex-end',
      rowGap: theme.size.sm,
    },
    name: {
      fontSize: theme.size.md,
      fontWeight: theme.fonts.bold.fontWeight,
    },
    price: {
      flex: 1,
      fontSize: theme.size.base,
      color: theme.colors.primary,
      fontWeight: theme.fonts.heavy.fontWeight,
    },
  });
