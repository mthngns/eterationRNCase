import {END_POINTS} from '../../../lib/end-points';
import {api} from '../../../redux/api';
import {Product} from '../../../types/types';

export const productsApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllProductList: builder.query<Product[], void>({
      query: () => `/${END_POINTS.products}`,
    }),

    getProductById: builder.query<Product, string>({
      query: id => `/${END_POINTS.products}/${id}`,
    }),
  }),

  overrideExisting: false,
});

export const {useGetProductByIdQuery, useGetAllProductListQuery} = productsApi;
