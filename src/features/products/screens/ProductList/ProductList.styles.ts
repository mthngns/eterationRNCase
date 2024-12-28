import {StyleSheet} from 'react-native';
import {CustomTheme} from '../../../../theme/themes';
import {commonStyles} from '../../../../theme/commonStyles';

export const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: theme.size.xs,
      rowGap: theme.size.md,
    },
    filterMenuButton: {
      ...commonStyles(theme).center,
      padding: theme.size.xs,
    },
    filterMenuIcon: {
      marginHorizontal: theme.size.xxs,
      color: theme.colors.primary,
    },
  });
