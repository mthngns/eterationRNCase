import {StyleSheet} from 'react-native';
import {CustomTheme} from '../../../../theme/themes';
import {commonStyles} from '../../../../theme/commonStyles';

export const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    headerBox: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: theme.size.sm,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    headerButton: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerTitle: {
      fontSize: theme.size.md,
      fontWeight: theme.fonts.bold.fontWeight,
      color: theme.colors.text,
      marginLeft: theme.size.xxs,
    },
    image: {
      width: '100%',
      height: 150,
      borderWidth: theme.size.borderSm,
      borderColor: theme.colors.border,
      borderRadius: theme.size.sm,
    },
    infoBox: {
      ...commonStyles(theme).rowCenter,
      columnGap: theme.size.lg,
      overflow: 'hidden',
      flexWrap: 'nowrap',
      padding: theme.size.sm,
    },
    brandContainer: {
      ...commonStyles(theme).rowCenter,
      columnGap: theme.size.xs,
    },
    brandIcon: {
      width: theme.size.xxl,
      height: theme.size.xxl,
      tintColor: theme.colors.primary,
    },
    boxItem: {
      flexGrow: 1,
      flex: 1,
      flexWrap: 'nowrap',
      alignSelf: 'stretch',
      justifyContent: 'center',
      rowGap: theme.size.xxs,
    },
    title: {
      fontSize: theme.size.base,
      fontWeight: theme.fonts.bold.fontWeight,
      color: theme.colors.text,
    },
    badgeTitle: {
      fontSize: theme.size.sm,
      fontWeight: theme.fonts.heavy.fontWeight,
      fontStyle: 'italic',
      color: theme.colors.primary,
    },
    descriptionBox: {
      borderWidth: theme.size.borderSm,
      borderColor: theme.colors.border,
      borderRadius: theme.size.sm,
      backgroundColor: theme.colors.card,
      padding: theme.size.md,
    },
    description: {
      fontSize: theme.size.base,
      color: theme.colors.secondaryText,
      marginTop: theme.size.xs,
      marginBottom: theme.size.huge,
    },
    row: {
      ...commonStyles(theme).rowCenter,
      columnGap: theme.size.md,
      flexWrap: 'nowrap',
      overflow: 'hidden',
      alignItems: 'stretch',
    },
    actionBox: {
      ...commonStyles(theme).rowCenter,
      columnGap: theme.size.md,
      flexWrap: 'nowrap',
      overflow: 'hidden',
      justifyContent: 'flex-end',
      flexGrow: 1,
    },
    price: {
      fontSize: theme.size.lg,
      fontWeight: theme.fonts.heavy.fontWeight,
      color: theme.colors.primary,
    },
    buttonBox: {
      borderWidth: theme.size.borderSm,
      borderColor: theme.colors.border,
      borderRadius: theme.size.sm,
      backgroundColor: theme.colors.card,
    },
  });
