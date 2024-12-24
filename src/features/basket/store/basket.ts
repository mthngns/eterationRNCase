import {createSlice} from '@reduxjs/toolkit';
import {ExtendedProduct} from '../../../lib/types';
import {RootState} from '../../../redux/store';

export interface BasketState {
  productList: ExtendedProduct[];
  basketAmount: string;
}

const initialState: BasketState = {
  productList: [],
  basketAmount: '0.00',
};

const calculateBasketAmount = (products: ExtendedProduct[]): string => {
  return products
    .reduce(
      (total, product) =>
        total + parseInt(product.price) * parseInt(product.pcs),
      0,
    )
    .toFixed(2)
    .toString(); // İsteğe bağlı olarak ondalıklı sayıyı iki basamağa yuvarlayabilirsiniz
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    resetBasketState: () => initialState,
    addItemToBasket: (state, action) => {
      state.productList.push(action.payload);
      state.basketAmount = calculateBasketAmount(state.productList);
    },
    incrementProductQuantity: (state, action) => {
      const product = state.productList.find(
        product => product.id === action.payload,
      );
      if (product) {
        product.pcs = (parseInt(product.pcs) + 1).toString();
        state.basketAmount = calculateBasketAmount(state.productList);
      }
    },
    decrementProductQuantity: (state, action) => {
      const product = state.productList.find(
        product => product.id === action.payload,
      );
      if (product) {
        if (parseInt(product.pcs) > 1) {
          product.pcs = (parseInt(product.pcs) - 1).toString();
          state.basketAmount = calculateBasketAmount(state.productList);
        } else {
          state.productList = state.productList.filter(
            product => product.id !== action.payload,
          );
          state.basketAmount = calculateBasketAmount(state.productList);
        }
      }
    },
  },
});

export const {
  resetBasketState,
  addItemToBasket,
  incrementProductQuantity,
  decrementProductQuantity,
} = basketSlice.actions;
export const basketReducer = basketSlice.reducer;

export const getBasket = (state: RootState) => state.basket;
