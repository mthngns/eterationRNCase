import React, {ReactElement} from 'react';
import {styles} from './QuantitySelector.styles';
import CustomText from '../CustomText/CustomText';
import {ExtendedProduct} from '../../types/types';
import {View, TouchableOpacity} from 'react-native';
import {useThemeContext} from '../../theme/themeContext';
import Icon from 'react-native-vector-icons/MaterialIcons';

const QuantitySelector = ({
  product,
  increment,
  decrement,
}: {
  product: ExtendedProduct;
  increment: () => void;
  decrement: () => void;
}): ReactElement => {
  const {theme} = useThemeContext();

  return (
    <View style={styles(theme).quantityBox}>
      <TouchableOpacity
        style={[styles(theme).iconButton, {transform: [{rotate: '180deg'}]}]}
        onPress={decrement}>
        <Icon
          name="arrow-forward-ios"
          size={theme.size.lg}
          color={theme.colors.text}
        />
      </TouchableOpacity>
      <CustomText style={styles(theme).quantityText}>{product.pcs}</CustomText>
      <TouchableOpacity
        style={[
          styles(theme).iconButton,
          {backgroundColor: theme.colors.primary},
        ]}
        onPress={increment}>
        <Icon
          name="arrow-forward-ios"
          size={theme.size.lg}
          color={theme.colors.light}
        />
      </TouchableOpacity>
    </View>
  );
};

export default QuantitySelector;
