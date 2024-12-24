import React from 'react';
import {styles} from './ProductList.styles';
import {ProductListProps} from '../../../../navigation/navigation.types';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const ProductList = ({navigation}: ProductListProps) => {
  const handleNavigateDetail = () => {
    navigation.navigate('ProductDetail', {id: '2'});
  };

  return (
    <View style={styles.container}>
      <Text>ProductList</Text>
      <Icon name="rocket" size={30} color="#900" />
      <TouchableOpacity onPress={handleNavigateDetail}>
        <Text>Navigate to Product detail</Text>
      </TouchableOpacity>
    </View>
  );
};
