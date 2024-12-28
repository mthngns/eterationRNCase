import {StyleSheet} from 'react-native';
import {CustomTheme} from '../../theme/themes';

export const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    iconButton: {
      padding: theme.size.xxs,
      borderWidth: theme.size.borderSm,
      borderColor: theme.colors.secondaryBackground,
      borderRadius: theme.size.xxs,
      overflow: 'hidden',
      alignSelf: 'flex-end',
    },
  });
