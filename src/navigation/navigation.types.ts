import {NavigatorScreenParams} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';

export type HomeStackParamList = {
  ProductList: undefined;
  ProductDetail: {
    id: string;
  };
  Search: undefined;
};

export type RootStackParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Favorites: undefined;
  Basket: undefined;
  Profile: undefined;
};

export type ProductListProps = StackScreenProps<
  HomeStackParamList,
  'ProductList'
>;

export type ProductDetailProps = StackScreenProps<
  HomeStackParamList,
  'ProductDetail'
>;

export type SearchProps = StackScreenProps<HomeStackParamList, 'Search'>;

export type BasketProps = StackScreenProps<RootStackParamList, 'Basket'>;
