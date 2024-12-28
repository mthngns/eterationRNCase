import {View, Image} from 'react-native';
import React, {ReactElement} from 'react';
import {Product} from '../../../../types/types';
import Box from '../../../../components/Box/Box';
import {styles} from './ProductAttributesBar.styles';
import brandIcons from '../../../../utils/brandIcons';
import {useThemeContext} from '../../../../theme/themeContext';
import CustomText from '../../../../components/CustomText/CustomText';

const ProductAttributesBar = ({product}: {product: Product}): ReactElement => {
  const {theme} = useThemeContext();
  return (
    <Box style={styles(theme).infoBox}>
      <View style={styles(theme).brandContainer}>
        <Image
          source={
            brandIcons[product.brand.replaceAll(' ', '')] || brandIcons.Ferrari
          }
          style={styles(theme).brandIcon}
          resizeMode="contain"
        />
      </View>
      <View style={styles(theme).boxItem}>
        <CustomText style={styles(theme).badgeTitle}>Brand</CustomText>
        <CustomText style={styles(theme).title} numberOfLines={1}>
          {product.brand}
        </CustomText>
      </View>
      <View style={styles(theme).boxItem}>
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
  );
};

export default ProductAttributesBar;
