import React from 'react';
import Box from '../../../../components/Box';
import {styles} from './ProductDetail.styles';
import brandIcons from '../../../../utils/brandIcons';
import CustomText from '../../../../components/CustomText';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {useThemeContext} from '../../../../theme/themeContext';
import {useGetProductByIdQuery} from '../../services/products';
import LoaderAndError from '../../../../components/LoaderEndError';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, ScrollView, Image, TouchableOpacity, Alert} from 'react-native';
import {ProductDetailProps} from '../../../../navigation/navigation.types';
import {useAppDispatch} from '../../../../redux/store';
import {
  addItemToBasket,
  getBasket,
  removeItemToBasket,
} from '../../../basket/store/basket';
import {useSelector} from 'react-redux';

export const ProductDetail = ({route, navigation}: ProductDetailProps) => {
  const insets = useSafeAreaInsets();
  const {id} = route.params;
  const {theme} = useThemeContext();
  const dispatch = useAppDispatch();
  const {data: product, isLoading, isError} = useGetProductByIdQuery(id);
  const basket = useSelector(getBasket);
  const isInBasket = basket.productList.some(item => item.id === product?.id);

  const handleAddItemToBasket = () => {
    if (product) {
      dispatch(addItemToBasket({...product, pcs: '1'}));
      Alert.alert('Added to basket.');
    }
  };
  const handleRemoveItem = () => {
    if (product) {
      dispatch(removeItemToBasket(product.id));
      Alert.alert('Removed to basket.');
    }
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles(theme).container}>
        <View style={styles(theme).headerBox}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles(theme).headerButton}>
            <Icon
              name="chevron-left"
              size={theme.size.xxl}
              color={theme.colors.text}
            />
            <CustomText style={styles(theme).headerTitle}>
              Go Back to Product List
            </CustomText>
          </TouchableOpacity>
        </View>
        <LoaderAndError isLoading={isLoading} />
      </SafeAreaView>
    );
  }

  if (isError) {
    return (
      <SafeAreaView style={styles(theme).container}>
        <View style={styles(theme).headerBox}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles(theme).headerButton}>
            <Icon
              name="chevron-left"
              size={theme.size.xxl}
              color={theme.colors.text}
            />
            <CustomText style={styles(theme).headerTitle}>
              Go Back to Product List
            </CustomText>
          </TouchableOpacity>
        </View>
        <LoaderAndError isError={isError} />
      </SafeAreaView>
    );
  }

  return (
    <View
      style={[
        styles(theme).container,
        {paddingTop: insets.top, paddingBottom: theme.size.md},
      ]}>
      {product && (
        <>
          <View style={styles(theme).headerBox}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles(theme).headerButton}>
              <Icon
                name="chevron-left"
                size={theme.size.xxl}
                color={theme.colors.text}
              />
              <CustomText style={styles(theme).headerTitle}>
                Go Back to Product List
              </CustomText>
            </TouchableOpacity>
          </View>
          <Image
            source={{uri: product.image}}
            style={styles(theme).image}
            resizeMode="cover"
          />
          <Box style={styles(theme).infoBox}>
            <View style={styles(theme).brandContainer}>
              <Image
                source={
                  brandIcons[product.brand.replaceAll(' ', '')] ||
                  brandIcons.Ferrari
                }
                style={styles(theme).brandIcon}
                resizeMode="contain"
              />
            </View>
            <View style={[styles(theme).boxItem, {flexGrow: theme.size.xxs}]}>
              <CustomText style={styles(theme).badgeTitle}>Brand</CustomText>
              <CustomText style={styles(theme).title} numberOfLines={1}>
                {product.brand}
              </CustomText>
            </View>
            <View style={[styles(theme).boxItem, {flexGrow: theme.size.xxs}]}>
              <CustomText style={styles(theme).badgeTitle}>Model</CustomText>
              <CustomText style={styles(theme).title} numberOfLines={1}>
                {product.model}
              </CustomText>
            </View>
            <View style={[styles(theme).boxItem, {flexGrow: theme.size.xs}]}>
              <CustomText style={styles(theme).badgeTitle}>Name</CustomText>
              <CustomText style={styles(theme).title} numberOfLines={1}>
                {product.name}
              </CustomText>
            </View>
          </Box>

          <ScrollView style={styles(theme).descriptionBox}>
            <CustomText style={styles(theme).title}>Description</CustomText>
            <CustomText style={styles(theme).description}>
              {product.description}
            </CustomText>
          </ScrollView>

          <View style={styles(theme).row}>
            <Box>
              <CustomText style={styles(theme).price}>
                $ {product.price}
              </CustomText>
            </Box>
            <View style={styles(theme).actionBox}>
              <TouchableOpacity
                style={styles(theme).buttonBox}
                onPress={isInBasket ? handleRemoveItem : handleAddItemToBasket}>
                <Icon
                  name={isInBasket ? 'shopping' : 'shopping-outline'}
                  size={theme.size.xl}
                  color={theme.colors.primary}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles(theme).buttonBox}>
                <Icon
                  name="heart-outline"
                  size={theme.size.xl}
                  color={theme.colors.primary}
                />
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </View>
  );
};
export default ProductDetail;
