import {StyleSheet} from 'react-native';
import {CustomTheme} from '../../../../theme/themes';

export const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    avoidingView: {
      flex: 1,
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
      backgroundColor: theme.colors.card,
      borderWidth: theme.size.borderSm,
      borderColor: theme.colors.border,
      borderTopRightRadius: 50,
      borderBottomRightRadius: 50,
      paddingHorizontal: theme.size.sm,
      justifyContent: 'center',
      alignSelf: 'stretch',
    },
    buttonText: {
      fontSize: theme.size.sm,
      fontWeight: theme.fonts.medium.fontWeight,
      color: theme.colors.primary,
    },
    errorText: {
      color: theme.colors.warning,
      textAlign: 'center',
      paddingTop: theme.size.md,
    },
    resultsContainer: {
      flex: 1,
      overflow: 'hidden',
      borderWidth: theme.size.borderSm,
      borderColor: theme.colors.border,
      backgroundColor: theme.colors.card,
      borderRadius: theme.size.sm,
    },
    listContent: {
      paddingBottom: theme.size.lg,
      marginBottom: theme.size.md,
    },
  });
