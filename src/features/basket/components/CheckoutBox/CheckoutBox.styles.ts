import {StyleSheet} from 'react-native';
import {CustomTheme} from '../../../../theme/themes';
import {commonStyles} from '../../../../theme/commonStyles';

export const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    amountBox: {
      ...commonStyles(theme).rowCenter,
      columnGap: theme.size.lg,
      overflow: 'hidden',
      flexWrap: 'nowrap',
    },
    boxItem: {
      padding: theme.size.xs,
      flexWrap: 'nowrap',
      alignSelf: 'flex-start',
      justifyContent: 'center',
      rowGap: theme.size.xxs,
    },
    priceTitle: {
      fontSize: theme.size.base,
      fontWeight: theme.fonts.heavy.fontWeight,
      fontStyle: 'italic',
      color: theme.colors.primary,
    },
    price: {
      fontSize: theme.size.lg,
      fontWeight: theme.fonts.heavy.fontWeight,
      color: theme.colors.text,
    },
    checkoutButton: {
      flex: 1,
      alignSelf: 'stretch',
      borderRadius: theme.size.xs,
      backgroundColor: theme.colors.card,
      borderColor: theme.colors.border,
    },
    checkoutButtonText: {
      fontSize: theme.size.lg,
    },
  });
