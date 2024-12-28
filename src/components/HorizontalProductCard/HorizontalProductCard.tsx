import React from 'react';
import CustomText from '../CustomText';
import {useThemeContext} from '../../theme/themeContext';
import {ExtendedProduct, Product} from '../../types/types';
import BrandBadge from '../BrandBadge/BrandBadge';
import {View, Image, TouchableOpacity} from 'react-native';
import {styles} from './HorizontalProductCard.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useAppDispatch} from '../../redux/store';
import {
  decrementProductQuantity,
  incrementProductQuantity,
  removeItemToBasket,
} from '../../features/basket/store/basket';

interface HorizontalProductCardProps {
  product: Product | ExtendedProduct;
  onPress: () => void;
}

const HorizontalProductCard: React.FC<HorizontalProductCardProps> = ({
  product,
  onPress,
}) => {
  const {theme} = useThemeContext();
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(incrementProductQuantity(product.id));
  };

  const handleDecrement = () => {
    dispatch(decrementProductQuantity(product.id));
  };

  const handleRemoveItem = () => {
    dispatch(removeItemToBasket(product.id));
  };
  return (
    <TouchableOpacity style={styles(theme).card} onPress={onPress}>
      <View>
        <Image
          source={{uri: product.image}}
          style={styles(theme).image}
          resizeMode="cover"
        />
      </View>
      <View style={styles(theme).details}>
        <BrandBadge product={product} />
        <CustomText style={styles(theme).name}>{product.name}</CustomText>
        {'pcs' in product ? (
          <View style={styles(theme).quantityBox}>
            <TouchableOpacity
              style={styles(theme).iconButton}
              onPress={handleDecrement}>
              <Icon
                name="arrow-back-ios"
                size={theme.size.lg}
                color={theme.colors.text}
              />
            </TouchableOpacity>
            <CustomText style={styles(theme).quantityText}>
              {product.pcs}
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
        ) : (
          <CustomText
            style={styles(theme).price}>{`$${product.price}`}</CustomText>
        )}
      </View>
      {'pcs' in product ? (
        <View style={styles(theme).priceBox}>
          <CustomText
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[styles(theme).price, {fontSize: theme.size.md}]}>
            {product.price}
          </CustomText>
          <TouchableOpacity
            style={[styles(theme).iconButton]}
            onPress={handleRemoveItem}>
            <Icon
              name="delete-sweep"
              size={theme.size.xl}
              color={theme.colors.error}
            />
          </TouchableOpacity>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default HorizontalProductCard;
