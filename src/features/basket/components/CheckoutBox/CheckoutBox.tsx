import {View} from 'react-native';
import React, {ReactElement} from 'react';
import {styles} from './CheckoutBox.styles';
import Box from '../../../../components/Box/Box';
import {useThemeContext} from '../../../../theme/themeContext';
import CustomText from '../../../../components/CustomText/CustomText';
import ThemedButton from '../../../../components/ThemedButton/ThemedButton';

const CheckoutBox = ({
  basketAmount,
  isBasketEmpty,
  onPress,
}: {
  basketAmount: string;
  isBasketEmpty: boolean;
  onPress: () => void;
}): ReactElement => {
  const {theme} = useThemeContext();
  return (
    <View style={styles(theme).amountBox}>
      <Box style={styles(theme).boxItem}>
        <CustomText style={styles(theme).priceTitle}>Total price</CustomText>
        <CustomText style={styles(theme).price} numberOfLines={1}>
          $ {basketAmount}
        </CustomText>
      </Box>
      <ThemedButton
        disabled={isBasketEmpty}
        title="Checkout"
        design="outline"
        style={styles(theme).checkoutButton}
        textStyle={[
          styles(theme).checkoutButtonText,
          isBasketEmpty && {color: theme.colors.disabledText},
        ]}
        onPress={onPress}
      />
    </View>
  );
};

export default CheckoutBox;
