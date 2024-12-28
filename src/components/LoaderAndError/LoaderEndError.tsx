import React from 'react';
import {styles} from './LoaderAndError.styles';
import CustomText from './../CustomText/CustomText';
import {ActivityIndicator, View} from 'react-native';
import {useThemeContext} from '../../theme/themeContext';

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

export default LoaderAndError;
