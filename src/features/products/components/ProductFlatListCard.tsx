import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  View,
} from 'react-native';
import {
  addItemToBasket,
  getBasket,
  removeItemToBasket,
} from '../../basket/store/basket';
import {
  addItemToFav,
  getFavorites,
  removeItemToFav,
} from '../../favorites/store/favorites';
import {useSelector} from 'react-redux';
import {Product} from '../../../types/types';
import {CustomTheme} from '../../../theme/themes';
import {useAppDispatch} from '../../../redux/store';
import {commonStyles} from '../../../theme/commonStyles';
import {useThemeContext} from '../../../theme/themeContext';
import ThemedButton from '../../../components/ThemedButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BrandBadge from '../../../components/BrandBadge/BrandBadge';

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

const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    cardContainer: {
      flex: 1,
      backgroundColor: theme.colors.card,
      borderRadius: theme.size.xs,
      borderWidth: theme.size.borderSm,
      borderColor: theme.colors.border,
      overflow: 'hidden',
    },
    touchableArea: {
      flex: 1,
      overflow: 'hidden',
    },
    brandContainer: {
      ...commonStyles(theme).rowCenter,
      paddingHorizontal: theme.size.xs,
      paddingVertical: theme.size.md,
      columnGap: theme.size.xs,
    },
    brandIcon: {
      width: theme.size.lg,
      height: theme.size.lg,
      tintColor: theme.colors.primary,
    },
    productBrand: {
      fontSize: theme.size.base,
      fontWeight: theme.fonts.heavy.fontWeight,
      color: theme.colors.text,
    },
    productImage: {
      width: '100%',
      height: 120,
    },
    infoContainer: {
      flex: 1,
      justifyContent: 'space-between',
      padding: theme.size.xs,
      rowGap: theme.size.xs,
    },
    productModel: {
      fontSize: theme.size.base,
      color: theme.colors.secondaryText,
      paddingVertical: theme.size.xxs,
    },
    productName: {
      fontSize: theme.size.md,
      fontWeight: theme.fonts.bold.fontWeight,
      color: theme.colors.text,
    },
    productPrice: {
      fontSize: theme.size.md,
      color: theme.colors.primary,
      marginTop: theme.size.xs,
      fontWeight: theme.fonts.heavy.fontWeight,
    },
    buttonContainer: {
      ...commonStyles(theme).rowCenter,
      padding: theme.size.xs,
      justifyContent: 'space-between',
      columnGap: theme.size.sm,
    },
    button: {
      flex: 1,
      padding: theme.size.xs,
      borderRadius: theme.size.xs,
    },
    buttonText: {
      fontSize: theme.size.base,
    },
  });

export default React.memo(ProductFlatListCard);
