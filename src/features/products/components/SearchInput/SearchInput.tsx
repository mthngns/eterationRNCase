import React from 'react';
import {styles} from './SearchInput.styles';
import {View, TextInput, TextInputProps} from 'react-native';
import {useThemeContext} from '../../../../theme/themeContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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

export default SearchInput;
