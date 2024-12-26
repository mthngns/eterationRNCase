import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import CustomText from '../../../components/CustomText';
import {Product} from '../../../types/types';
import {CustomTheme} from '../../../theme/themes';
import {useThemeContext} from '../../../theme/themeContext';
import brandIcons from '../../../utils/brandIcons';
import {commonStyles} from '../../../theme/commonStyles';

interface ProductSearchCardProps {
  product: Product;
  onPress: () => void;
}

const ProductSearchCard: React.FC<ProductSearchCardProps> = ({
  product,
  onPress,
}) => {
  const {theme} = useThemeContext();
  return (
    <TouchableOpacity style={styles(theme).card} onPress={onPress}>
      <Image source={{uri: product.image}} style={styles(theme).image} />
      <View style={styles(theme).details}>
        <View style={styles(theme).brandContainer}>
          <Image
            source={
              brandIcons[product.brand.replaceAll(' ', '')] ||
              brandIcons.Ferrari
            }
            style={styles(theme).brandIcon}
            resizeMode="contain"
          />
          <CustomText style={styles(theme).productBrand}>
            {product.brand} / {product.model}
          </CustomText>
        </View>
        <CustomText style={styles(theme).name}>{product.name}</CustomText>
        <CustomText
          style={styles(theme).price}>{`$${product.price}`}</CustomText>
      </View>
    </TouchableOpacity>
  );
};

export default ProductSearchCard;

const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    card: {
      flexDirection: 'row',
      paddingHorizontal: theme.size.xs,
      paddingVertical: theme.size.sm,
      borderBottomWidth: theme.size.borderSm,
      borderColor: theme.colors.border,
      backgroundColor: theme.colors.card,
      columnGap: theme.size.sm,
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: theme.size.xxs,
    },
    details: {
      flex: 1,
      justifyContent: 'space-between',
    },
    name: {
      fontSize: theme.size.md,
      fontWeight: theme.fonts.bold.fontWeight,
    },
    price: {
      fontSize: theme.size.base,
      color: theme.colors.primary,
      fontWeight: theme.fonts.heavy.fontWeight,
    },
    brandContainer: {
      ...commonStyles.rowCenter,
      columnGap: theme.size.xs,
    },
    brandIcon: {
      width: theme.size.lg,
      height: theme.size.lg,
      tintColor: theme.colors.secondaryText,
    },
    productBrand: {
      fontSize: theme.size.base,
      fontWeight: theme.fonts.heavy.fontWeight,
      color: theme.colors.secondaryText,
    },
  });
