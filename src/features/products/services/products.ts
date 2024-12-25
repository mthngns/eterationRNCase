import {END_POINTS} from '../../../lib/end-points';
import {api} from '../../../redux/api';
import {Product} from '../../../types/types';

export const productsApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllProductList: builder.query<Product[], {page: number; limit: number}>({
      query: ({page, limit}) =>
        `/${END_POINTS.products}?page=${page}&limit=${limit}`,
      serializeQueryArgs: ({endpointName}) => endpointName,
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch({currentArg, previousArg}) {
        return currentArg?.page !== previousArg?.page;
      },
    }),

    getProductById: builder.query<Product, string>({
      query: id => `/${END_POINTS.products}/${id}`,
    }),
  }),

  overrideExisting: true,
});

export const {useGetProductByIdQuery, useGetAllProductListQuery} = productsApi;
