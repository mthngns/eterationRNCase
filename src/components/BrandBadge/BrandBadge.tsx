import React, {ReactElement} from 'react';
import {Product} from '../../types/types';
import {styles} from './BrandBadge.styles';
import brandIcons from '../../utils/brandIcons';
import CustomText from '../CustomText/CustomText';
import {Image, ImageStyle, View} from 'react-native';
import {useThemeContext} from '../../theme/themeContext';

interface BrandPageProps {
  product: Product;
  iconColor?: ImageStyle['tintColor'];
}

const BrandBadge = ({product, iconColor}: BrandPageProps): ReactElement => {
  const {theme} = useThemeContext();
  return (
    <View style={styles(theme).badgeBox}>
      <Image
        source={
          brandIcons[product.brand.replaceAll(' ', '')] || brandIcons.Ferrari
        }
        style={[
          styles(theme).brandIcon,
          iconColor ? {tintColor: iconColor} : null,
        ]}
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
