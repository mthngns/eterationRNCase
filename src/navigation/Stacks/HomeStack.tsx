import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProductDetail, ProductList} from '../../features/products';
import {HomeStackParamList} from '../navigation.types';

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="ProductList">
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
};

export default HomeStack;
