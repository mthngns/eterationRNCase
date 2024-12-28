import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../../redux/store';
import {Product} from '../../../types/types';

export interface FavoritesState {
  productList: Product[];
}

const initialState: FavoritesState = {
  productList: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    resetFavoritesState: () => initialState,
    addItemToFav: (state, action) => {
      const existingProduct = state.productList.find(
        item => item.id === action.payload.id,
      );
      if (!existingProduct) {
        state.productList.push(action.payload);
      }
    },
    removeItemToFav: (state, action) => {
      state.productList = state.productList.filter(
        item => item.id !== action.payload,
      );
    },
  },
});

export const {resetFavoritesState, addItemToFav, removeItemToFav} =
  favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;

export const getFavorites = (state: RootState) => state.favorites;
