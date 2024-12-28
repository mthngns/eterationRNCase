import {StyleSheet} from 'react-native';
import {CustomTheme} from '../../theme/themes';

export const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    headerBox: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: theme.size.sm,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    headerButton: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerTitle: {
      flex: 1,
      fontSize: theme.size.lg,
      fontWeight: 'bold',
      color: theme.colors.text,
      textAlign: 'center',
    },
  });
