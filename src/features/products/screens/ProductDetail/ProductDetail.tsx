import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './ProductDetail.styles';
import {ProductDetailProps} from '../../../../navigation/navigation.types';

export const ProductDetail = ({route}: ProductDetailProps) => {
  const {id} = route.params;

  return (
    <View style={styles.container}>
      <Text>ProductDetail</Text>
      <Text>{id}</Text>
    </View>
  );
};
