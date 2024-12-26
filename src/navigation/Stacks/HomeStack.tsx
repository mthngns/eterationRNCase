import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProductDetail, ProductList} from '../../features/products';
import {HomeStackParamList} from '../navigation.types';
import Search from '../../features/products/screens/Search/Search';

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        headerShown: false,
      }}
      initialRouteName="ProductList">
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

export default HomeStack;
