import {SortBy} from '../types/types';

export const SORT_METHODS: SortBy = {
  ['New to old']: {sortBy: 'createdAt', order: 'desc'},
  ['Old to new']: {sortBy: 'createdAt', order: 'asc'},
  ['Price high to low']: {sortBy: 'price', order: 'desc'},
  ['Price low to high']: {sortBy: 'price', order: 'asc'},
};
export const LIMIT = 12;
