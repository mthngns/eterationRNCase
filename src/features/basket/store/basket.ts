/* eslint-disable radix */
import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../../redux/store';
import {ExtendedProduct} from '../../../types/types';

export interface BasketState {
  productList: ExtendedProduct[];
  basketAmount: string;
}

const initialState: BasketState = {
  productList: [
    {
      createdAt: '2023-08-01T12:00:00Z',
      pcs: '1',
      name: 'Apple Macbook',
      image: '',
      price: '215',
      description:
        'Other code such as selectors can use the imported `RootState` type',
      model: 'Pro',
      brand: 'Apple',
      id: '12',
    },
  ],
  basketAmount: '215',
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
      state.productList.push(action.payload);
      state.basketAmount = calculateBasketAmount(state.productList);
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
