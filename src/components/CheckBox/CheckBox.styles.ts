import {StyleSheet} from 'react-native';
import {CustomTheme} from '../../theme/themes';
import {commonStyles} from '../../theme/commonStyles';

export const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    checkboxContainer: {
      ...commonStyles(theme).center,
    },
    brandContainer: {
      ...commonStyles(theme).rowCenter,
      paddingVertical: theme.size.xxs,
      columnGap: theme.size.xs,
    },
    ıcon: {
      width: theme.size.xl,
      height: theme.size.xl,
      tintColor: theme.colors.secondaryText,
    },
    checkedIcon: {
      width: theme.size.xl,
      height: theme.size.xl,
      tintColor: theme.colors.primary,
    },
    text: {color: theme.colors.secondaryText},
    checkedText: {
      fontWeight: theme.fonts.heavy.fontWeight,
      color: theme.colors.primary,
    },
  });
