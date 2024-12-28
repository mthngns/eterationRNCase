import React from 'react';
import CustomText from '../CustomText';
import {useThemeContext} from '../../theme/themeContext';
import {ExtendedProduct, Product} from '../../types/types';
import BrandBadge from '../BrandBadge/BrandBadge';
import {View, TouchableOpacity} from 'react-native';
import {styles} from './HorizontalProductCard.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useAppDispatch} from '../../redux/store';
import {
  addItemToBasket,
  decrementProductQuantity,
  getBasket,
  incrementProductQuantity,
  removeItemToBasket,
} from '../../features/basket/store/basket';
import {useSelector} from 'react-redux';
import {
  addItemToFav,
  getFavorites,
  removeItemToFav,
} from '../../features/favorites/store/favorites';
import {commonStyles} from '../../theme/commonStyles';
import Thumbnail from '../Thumbnail/Thumbnail';

interface HorizontalProductCardProps {
  product: Product | ExtendedProduct;
  onPress: () => void;
  forUsingBasket?: boolean;
}

const HorizontalProductCard: React.FC<HorizontalProductCardProps> = ({
  product,
  onPress,
  forUsingBasket = false,
}) => {
  const {theme} = useThemeContext();
  const dispatch = useAppDispatch();
  const basket = useSelector(getBasket);
  const favorites = useSelector(getFavorites);
  const isInBasket = basket.productList.some(item => item.id === product.id);
  const isInFav = favorites.productList.some(item => item.id === product.id);

  const handleIncrement = () => {
    dispatch(incrementProductQuantity(product.id));
  };

  const handleDecrement = () => {
    dispatch(decrementProductQuantity(product.id));
  };

  const handleRemoveItemToBasket = () => {
    dispatch(removeItemToBasket(product.id));
  };

  const handleFavIconPress = () => {
    isInFav
      ? dispatch(removeItemToFav(product.id))
      : dispatch(addItemToFav(product));
  };

  const handleBasketIconPress = () => {
    isInBasket
      ? dispatch(removeItemToBasket(product.id))
      : dispatch(addItemToBasket({...product, pcs: 1}));
  };

  return (
    <TouchableOpacity style={styles(theme).card} onPress={onPress}>
      <Thumbnail uri={product.image} />
      <View style={styles(theme).details}>
        <View style={{rowGap: theme.size.xs}}>
          <BrandBadge product={product} />
          <CustomText style={styles(theme).name}>{product.name}</CustomText>
        </View>
        {forUsingBasket && (
          <View style={styles(theme).quantityBox}>
            <TouchableOpacity
              style={[
                styles(theme).iconButton,
                {transform: [{rotate: '180deg'}]},
              ]}
              onPress={handleDecrement}>
              <Icon
                name="arrow-forward-ios"
                size={theme.size.lg}
                color={theme.colors.text}
              />
            </TouchableOpacity>
            <CustomText style={styles(theme).quantityText}>
              {(product as ExtendedProduct).pcs!}
            </CustomText>
            <TouchableOpacity
              style={[
                styles(theme).iconButton,
                {backgroundColor: theme.colors.primary},
              ]}
              onPress={handleIncrement}>
              <Icon
                name="arrow-forward-ios"
                size={theme.size.lg}
                color={theme.colors.light}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View style={styles(theme).priceBox}>
        <CustomText
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[styles(theme).price, {fontSize: theme.size.md}]}>
          ${product.price}
        </CustomText>

        <View
          style={{
            ...commonStyles(theme).rowCenter,
            columnGap: theme.size.xs,
          }}>
          <TouchableOpacity
            style={[styles(theme).iconButton]}
            onPress={handleFavIconPress}>
            <Icon
              name={isInFav ? 'favorite' : 'favorite-border'}
              size={theme.size.xl}
              color={theme.colors.primary}
            />
          </TouchableOpacity>
          {!forUsingBasket && (
            <TouchableOpacity
              style={[styles(theme).iconButton]}
              onPress={handleBasketIconPress}>
              <MIcon
                name={isInBasket ? 'shopping' : 'shopping-outline'}
                size={theme.size.xl}
                color={theme.colors.primary}
              />
            </TouchableOpacity>
          )}
          {forUsingBasket && (
            <TouchableOpacity
              style={[styles(theme).iconButton]}
              onPress={handleRemoveItemToBasket}>
              <Icon
                name="delete-forever"
                size={theme.size.xl}
                color={theme.colors.error}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalProductCard;
