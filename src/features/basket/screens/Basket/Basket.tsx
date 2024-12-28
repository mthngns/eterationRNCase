import React from 'react';
import {styles} from './Basket.styles';
import {useSelector} from 'react-redux';
import Box from '../../../../components/Box';
import {useAppDispatch} from '../../../../redux/store';
import CustomText from '../../../../components/CustomText';
import {View, TouchableOpacity, FlatList} from 'react-native';
import ThemedButton from '../../../../components/ThemedButton';
import {getBasket, resetBasketState} from '../../store/basket';
import {useThemeContext} from '../../../../theme/themeContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BasketProps} from '../../../../navigation/navigation.types';
import ScreenHeader from '../../../../components/ScreenHeader/ScreenHeader';
import ListEmptyState from '../../../../components/ListEmptyState/ListEmptyState';
import {CustomSafeArea} from '../../../../components/CustomSafeArea/CustomSafeArea';
import HorizontalProductCard from '../../../../components/HorizontalProductCard/HorizontalProductCard';

export const Basket = ({navigation}: BasketProps) => {
  const {theme} = useThemeContext();
  const dispatch = useAppDispatch();
  const basket = useSelector(getBasket);
  const isBasketEmpty = basket.productList.length === 0;

  const handleResetBasket = () => {
    dispatch(resetBasketState());
  };
  return (
    <CustomSafeArea>
      <ScreenHeader title="Basket" rightIcon="shopping" />
      <View style={styles(theme).content}>
        <TouchableOpacity
          disabled={isBasketEmpty}
          style={styles(theme).buttonBox}
          onPress={handleResetBasket}>
          <Icon
            name="refresh"
            size={theme.size.xl}
            color={
              isBasketEmpty ? theme.colors.disabledText : theme.colors.primary
            }
          />
          <CustomText style={styles(theme).secondaryText}>
            Reset Basket
          </CustomText>
        </TouchableOpacity>
        <FlatList
          data={basket.productList}
          style={styles(theme).listContainer}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <HorizontalProductCard
              forUsingBasket
              product={item}
              onPress={() =>
                navigation.navigate('Home', {
                  screen: 'ProductDetail',
                  params: {id: item.id},
                })
              }
            />
          )}
          ListEmptyComponent={<ListEmptyState title="Basket is empty..." />}
        />
        <View style={styles(theme).amountBox}>
          <Box style={styles(theme).boxItem}>
            <CustomText style={styles(theme).priceTitle}>
              Total price
            </CustomText>
            <CustomText style={styles(theme).price} numberOfLines={1}>
              $ {basket.basketAmount}
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
            onPress={handleResetBasket}
          />
        </View>
      </View>
    </CustomSafeArea>
  );
};
