import {StyleSheet} from 'react-native';
import {CustomTheme} from '../../theme/themes';
import {commonStyles} from '../../theme/commonStyles';

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
    image: {
      width: 80,
      height: 80,
      flex: 1,
      borderRadius: theme.size.xxs,
    },
    details: {
      flex: 5,
      rowGap: theme.size.xs,
      justifyContent: 'space-between',
    },
    quantityBox: {
      ...commonStyles(theme).rowCenter,
      overflow: 'hidden',
      flexWrap: 'nowrap',
      alignSelf: 'flex-start',
      marginTop: theme.size.sm,
      columnGap: theme.size.xs,
    },
    quantityText: {
      fontSize: theme.size.md,
      fontWeight: theme.fonts.heavy.fontWeight,
      color: theme.colors.primary,
      padding: theme.size.xxs,
      borderWidth: theme.size.borderSm,
      borderColor: theme.colors.secondaryBackground,
      borderRadius: theme.size.xxs,
      minWidth: theme.size.huge,
      textAlign: 'center',
    },
    iconButton: {
      padding: theme.size.xxs,
      borderWidth: theme.size.borderSm,
      borderColor: theme.colors.secondaryBackground,
      borderRadius: theme.size.xxs,
      overflow: 'hidden',
      alignSelf: 'flex-end',
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
