import React from 'react';
import CustomText from './CustomText';
import {useThemeContext} from '../theme/themeContext';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {commonStyles} from '../theme/commonStyles';

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
      <View style={styles.container}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.container}>
        <CustomText>Something went wrong! Try again.</CustomText>
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  container: {
    ...commonStyles.flexCenter,
  },
});

export default LoaderAndError;
