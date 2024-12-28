import {StyleSheet} from 'react-native';
import {CustomTheme} from './themes';

export const commonStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    flexBox: {
      flex: 1,
    },
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    flexCenter: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    rowCenter: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    lgText: {
      fontSize: theme.size.lg,
      fontWeight: theme.fonts.heavy.fontWeight,
    },
  });
