import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../../redux/store';
import {Product} from '../../../types/types';

export interface ProductsState {
  products: Product[] | null;
}

const initialState: ProductsState = {
  products: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    resetProductsState: () => initialState,
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const {setProducts, resetProductsState} = productsSlice.actions;
export const productsReducer = productsSlice.reducer;

export const getProducts = (state: RootState) => state.products;
