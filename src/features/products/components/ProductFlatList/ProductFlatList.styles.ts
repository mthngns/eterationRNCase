import {StyleSheet} from 'react-native';
import {CustomTheme} from '../../../../theme/themes';

export const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    listContainer: {
      flex: 1,
    },
    contentContainer: {
      paddingBottom: theme.size.lg,
      rowGap: theme.size.md,
    },
    columnWrap: {
      justifyContent: 'space-between',
    },
    footer: {
      height: 48,
    },
    indicator: {
      marginVertical: theme.size.xl,
      paddingBottom: theme.size.xxl,
    },
  });
