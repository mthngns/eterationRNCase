import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useThemeContext} from '../../../../theme/themeContext';

export const Profile = () => {
  const {theme, isDarkTheme, toggleTheme} = useThemeContext();

  return (
    <View style={styles.container}>
      <Text style={{color: theme.colors.text}}>
        Current Theme: {isDarkTheme ? 'Dark' : 'Light'}
      </Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
