import {StyleSheet} from 'react-native';
import {CustomTheme} from '../../../../theme/themes';
import {commonStyles} from '../../../../theme/commonStyles';

export const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    container: {
      ...commonStyles(theme).rowCenter,
      borderWidth: theme.size.borderSm,
      borderRadius: theme.size.xxl,
      overflow: 'hidden',
      paddingLeft: theme.size.sm,
      columnGap: theme.size.xs,
      backgroundColor: theme.colors.card,
    },
    icon: {
      color: theme.colors.secondaryText,
    },
    input: {
      flex: 1,
      fontSize: theme.size.base,
      color: theme.colors.text,
      height: 40,
    },
  });
