import {StyleSheet} from 'react-native';
import {CustomTheme} from '../../theme/themes';

export const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    text: {
      color: theme.colors.text,
    },
  });
