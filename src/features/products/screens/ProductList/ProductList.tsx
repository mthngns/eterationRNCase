import React, {useState} from 'react';
import {ProductListProps} from '../../../../navigation/navigation.types';
import {
  View,
  Text,
  ActivityIndicator,
  Keyboard,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useGetAllProductListQuery} from '../../services/products';
import {useAppDispatch} from '../../../../redux/store';
import {resetProductsState} from '../../store/products';
import {api} from '../../../../redux/api';
import {debounce} from '../../../../utils/debounce';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import Box from '../../../../components/Box';
import ThemedButton from '../../../../components/ThemedButton';
import ProfileBar from '../../components/ProfileBar';
import SearchInput from '../../components/SearchInput';
import CustomText from '../../../../components/CustomText';
import ProductFlatList from '../../components/ProductFlatList';
import {useThemeContext} from '../../../../theme/themeContext';
import {Product} from '../../../../types/types';
import {CustomTheme} from '../../../../theme/themes';

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

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const insets = useSafeAreaInsets();
  const handleSearchFocus = () => navigation.navigate('Search');
  const handleSearchBlur = () => {
    setIsSearchFocused(false);
    Keyboard.dismiss();
  };
  const filteredData = searchQuery
    ? data?.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : data;
  if (isLoading) {
    return (
      <View style={styles(theme).loader}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles(theme).error}>
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
    <SafeAreaView style={styles(theme).container}>
      <ProfileBar />

      <SearchInput
        autoFocus={false}
        placeholder="Search by name..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        onPress={handleSearchFocus}
      />
      {/* <Modal
        animationType="none"
        transparent={false}
        visible={isSearchFocused}
        onRequestClose={() => setIsSearchFocused(false)}>
        <View
          style={[
            styles(theme).modalContainer,
            {
              paddingTop: insets.top,
              paddingBottom: insets.bottom,
              paddingLeft: insets.left,
              paddingRight: insets.right,
            },
          ]}>
          <SearchInput
            placeholder="Search by name..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Icon
            name="close"
            size={20}
            color={'red'}
            onPress={handleSearchBlur}
          />

          {isLoading ? (
            <View style={styles(theme).loader}>
              <Text>Loading...</Text>
            </View>
          ) : (
            <FlatList
              data={filteredData}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <TouchableOpacity onPress={() => handleNavigateDetail(item.id)}>
                  <View style={styles(theme).item}>
                    <Text style={styles(theme).itemText}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              )}
              ListEmptyComponent={
                <View style={styles(theme).empty}>
                  <Text>No results found</Text>
                </View>
              }
            />
          )}
        </View>
      </Modal> */}

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

const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: theme.size.xs,
      rowGap: theme.size.md,
    },
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    error: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    searchFocused: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1,
      backgroundColor: theme.colors.card,
      height: '100%',
      flex: 1,
      marginBottom: 0,
      paddingBottom: 0,
    },
    modalContainer: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: 10,
    },
    item: {
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    itemText: {
      fontSize: 16,
      color: theme.colors.text,
    },
    empty: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
