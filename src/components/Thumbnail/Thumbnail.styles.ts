import {StyleSheet} from 'react-native';
import {CustomTheme} from '../../theme/themes';

export const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    image: {
      width: 80,
      height: 80,
      flex: 1,
      borderRadius: theme.size.xxs,
    },
  });
