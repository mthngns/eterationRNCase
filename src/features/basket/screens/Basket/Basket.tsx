import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './Basket.styles';
import {useAppDispatch} from '../../../../redux/store';
import {useSelector} from 'react-redux';
import {addItemToBasket, getBasket, resetBasketState} from '../../store/basket';
import {Product} from '../../../../types/types';

export const Basket = () => {
  const dispatch = useAppDispatch();
  const basket = useSelector(getBasket);
  const handleAddItemToBasket = (product: Product) => {
    const isProductInBasket = basket.productList.some(
      item => item.id === product.id,
    );
    if (!isProductInBasket) {
      dispatch(addItemToBasket({...product, pcs: '1'}));
    }
  };
  return (
    <View style={styles.container}>
      <Text>{basket.basketAmount}</Text>
      <Button
        title="add item"
        onPress={() =>
          handleAddItemToBasket({
            createdAt: '2023-07-16T13:48:23.591Z',
            name: 'Mercedes Benz Challenger',
            image: 'https://loremflickr.com/640/480/abstract',
            price: '65.00',
            description:
              'Ea iusto at animi sit perferendis in assumenda neque. Pariatur neque odio nisi fugiat odio minus ab dicta. Architecto nemo odit at quo error consequatur tempora ullam. Doloribus illum dolorem autem voluptatibus ab quae fuga et necessitatibus. Architecto amet quas omnis eveniet.\nPlaceat perspiciatis quod atque commodi magnam ea esse. Aut consequatur excepturi eos eveniet molestias consequuntur quae. Ducimus magni atque delectus quisquam cumque nemo expedita. Dolores saepe hic distinctio.\nQuas iure labore aperiam perspiciatis libero. Mollitia exercitationem minus natus dolorem praesentium maxime dolor similique. Tempora atque reiciendis corrupti. Saepe hic facere. Reprehenderit mollitia blanditiis.',
            model: 'Grand Cherokee',
            brand: 'Nissan',
            id: '53',
          })
        }></Button>
      <Button
        title="reset"
        onPress={() => dispatch(resetBasketState())}></Button>
    </View>
  );
};
