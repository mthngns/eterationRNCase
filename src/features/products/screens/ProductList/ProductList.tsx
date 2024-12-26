import React, {useState} from 'react';
import {styles} from './ProductList.styles';
import {ProductListProps} from '../../../../navigation/navigation.types';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useGetAllProductListQuery} from '../../services/products';
import {useAppDispatch} from '../../../../redux/store';
import {resetProductsState} from '../../store/products';
import {api} from '../../../../redux/api';
import {debounce} from '../../../../utils/debounce';
import {SafeAreaView} from 'react-native-safe-area-context';
import Box from '../../../../components/Box';
import ThemedButton from '../../../../components/ThemedButton';
import ProfileBar from '../../components/ProfileBar';
import SearchInput from '../../components/SearchInput';
import CustomText from '../../../../components/CustomText';
import ProductFlatList from '../../components/ProductFlatList';
import {useThemeContext} from '../../../../theme/themeContext';
import {Product} from '../../../../types/types';

export const ProductList = ({navigation}: ProductListProps) => {
  const {theme} = useThemeContext();
  const [page, setPage] = useState(1);
  const limit = 12;
  const dispatch = useAppDispatch();
  const {data, isLoading, isFetching, isError} = useGetAllProductListQuery({
    page,
    limit,
  });
  // console.log({data, isLoading, isFetching, isError});

  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.error}>
        <Text>Something wents wrong! Error : {isError}</Text>
      </View>
    );
  }
  const handleNavigateDetail = (id: Product['id']) => {
    navigation.navigate('ProductDetail', {id: id});
  };

  const loadMore = debounce(() => {
    console.log('yükle');
    if (!isLoading && data?.length === limit * page) {
      console.log('query tetiklendi: yükle');
      setPage(prevPage => prevPage + 1);
    }
  }, 300);

  const onRefresh = () => {
    console.log('yenile');
    if (data && data.length > limit) {
      dispatch(api.util.resetApiState());
      console.log('query tetiklendi: yenile');
    }
    if (page > 1) {
      setPage(1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Box>
        <ProfileBar />
        <SearchInput
          placeholder="Search by name..."
          onIconPress={() => console.log('asd')}
        />
      </Box>
      {/* <ThemedButton
        design="outline"
        title="Add to cart"
        onPress={() => console.log('ss')}
      /> */}
      {/* <Text>ProductList</Text>
      <Icon name="rocket" size={30} color="#900" />
      <TouchableOpacity onPress={handleNavigateDetail}>
        <Text>Navigate to Product detail</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(resetProductsState())}>
        <Text>Reset Products State</Text>
      </TouchableOpacity>
      */}
      {/* <ThemedButton
        design="outline"
        title="Reset Query Cache"
        onPress={() => {
          dispatch(api.util.resetApiState());
          setPage(1);
        }}
      />
      <CustomText>
        sayfa: {page}, isLoading = {isLoading ? 'true' : 'false'}, data ={' '}
        {data?.length}, x= {limit * page}
      </CustomText> */}
      <ProductFlatList
        data={data}
        isLoading={isLoading}
        isFetching={isFetching}
        onRefresh={onRefresh}
        onLoadMore={loadMore}
        onItemPress={product => handleNavigateDetail(product.id)}
      />
    </SafeAreaView>
  );
};
