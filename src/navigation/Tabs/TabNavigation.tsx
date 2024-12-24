import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from '../Stacks/HomeStack';
import {Favorites} from '../../features/favorites';
import {RootStackParamList} from '../navigation.types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Profile} from '../../features/profile';
import {Basket} from '../../features/basket';

const Tab = createBottomTabNavigator<RootStackParamList>();

const getTabBarIcon = (name: string) => {
  return ({focused, size}: {focused: boolean; size: number}) => (
    <Icon name={focused ? name : `${name}-outline`} size={size} />
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          flexDirection: 'column',
          height: 80,
          paddingTop: 10,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -1,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: getTabBarIcon('home'),
        }}
        name="Home"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: getTabBarIcon('star'),
        }}
        name="Favorites"
        component={Favorites}
      />
      <Tab.Screen
        options={{
          tabBarIcon: getTabBarIcon('basket'),
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
