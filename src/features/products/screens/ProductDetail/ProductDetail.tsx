import React from 'react';
import {
  addItemToBasket,
  getBasket,
  removeItemToBasket,
} from '../../../basket/store/basket';
import {useSelector} from 'react-redux';
import {
  addItemToFav,
  getFavorites,
  removeItemToFav,
} from '../../../favorites/store/favorites';
import {styles} from './ProductDetail.styles';
import Box from '../../../../components/Box/Box';
import {useAppDispatch} from '../../../../redux/store';
import {View, ScrollView, Image, Alert} from 'react-native';
import {useThemeContext} from '../../../../theme/themeContext';
import {useGetProductByIdQuery} from '../../services/products';
import IconButton from '../../../../components/IconButton/IconButton';
import CustomText from '../../../../components/CustomText/CustomText';
import {ProductDetailProps} from '../../../../navigation/navigation.types';
import ScreenHeader from '../../../../components/ScreenHeader/ScreenHeader';
import LoaderAndError from '../../../../components/LoaderAndError/LoaderEndError';
import {CustomSafeArea} from '../../../../components/CustomSafeArea/CustomSafeArea';
import ProductAttributesBar from '../../components/ProductAttributesBar/ProductAttributesBar';

export const ProductDetail = ({route}: ProductDetailProps) => {
  const {id} = route.params;
  const {theme} = useThemeContext();
  const dispatch = useAppDispatch();
  const {
    data: product,
    isLoading,
    isFetching,
    isError,
  } = useGetProductByIdQuery(id);
  const basket = useSelector(getBasket);
  const favorites = useSelector(getFavorites);
  const isInBasket = basket.productList.some(item => item.id === product?.id);
  const isInFav = favorites.productList.some(item => item.id === product?.id);

  if (isLoading || isFetching) {
    return (
      <CustomSafeArea>
        <ScreenHeader title="Product Detail" />
        <LoaderAndError isLoading={isLoading || isFetching} />
      </CustomSafeArea>
    );
  }

  if (isError || !product) {
    return (
      <CustomSafeArea>
        <ScreenHeader title="Product Detail" />
        <LoaderAndError isError={isError} />
      </CustomSafeArea>
    );
  }

  const handleBasketIconPress = () => {
    isInBasket
      ? (dispatch(removeItemToBasket(product.id)),
        Alert.alert('Product removed to basket.'))
      : (dispatch(addItemToBasket({...product, pcs: '1'})),
        Alert.alert('Product added to basket.'));
  };

  const handleFavoritesIconPress = () => {
    isInFav
      ? (dispatch(removeItemToFav(product.id)),
        Alert.alert('Product removed to favorites.'))
      : (dispatch(addItemToFav(product)),
        Alert.alert('Product added to favorites.'));
  };

  return (
    <CustomSafeArea>
      <ScreenHeader title="Product Detail" />
      <Image
        source={{uri: product.image}}
        style={styles(theme).image}
        resizeMode="cover"
      />
      <ProductAttributesBar product={product} />

      <ScrollView style={styles(theme).descriptionBox}>
        <CustomText>Description</CustomText>
        <CustomText style={styles(theme).descText}>
          {product.description}
        </CustomText>
      </ScrollView>

      <View style={styles(theme).row}>
        <Box style={{padding: theme.size.md}}>
          <CustomText style={styles(theme).price}>$ {product.price}</CustomText>
        </Box>
        <View style={styles(theme).actionBox}>
          <IconButton
            style={{padding: theme.size.md}}
            onPress={handleFavoritesIconPress}
            icon={isInFav ? 'heart' : 'heart-outline'}
          />
          <IconButton
            style={{padding: theme.size.md}}
            onPress={handleBasketIconPress}
            icon={isInBasket ? 'shopping' : 'shopping-outline'}
          />
        </View>
      </View>
    </CustomSafeArea>
  );
};
export default ProductDetail;
