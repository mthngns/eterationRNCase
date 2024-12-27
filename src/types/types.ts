export interface ModelsByBrand {
  [brand: string]: string[];
}

export interface Product {
  createdAt: string;
  name: string;
  image: string;
  price: string;
  description: string;
  model: string;
  brand: string;
  id: string;
}

export interface ExtendedProduct extends Product {
  pcs: string;
}

export interface SortMethod {
  sortBy: 'createdAt' | 'price';
  order: 'asc' | 'desc';
}

export interface FilterMethod {
  brands: string[];
  models: string[];
}

export type SortBy = {
  'New to old': {sortBy: 'createdAt'; order: 'desc'};
  'Old to new': {sortBy: 'createdAt'; order: 'asc'};
  'Price high to low': {sortBy: 'price'; order: 'desc'};
  'Price low to high': {sortBy: 'price'; order: 'asc'};
};
