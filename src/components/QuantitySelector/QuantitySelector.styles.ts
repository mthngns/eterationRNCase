import {StyleSheet} from 'react-native';
import {CustomTheme} from '../../theme/themes';
import {commonStyles} from '../../theme/commonStyles';

export const styles = (theme: CustomTheme) =>
  StyleSheet.create({
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
  });
