import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from '../Stacks/HomeStack';
import {Favorites} from '../../features/favorites';
import {RootStackParamList} from '../navigation.types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Basket} from '../../features/basket';
import {Profile} from '../../features/profile';
import {useSelector} from 'react-redux';
import {getBasket} from '../../features/basket/store/basket';
import {useThemeContext} from '../../theme/themeContext';
import {getFavorites} from '../../features/favorites/store/favorites';

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
  const basket = useSelector(getBasket);
  const favorites = useSelector(getFavorites);
  const basketLength = basket.productList.length;
  const favLength = favorites.productList.length;
  const {theme} = useThemeContext();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarItemStyle: {paddingTop: 5},
        tabBarStyle: {
          borderTopWidth: 1,
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
          tabBarBadge: favLength ? favLength : undefined,
          tabBarBadgeStyle: {backgroundColor: theme.colors.primary},
        }}
        name="Favorites"
        component={Favorites}
      />
      <Tab.Screen
        options={{
          tabBarIcon: getTabBarIcon('shopping'),
          tabBarBadge: basketLength ? basketLength : undefined,
          tabBarBadgeStyle: {backgroundColor: theme.colors.primary},
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
