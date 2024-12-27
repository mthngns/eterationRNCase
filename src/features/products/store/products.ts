import {Product} from '../../../types/types';
import {RootState} from '../../../redux/store';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    resetProductsState: () => initialState,
    setProducts: (state, action: PayloadAction<Product[]>) => {
      const existingIds = new Set(state.products?.map(item => item.id));
      const filteredNewItems = action.payload.filter(
        item => !existingIds.has(item.id),
      );
      state.products = [...state.products, ...filteredNewItems];
    },
  },
});

export const {setProducts, resetProductsState} = productsSlice.actions;
export const productsReducer = productsSlice.reducer;

export const getProducts = (state: RootState) => state.products.products;
