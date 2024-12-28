import {StyleSheet} from 'react-native';
import {CustomTheme} from '../../../../theme/themes';

export const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    content: {
      flex: 1,
      backgroundColor: theme.colors.card,
      borderWidth: theme.size.borderSm,
      borderColor: theme.colors.border,
      borderRadius: theme.size.xs,
      padding: theme.size.md,
      justifyContent: 'center',
      rowGap: theme.size.md,
    },
    profileContainer: {
      alignItems: 'center',
      flex: 3,
      justifyContent: 'flex-end',
    },
    avatarWrapper: {
      position: 'relative',
    },
    avatar: {
      width: 150,
      height: 150,
      borderRadius: 100,
      borderWidth: theme.size.borderMd,
      borderColor: theme.colors.primary,
    },
    editButton: {
      backgroundColor: 'transparent',
      position: 'absolute',
      bottom: 0,
      right: 0,
      padding: 0,
      borderWidth: 0,
    },
    name: {
      fontSize: theme.size.lg,
      fontWeight: theme.fonts.heavy.fontWeight,
      marginTop: theme.size.md,
    },
    email: {
      fontSize: theme.size.base,
      color: theme.colors.secondaryText,
      marginTop: theme.size.xxs,
    },
    optionContainer: {
      marginTop: theme.size.md,
      flex: 4,
    },
    optionRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: theme.size.md,
      borderBottomWidth: theme.size.borderSm,
      borderBottomColor: theme.colors.border,
    },
    optionText: {
      fontSize: theme.size.md,
      color: theme.colors.secondaryText,
      fontWeight: theme.fonts.bold.fontWeight,
    },
    logoutButton: {
      width: '100%',
    },
  });
