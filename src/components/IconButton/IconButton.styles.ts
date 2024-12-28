import {StyleSheet} from 'react-native';
import {CustomTheme} from '../../theme/themes';
import {commonStyles} from '../../theme/commonStyles';

export const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    buttonBox: {
      alignSelf: 'flex-end',
      borderWidth: theme.size.borderSm,
      borderColor: theme.colors.border,
      borderRadius: theme.size.xs,
      backgroundColor: theme.colors.card,
      padding: theme.size.xs,
      columnGap: theme.size.xs,
      ...commonStyles(theme).rowCenter,
    },
    secondaryText: {
      color: theme.colors.secondaryText,
      fontWeight: theme.fonts.heavy.fontWeight,
    },
  });
