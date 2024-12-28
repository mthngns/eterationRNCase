import {StyleSheet} from 'react-native';
import {CustomTheme} from '../../../../theme/themes';

export const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    avoidingView: {
      flex: 1,
    },
    container: {
      flex: 1,
      rowGap: theme.size.xs,
    },
    searchContainer: {
      flexDirection: 'row',
      margin: theme.size.xs,
      columnGap: theme.size.xxs,
      alignItems: 'center',
    },
    input: {
      flex: 1,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    button: {
      flex: 1,
      backgroundColor: theme.colors.card,
      borderWidth: theme.size.borderSm,
      borderColor: theme.colors.border,
      borderTopRightRadius: 50,
      borderBottomRightRadius: 50,
      paddingHorizontal: theme.size.sm,
      justifyContent: 'center',
    },
    buttonText: {
      fontSize: theme.size.sm,
      fontWeight: theme.fonts.medium.fontWeight,
      color: theme.colors.primary,
    },
    resultsContainer: {
      flex: 1,
      borderTopWidth: theme.size.borderSm,
      borderColor: theme.colors.border,
      backgroundColor: theme.colors.card,
    },
    errorText: {
      color: theme.colors.warning,
      textAlign: 'center',
    },
    listContent: {
      paddingBottom: theme.size.lg,
      marginBottom: theme.size.md,
    },
  });
