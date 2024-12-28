import React from 'react';
import {useSelector} from 'react-redux';
import {
  addItemToBasket,
  decrementProductQuantity,
  getBasket,
  incrementProductQuantity,
  removeItemToBasket,
} from '../../features/basket/store/basket';
import Thumbnail from '../Thumbnail/Thumbnail';
import {useAppDispatch} from '../../redux/store';
import {
  addItemToFav,
  getFavorites,
  removeItemToFav,
} from '../../features/favorites/store/favorites';
import CustomText from '../CustomText/CustomText';
import BrandBadge from '../BrandBadge/BrandBadge';
import {View, TouchableOpacity} from 'react-native';
import {styles} from './HorizontalProductCard.styles';
import {useThemeContext} from '../../theme/themeContext';
import {ExtendedProduct, Product} from '../../types/types';
import QuantitySelector from '../QuantitySelector/QuantitySelector';
import ProductActionBar from '../ProductActionBar/ProductActionBar';

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
          <QuantitySelector
            product={product as ExtendedProduct}
            increment={handleIncrement}
            decrement={handleDecrement}
          />
        )}
      </View>
      <View style={styles(theme).priceBox}>
        <CustomText
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[styles(theme).price, {fontSize: theme.size.md}]}>
          ${product.price}
        </CustomText>
        <ProductActionBar
          isInFav={isInFav}
          isInBasket={isInBasket}
          forUsingBasket={forUsingBasket}
          handleFavIconPress={handleFavIconPress}
          handleBasketIconPress={handleBasketIconPress}
          handleRemoveItemToBasket={handleRemoveItemToBasket}
        />
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalProductCard;
