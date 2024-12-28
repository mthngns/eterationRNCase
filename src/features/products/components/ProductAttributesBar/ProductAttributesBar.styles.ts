import {StyleSheet} from 'react-native';
import {CustomTheme} from '../../../../theme/themes';
import {commonStyles} from '../../../../theme/commonStyles';

export const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    infoBox: {
      ...commonStyles(theme).rowCenter,
      columnGap: theme.size.lg,
      overflow: 'hidden',
      flexWrap: 'nowrap',
      padding: theme.size.sm,
    },
    brandContainer: {
      ...commonStyles(theme).rowCenter,
      columnGap: theme.size.xs,
    },
    brandIcon: {
      width: theme.size.xxl,
      height: theme.size.xxl,
      tintColor: theme.colors.primary,
    },
    boxItem: {
      flexGrow: theme.size.xxs,
      flex: 1,
      flexWrap: 'nowrap',
      alignSelf: 'stretch',
      justifyContent: 'center',
      rowGap: theme.size.xxs,
    },
    title: {
      fontSize: theme.size.base,
      fontWeight: theme.fonts.bold.fontWeight,
      color: theme.colors.text,
    },
    badgeTitle: {
      fontSize: theme.size.sm,
      fontWeight: theme.fonts.heavy.fontWeight,
      fontStyle: 'italic',
      color: theme.colors.primary,
    },
  });
