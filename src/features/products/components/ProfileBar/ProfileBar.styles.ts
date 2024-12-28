import {StyleSheet} from 'react-native';
import {CustomTheme} from '../../../../theme/themes';
import {commonStyles} from '../../../../theme/commonStyles';

export const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    container: {
      ...commonStyles(theme).rowCenter,
      justifyContent: 'space-between',
    },
    text: {
      fontSize: theme.size.xl,
      fontWeight: theme.fonts.heavy.fontWeight,
      letterSpacing: 0.3,
      color: theme.colors.text,
    },
    iconContainer: {
      padding: theme.size.xxs,
      borderRadius: theme.size.xxl,
      backgroundColor: theme.colors.primary,
    },
  });
