import {StyleSheet} from 'react-native';
import {CustomTheme} from '../../../../theme/themes';
import {commonStyles} from '../../../../theme/commonStyles';

export const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    cardContainer: {
      flex: 1,
      backgroundColor: theme.colors.card,
      borderRadius: theme.size.xs,
      borderWidth: theme.size.borderSm,
      borderColor: theme.colors.border,
      overflow: 'hidden',
    },
    touchableArea: {
      flex: 1,
      overflow: 'hidden',
    },
    productImage: {
      width: '100%',
      height: 120,
    },
    infoContainer: {
      flex: 1,
      justifyContent: 'space-between',
      padding: theme.size.xs,
      rowGap: theme.size.xs,
    },
    productName: {
      fontSize: theme.size.md,
      fontWeight: theme.fonts.bold.fontWeight,
      color: theme.colors.text,
    },
    productPrice: {
      fontSize: theme.size.md,
      color: theme.colors.primary,
      marginTop: theme.size.xs,
      fontWeight: theme.fonts.heavy.fontWeight,
    },
    buttonContainer: {
      ...commonStyles(theme).rowCenter,
      padding: theme.size.xs,
      justifyContent: 'space-between',
      columnGap: theme.size.sm,
    },
    button: {
      flex: 1,
      padding: theme.size.xs,
      borderRadius: theme.size.xs,
    },
    buttonText: {
      fontSize: theme.size.base,
    },
  });
