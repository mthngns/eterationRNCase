import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from '../Stacks/HomeStack';
import {Favorites} from '../../features/favorites';
import {RootStackParamList} from '../navigation.types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Basket} from '../../features/basket';
import {Profile} from '../../features/profile';

const Tab = createBottomTabNavigator<RootStackParamList>();
const getTabBarIcon = (name: string) => {
  return ({
    focused,
    size,
    color,
  }: {
    focused: boolean;
    size: number;
    color: string;
  }) => (
    <Icon name={focused ? name : `${name}-outline`} size={size} color={color} />
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarItemStyle: {paddingTop: 5},
        tabBarStyle: {
          borderTopRightRadius: 0,
          borderTopLeftRadius: 0,
          borderTopWidth: 1,
          borderLeftWidth: 0,
          borderRightWidth: 0,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: getTabBarIcon('gamepad-circle'),
        }}
        name="Home"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: getTabBarIcon('heart'),
          tabBarBadge: '2',
        }}
        name="Favorites"
        component={Favorites}
      />
      <Tab.Screen
        options={{
          tabBarIcon: getTabBarIcon('shopping'),
          tabBarBadge: '2',
        }}
        name="Basket"
        component={Basket}
      />
      <Tab.Screen
        options={{
          tabBarIcon: getTabBarIcon('account'),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
