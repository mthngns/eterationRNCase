import {useEffect} from 'react';
import {
  setBrands,
  setModels,
  setModelsByBrand,
} from '../features/products/store/filters';
import {ModelsByBrand} from '../types/types';
import {useAppDispatch} from '../redux/store';
import {useGetAllProductsQuery} from '../features/products/services/products';

export const useInitializeFilters = () => {
  const {data: products} = useGetAllProductsQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (products) {
      const brands = Array.from(
        new Set(products.map(product => product.brand)),
      );

      const models = Array.from(
        new Set(products.map(product => product.model)),
      );

      const modelsByBrand = products.reduce((acc, product) => {
        if (!acc[product.brand]) {
          acc[product.brand] = [];
        }
        if (!acc[product.brand].includes(product.model)) {
          acc[product.brand].push(product.model);
        }
        return acc;
      }, {} as ModelsByBrand);

      dispatch(setBrands(brands));
      dispatch(setModels(models));
      dispatch(setModelsByBrand(modelsByBrand));
    }
  }, [products, dispatch]);
};
