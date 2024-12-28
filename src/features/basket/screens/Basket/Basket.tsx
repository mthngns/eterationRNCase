import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {styles} from './Basket.styles';
import {useAppDispatch} from '../../../../redux/store';
import {useSelector} from 'react-redux';
import {getBasket, resetBasketState} from '../../store/basket';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useThemeContext} from '../../../../theme/themeContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomText from '../../../../components/CustomText';
import Box from '../../../../components/Box';
import ThemedButton from '../../../../components/ThemedButton';
import ListEmptyState from '../../../../components/ListEmptyState/ListEmptyState';
import HorizontalProductCard from '../../../../components/HorizontalProductCard/HorizontalProductCard';
import {BasketProps} from '../../../../navigation/navigation.types';

export const Basket = ({navigation}: BasketProps) => {
  const insets = useSafeAreaInsets();
  const {theme} = useThemeContext();
  const dispatch = useAppDispatch();
  const basket = useSelector(getBasket);
  const isBasketEmpty = basket.productList.length === 0;

  const handleResetBasket = () => {
    dispatch(resetBasketState());
  };
  return (
    <View
      style={[
        styles(theme).container,
        {paddingTop: insets.top, paddingBottom: theme.size.md},
      ]}>
      <View style={styles(theme).header}>
        <Text style={styles(theme).headerTitle}>Basket</Text>
        <Icon
          name="shopping"
          size={theme.size.xl}
          color={theme.colors.primary}
        />
      </View>
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
          contentContainerStyle={styles(theme).listContentContainer}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <HorizontalProductCard
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
    </View>
  );
};
