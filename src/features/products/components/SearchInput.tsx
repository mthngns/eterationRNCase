import React from 'react';
import {CustomTheme} from '../../../theme/themes';
import {commonStyles} from '../../../theme/commonStyles';
import {useThemeContext} from '../../../theme/themeContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';

interface SearchInputProps extends TextInputProps {
  onIconPress?: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  onIconPress,
  style,
  ...props
}) => {
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
        style={styles(theme).input}
        placeholderTextColor={theme.colors.secondaryText}
        {...props}
      />

      <TouchableOpacity
        onPress={onIconPress}
        style={styles(theme).filterMenuButton}>
        <Icon
          name="filter-menu-outline"
          size={24}
          color={theme.colors.primary}
          style={styles(theme).filterMenuIcon}
        />
      </TouchableOpacity>
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
    },
    icon: {
      color: theme.colors.secondaryText,
    },
    input: {
      flex: 1,
      fontSize: theme.size.base,
      color: theme.colors.text,
    },
    filterMenuButton: {
      ...commonStyles.center,
      padding: theme.size.xs,
      borderLeftWidth: theme.size.borderSm,
      borderColor: theme.colors.border,
    },
    filterMenuIcon: {
      marginHorizontal: theme.size.xxs,
      color: theme.colors.primary,
    },
  });

export default SearchInput;