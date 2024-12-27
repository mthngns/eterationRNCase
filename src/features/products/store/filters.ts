import {RootState} from '../../../redux/store';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ModelsByBrand, SortMethod} from '../../../types/types';

interface FiltersState {
  brands: string[];
  models: string[];
  modelsByBrand: ModelsByBrand;
  modelsBySelectedBrands: string[];
  selectedBrands: string[];
  selectedModels: string[];
  sortMethod: SortMethod;
  page: number;
}

const initialState: FiltersState = {
  brands: [],
  models: [],
  modelsByBrand: {},
  modelsBySelectedBrands: [],
  selectedBrands: [],
  selectedModels: [],
  sortMethod: {sortBy: 'createdAt', order: 'desc'},
  page: 1,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    resetFilters: state => {
      state.selectedBrands = [];
      state.selectedModels = [];
      state.modelsBySelectedBrands = [];
      state.sortMethod = {sortBy: 'createdAt', order: 'desc'};
      state.page = 1;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSortMethod: (state, action) => {
      state.sortMethod = action.payload;
    },

    setBrands: (state, action: PayloadAction<string[]>) => {
      state.brands = action.payload;
    },
    setModels: (state, action: PayloadAction<string[]>) => {
      state.models = action.payload;
    },
    setSelectedBrands: (state, action) => {
      const selectedBrand = action.payload;

      if (state.selectedBrands.includes(selectedBrand)) {
        state.selectedBrands = state.selectedBrands.filter(
          brand => brand !== selectedBrand,
        );

        const removeModelsBySelectedBrands = new Set<string>();
        state.selectedBrands.forEach(brand => {
          const models = state.modelsByBrand[brand];
          if (models) {
            models.forEach(model => removeModelsBySelectedBrands.add(model));
          }
        });

        state.selectedModels = state.selectedModels.filter(model =>
          removeModelsBySelectedBrands.has(model),
        );
        state.modelsBySelectedBrands = Array.from(removeModelsBySelectedBrands);
      } else {
        state.selectedBrands.push(selectedBrand);

        const modelsBySelectedBrands = new Set<string>();
        state.selectedBrands.forEach(brand => {
          const models = state.modelsByBrand[brand];
          if (models) {
            models.forEach(model => modelsBySelectedBrands.add(model));
          }
        });

        state.selectedModels = state.selectedModels.filter(model =>
          modelsBySelectedBrands.has(model),
        );

        state.modelsBySelectedBrands = Array.from(modelsBySelectedBrands);
      }
    },

    setSelectedModels: (state, action: PayloadAction<string>) => {
      const model = action.payload;
      if (state.selectedModels.includes(model)) {
        state.selectedModels = state.selectedModels.filter(m => m !== model);
      } else {
        state.selectedModels.push(model);
      }
    },

    setModelsByBrand: (state, action: PayloadAction<ModelsByBrand>) => {
      state.modelsByBrand = action.payload;
    },
  },
});

export const {
  resetFilters,
  setPage,
  setSortMethod,
  setBrands,
  setModels,
  setSelectedBrands,
  setSelectedModels,
  setModelsByBrand,
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;

export const getFilters = (state: RootState) => state.filters;
export const getPage = (state: RootState) => state.filters.page;
export const getSelectedBrands = (state: RootState) =>
  state.filters.selectedBrands;
export const getSelectedModels = (state: RootState) =>
  state.filters.selectedModels;
export const getModelsBySelectedBrands = (state: RootState) =>
  state.filters.modelsBySelectedBrands;
export const getSortMethod = (state: RootState) => state.filters.sortMethod;
