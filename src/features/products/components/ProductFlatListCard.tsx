import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {Product} from '../../../types/types';
import {CustomTheme} from '../../../theme/themes';
import brandIcons from '../../../utils/brandIcons';
import {useAppDispatch} from '../../../redux/store';
import {commonStyles} from '../../../theme/commonStyles';
import {useThemeContext} from '../../../theme/themeContext';
import ThemedButton from '../../../components/ThemedButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {addItemToBasket, getBasket} from '../../basket/store/basket';

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
  const isInBasket = basket.productList.some(product => product.id === item.id);
  const {width} = Dimensions.get('window');
  const itemWidth = (width - theme.size.xs * 4) / 2;
  const itemHeight = itemWidth * 1;

  const handleAddItemToBasket = (product: Product) => {
    dispatch(addItemToBasket({...product, pcs: '1'}));
  };

  return (
    <View
      style={[
        styles(theme).cardContainer,
        {minHeight: itemHeight, maxWidth: itemWidth},
      ]}>
      <TouchableOpacity
        style={styles(theme).touchableArea}
        onPress={() => onPress(item)}>
        <View style={styles(theme).brandContainer}>
          <Image
            source={
              brandIcons[item.brand.replaceAll(' ', '')] || brandIcons.Ferrari
            }
            style={styles(theme).brandIcon}
            resizeMode="contain"
          />
          <Text style={styles(theme).productBrand}>{item.brand}</Text>
        </View>

        <Image
          source={{uri: item.image}}
          style={styles(theme).productImage}
          resizeMode="cover"
        />
        <View style={styles(theme).infoContainer}>
          <View>
            <Text style={styles(theme).productModel}>{item.model}</Text>
            <Text style={styles(theme).productName}>{item.name}</Text>
          </View>
          <Text style={styles(theme).productPrice}>${item.price}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles(theme).buttonContainer}>
        <ThemedButton
          disabled={isInBasket}
          onPress={() => handleAddItemToBasket(item)}
          style={styles(theme).button}
          textStyle={styles(theme).buttonText}
          design={isInBasket ? 'outline' : 'inline'}
          title={isInBasket ? 'In Basket' : 'Add to Basket'}
        />
        <TouchableOpacity onPress={() => console.log('Added to fav')}>
          <Icon
            name="heart-outline"
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
    },
    touchableArea: {
      flex: 1,
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
