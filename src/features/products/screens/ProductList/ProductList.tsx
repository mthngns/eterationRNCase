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

export const ProductList = ({navigation}: ProductListProps) => {
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
        <ActivityIndicator size="large" color="#6200ee" />
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
  const handleNavigateDetail = () => {
    navigation.navigate('ProductDetail', {id: '2'});
  };

  const loadMore = debounce(() => {
    console.log('son');
    if (!isLoading && data?.length === limit * page) {
      setPage(prevPage => prevPage + 1);
    }
  }, 300);

  return (
    <SafeAreaView style={styles.container}>
      <Text>ProductList</Text>
      <Icon name="rocket" size={30} color="#900" />
      <TouchableOpacity onPress={handleNavigateDetail}>
        <Text>Navigate to Product detail</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(resetProductsState())}>
        <Text>Reset Products State</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(api.util.resetApiState())}>
        <Text>Reset Products Cache</Text>
      </TouchableOpacity>
      <Text>
        {data?.length} sayfa: {page} isLoading = {isLoading ? 'true' : 'false'}{' '}
        data = {data?.length} x= {limit * page}
      </Text>

      <FlatList
        style={styles.listContainer}
        contentContainerStyle={{backgroundColor: 'pink', paddingBottom: 20}}
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => console.log(item.name)}>
            <View style={styles.productCard}>
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.3}
        ListFooterComponent={
          isFetching ? (
            <ActivityIndicator
              style={{marginVertical: 20}}
              size="small"
              color="#6200ee"
            />
          ) : null
        }
      />
    </SafeAreaView>
  );
};
