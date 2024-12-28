import React from 'react';
import {styles} from './Basket.styles';
import {useSelector} from 'react-redux';
import {View, FlatList} from 'react-native';
import {Product} from '../../../../types/types';
import {useAppDispatch} from '../../../../redux/store';
import {getBasket, resetBasketState} from '../../store/basket';
import {useThemeContext} from '../../../../theme/themeContext';
import CheckoutBox from '../../components/CheckoutBox/CheckoutBox';
import {BasketProps} from '../../../../navigation/navigation.types';
import IconButton from '../../../../components/IconButton/IconButton';
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
  const handleNavigateDetailPage = (id: Product['id']) => {
    navigation.navigate('Home', {
      screen: 'ProductDetail',
      params: {id: id},
    });
  };
  return (
    <CustomSafeArea>
      <ScreenHeader title="Basket" rightIcon="shopping" />
      <View style={styles(theme).content}>
        <IconButton
          icon="refresh"
          title="Reset Basket"
          disabled={isBasketEmpty}
          onPress={handleResetBasket}
        />
        <FlatList
          data={basket.productList}
          style={styles(theme).listContainer}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <HorizontalProductCard
              forUsingBasket
              product={item}
              onPress={() => handleNavigateDetailPage(item.id)}
            />
          )}
          ListEmptyComponent={<ListEmptyState title="Basket is empty..." />}
        />
        <CheckoutBox
          basketAmount={basket.basketAmount}
          isBasketEmpty={isBasketEmpty}
          onPress={handleResetBasket}
        />
      </View>
    </CustomSafeArea>
  );
};
