/* eslint-disable radix */
import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../../redux/store';
import {ExtendedProduct} from '../../../types/types';

export interface BasketState {
  productList: ExtendedProduct[];
  basketAmount: string;
}

const initialState: BasketState = {
  productList: [],
  basketAmount: '0,00',
};

const calculateBasketAmount = (products: ExtendedProduct[]): string => {
  return products
    .reduce(
      (total, product) =>
        total + parseInt(product.price) * parseInt(product.pcs),
      0,
    )
    .toFixed(2)
    .toString();
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    resetBasketState: () => initialState,
    addItemToBasket: (state, action) => {
      const existingProduct = state.productList.find(
        item => item.id === action.payload.id,
      );
      if (!existingProduct) {
        state.productList.push(action.payload);
        state.basketAmount = calculateBasketAmount(state.productList);
      }
    },
    incrementProductQuantity: (state, action) => {
      const product = state.productList.find(
        item => item.id === action.payload,
      );
      if (product) {
        product.pcs = (parseInt(product.pcs) + 1).toString();
        state.basketAmount = calculateBasketAmount(state.productList);
      }
    },
    decrementProductQuantity: (state, action) => {
      const product = state.productList.find(
        item => item.id === action.payload,
      );
      if (product) {
        if (parseInt(product.pcs) > 1) {
          product.pcs = (parseInt(product.pcs) - 1).toString();
          state.basketAmount = calculateBasketAmount(state.productList);
        } else {
          state.productList = state.productList.filter(
            item => item.id !== action.payload,
          );
          state.basketAmount = calculateBasketAmount(state.productList);
        }
      }
    },

    removeItemToBasket: (state, action) => {
      state.productList = state.productList.filter(
        item => item.id !== action.payload,
      );
      state.basketAmount = calculateBasketAmount(state.productList);
    },
  },
});

export const {
  resetBasketState,
  addItemToBasket,
  incrementProductQuantity,
  decrementProductQuantity,
  removeItemToBasket,
} = basketSlice.actions;
export const basketReducer = basketSlice.reducer;

export const getBasket = (state: RootState) => state.basket;
