import React from 'react';
import CustomText from './CustomText';
import {commonStyles} from '../theme/commonStyles';
import {useThemeContext} from '../theme/themeContext';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {CustomTheme} from '../theme/themes';

interface LoaderAndErrorProps {
  isLoading?: boolean;
  isError?: any;
  isFetching?: boolean;
}

const LoaderAndError: React.FC<LoaderAndErrorProps> = ({
  isLoading = false,
  isError = false,
  isFetching = false,
}) => {
  const {theme} = useThemeContext();

  if (isLoading || isFetching) {
    return (
      <View style={styles(theme).container}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles(theme).container}>
        <CustomText>Something went wrong! Try again.</CustomText>
      </View>
    );
  }

  return null;
};

const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    container: {
      ...commonStyles(theme).flexCenter,
    },
  });

export default LoaderAndError;
