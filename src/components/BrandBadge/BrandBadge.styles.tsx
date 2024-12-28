import {StyleSheet} from 'react-native';
import {CustomTheme} from '../../theme/themes';
import {commonStyles} from '../../theme/commonStyles';

export const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    badgeBox: {
      ...commonStyles(theme).rowCenter,
      columnGap: theme.size.xxs,
      overflow: 'hidden',
      alignItems: 'center',
    },
    brandIcon: {
      width: theme.size.lg,
      height: theme.size.lg,
      tintColor: theme.colors.secondaryText,
      alignSelf: 'flex-start',
    },
    productBrand: {
      flex: 1,
      fontSize: theme.size.base,
      color: theme.colors.secondaryText,
      fontWeight: theme.fonts.heavy.fontWeight,
    },
  });
