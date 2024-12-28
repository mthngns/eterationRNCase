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
import {Product} from '../../../../types/types';
import {styles} from './ProductFlatListCard.styles';
import {useAppDispatch} from '../../../../redux/store';
import {useThemeContext} from '../../../../theme/themeContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BrandBadge from '../../../../components/BrandBadge/BrandBadge';
import ThemedButton from '../../../../components/ThemedButton/ThemedButton';
import {Text, TouchableOpacity, Image, Dimensions, View} from 'react-native';

interface ProductFlatListCardProps {
  item: Product;
  onPress: (item: Product) => void;
}

const ProductFlatListCard: React.FC<ProductFlatListCardProps> = ({
  item,
  onPress,
}) => {
  const {theme} = useThemeContext();
  const dispatch = useAppDispatch();
  const basket = useSelector(getBasket);
  const favorites = useSelector(getFavorites);

  const isInBasket = basket.productList.some(product => product.id === item.id);
  const isInFav = favorites.productList.some(product => product.id === item.id);

  const handleBasketButtonPress = () => {
    isInBasket
      ? dispatch(removeItemToBasket(item.id))
      : dispatch(addItemToBasket({...item, pcs: '1'}));
  };

  const handleFavIconPress = () => {
    isInFav ? dispatch(removeItemToFav(item.id)) : dispatch(addItemToFav(item));
  };

  const {width} = Dimensions.get('window');
  const itemWidth = (width - theme.size.xs * 4) / 2;
  const itemHeight = itemWidth * 1;

  return (
    <View
      style={[
        styles(theme).cardContainer,
        {minHeight: itemHeight, maxWidth: itemWidth},
      ]}>
      <TouchableOpacity
        style={styles(theme).touchableArea}
        onPress={() => onPress(item)}>
        <Image
          source={{uri: item.image}}
          style={styles(theme).productImage}
          resizeMode="cover"
        />
        <View style={styles(theme).infoContainer}>
          <BrandBadge product={item} iconColor={theme.colors.primary} />
          <Text style={styles(theme).productName}>{item.name}</Text>
          <Text style={styles(theme).productPrice}>${item.price}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles(theme).buttonContainer}>
        <ThemedButton
          onPress={handleBasketButtonPress}
          style={styles(theme).button}
          textStyle={styles(theme).buttonText}
          design={isInBasket ? 'outline' : 'inline'}
          title={isInBasket ? 'Remove to Basket' : 'Add to Basket'}
        />
        <TouchableOpacity onPress={handleFavIconPress}>
          <Icon
            name={isInFav ? 'heart' : 'heart-outline'}
            size={theme.size.xl}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default React.memo(ProductFlatListCard);
