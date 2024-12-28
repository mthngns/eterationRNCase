import {
  getPage,
  getSelectedBrands,
  getSelectedModels,
  getSortMethod,
  setPage,
} from '../../store/filters';
import {
  getProducts,
  resetProductsState,
  setProducts,
} from '../../store/products';
import {useSelector} from 'react-redux';
import {api} from '../../../../redux/api';
import {styles} from './ProductList.styles';
import {Product} from '../../../../types/types';
import {LIMIT} from '../../../../lib/constants';
import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import ProfileBar from '../../components/ProfileBar';
import SearchInput from '../../components/SearchInput';
import {useAppDispatch} from '../../../../redux/store';
import FiltersMenu from '../../components/FiltersMenu';
import {commonStyles} from '../../../../theme/commonStyles';
import ProductFlatList from '../../components/ProductFlatList';
import {useThemeContext} from '../../../../theme/themeContext';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ProductListProps} from '../../../../navigation/navigation.types';
import {useGetProductsWithPaginationQuery} from '../../services/products';

export const ProductList = ({navigation}: ProductListProps) => {
  const {theme} = useThemeContext();
  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => setModalVisible(!isModalVisible);

  const page = useSelector(getPage);
  const products = useSelector(getProducts);
  const selectedBrands = useSelector(getSelectedBrands);
  const selectedModels = useSelector(getSelectedModels);
  const sortMethod = useSelector(getSortMethod);

  const {data, isLoading, isFetching, isError} =
    useGetProductsWithPaginationQuery({
      page: page,
      limit: LIMIT,
      sort: sortMethod.sortBy,
      order: sortMethod.order,
      brands: selectedBrands,
      models: selectedModels,
    });

  const handleNavigateDetail = (id: Product['id']) => {
    navigation.navigate('ProductDetail', {id: id});
  };

  const handleNavigateSearch = () => navigation.navigate('Search');

  const loadMore = () => {
    if (
      data &&
      !isLoading &&
      !isFetching &&
      products?.length === LIMIT * page
    ) {
      dispatch(setPage(page + 1));
    }
  };

  const onRefresh = () => {
    dispatch(api.util.resetApiState());
    dispatch(resetProductsState());
    if (page !== 1) {
      dispatch(setPage(1));
    }
  };

  useEffect(() => {
    if (data) {
      dispatch(setProducts(data));
    }
  }, [data, dispatch]);

  return (
    <View
      style={[
        styles(theme).container,
        {paddingTop: insets.top, paddingBottom: theme.size.md},
      ]}>
      <ProfileBar />
      <View style={{...commonStyles(theme).rowCenter}}>
        <SearchInput
          style={{...commonStyles(theme).flexBox}}
          autoFocus={false}
          placeholder="Search by name..."
          onPress={handleNavigateSearch}
        />
        <TouchableOpacity
          onPress={toggleModal}
          style={styles(theme).filterMenuButton}>
          <Icon
            name="filter-menu-outline"
            size={24}
            color={theme.colors.primary}
            style={styles(theme).filterMenuIcon}
          />
        </TouchableOpacity>
      </View>
      <ProductFlatList
        data={products}
        isLoading={isLoading || isFetching}
        isError={isError}
        isFetching={isFetching}
        onRefresh={onRefresh}
        onLoadMore={loadMore}
        onItemPress={product => handleNavigateDetail(product.id)}
      />
      <FiltersMenu isVisible={isModalVisible} onClose={toggleModal} />
    </View>
  );
};
