import CustomText from '../CustomText';
import {Image, View} from 'react-native';
import React, {ReactElement} from 'react';
import {Product} from '../../types/types';
import {styles} from './BrandBadge.styles';
import brandIcons from '../../utils/brandIcons';
import {useThemeContext} from '../../theme/themeContext';

interface BrandPageProps {
  product: Product;
}

const BrandBadge = ({product}: BrandPageProps): ReactElement => {
  const {theme} = useThemeContext();
  return (
    <View style={styles(theme).badgeBox}>
      <Image
        source={
          brandIcons[product.brand.replaceAll(' ', '')] || brandIcons.Ferrari
        }
        style={styles(theme).brandIcon}
        resizeMode="contain"
      />
      <CustomText
        style={styles(theme).productBrand}
        numberOfLines={1}
        ellipsizeMode="tail">
        {product.brand} / {product.model}
      </CustomText>
    </View>
  );
};

export default BrandBadge;
