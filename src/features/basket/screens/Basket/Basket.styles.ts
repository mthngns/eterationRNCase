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
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: theme.size.sm,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    headerTitle: {
      fontSize: theme.size.lg,
      fontWeight: 'bold',
      color: theme.colors.text,
      flex: 1,
      textAlign: 'center',
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
    listContentContainer: {flex: 1},
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
