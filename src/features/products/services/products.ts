import {api} from '../../../redux/api';
import {END_POINTS} from '../../../lib/end-points';
import {FilterMethod, Product, SortMethod} from '../../../types/types';

export const productsApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllProducts: builder.query<Product[], void>({
      query: () => `/${END_POINTS.products}`,
    }),

    getProductsWithPagination: builder.query<
      Product[],
      {
        page: number;
        limit: number;
        sort: SortMethod['sortBy'];
        order: SortMethod['order'];
        brands: FilterMethod['brands'];
        models: FilterMethod['models'];
      }
    >({
      query: ({page, limit, sort, order, brands, models}) => {
        const sortQuery = `/${END_POINTS.products}?page=${page}&limit=${limit}&sortBy=${sort}&order=${order}`;
        const brandsQuery = `&brand=${brands.join('|')}`;
        const modelsQuery = `&model=${models.join('|')}`;
        return `${sortQuery}${brandsQuery}${modelsQuery}`;
      },
      forceRefetch({currentArg, previousArg}) {
        return currentArg !== previousArg;
      },
    }),

    getProductById: builder.query<Product, string>({
      query: id => `/${END_POINTS.products}/${id}`,
    }),

    getProductsBySearchTerm: builder.query<Product[], string>({
      query: search => `/${END_POINTS.products}?name=${search}`,
    }),
  }),

  overrideExisting: true,
});

export const {
  useGetAllProductsQuery,
  useGetProductsWithPaginationQuery,
  useGetProductByIdQuery,
  useGetProductsBySearchTermQuery,
} = productsApi;
