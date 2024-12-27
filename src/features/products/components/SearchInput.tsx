import React from 'react';
import {CustomTheme} from '../../../theme/themes';
import {commonStyles} from '../../../theme/commonStyles';
import {useThemeContext} from '../../../theme/themeContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, TextInput, StyleSheet, TextInputProps} from 'react-native';

const SearchInput: React.FC<TextInputProps> = ({style, ...props}) => {
  const {theme} = useThemeContext();
  return (
    <View
      style={[
        styles(theme).container,
        style,
        {borderColor: theme.colors.border},
      ]}>
      <Icon name="magnify" size={20} style={styles(theme).icon} />

      <TextInput
        keyboardAppearance={theme.dark ? 'dark' : 'light'}
        style={styles(theme).input}
        placeholderTextColor={theme.colors.secondaryText}
        {...props}
      />
    </View>
  );
};

const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    container: {
      ...commonStyles.rowCenter,
      borderWidth: theme.size.borderSm,
      borderRadius: theme.size.xxl,
      overflow: 'hidden',
      paddingLeft: theme.size.sm,
      columnGap: theme.size.xs,
      backgroundColor: theme.colors.card,
    },
    icon: {
      color: theme.colors.secondaryText,
    },
    input: {
      flex: 1,
      fontSize: theme.size.base,
      color: theme.colors.text,
      height: 40,
    },
  });

export default SearchInput;
