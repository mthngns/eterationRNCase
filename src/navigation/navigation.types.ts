import type {StackScreenProps} from '@react-navigation/stack';

export type HomeStackParamList = {
  ProductList: undefined;
  ProductDetail: {
    id: string;
  };
};

export type RootStackParamList = {
  Home: HomeStackParamList;
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
