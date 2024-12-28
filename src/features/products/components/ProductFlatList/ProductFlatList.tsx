import React from 'react';
import {styles} from './ProductFlatList.styles';
import {Product} from '../../../../types/types';
import {useThemeContext} from '../../../../theme/themeContext';
import {FlatList, View, ActivityIndicator} from 'react-native';
import ProductFlatListCard from '../ProductFlatListCard/ProductFlatListCard';
import LoaderAndError from '../../../../components/LoaderAndError/LoaderEndError';

interface ProductFlatListProps {
  data: Product[] | undefined;
  isLoading: boolean;
  isError: boolean;
  isFetching: boolean;
  onRefresh: () => void;
  onLoadMore: () => void;
  onItemPress: (item: Product) => void;
}

const ProductFlatList: React.FC<ProductFlatListProps> = ({
  data,
  isFetching,
  isLoading,
  isError,
  onRefresh,
  onLoadMore,
  onItemPress,
}) => {
  const {theme} = useThemeContext();

  if (!data && (isLoading || isError || isFetching)) {
    return (
      <LoaderAndError
        isLoading={isLoading}
        isError={isError}
        isFetching={isFetching}
      />
    );
  }

  return (
    <FlatList
      style={styles(theme).listContainer}
      contentContainerStyle={styles(theme).contentContainer}
      data={data}
      numColumns={2}
      columnWrapperStyle={styles(theme).columnWrap}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      renderItem={({item}) => (
        <ProductFlatListCard item={item} onPress={onItemPress} />
      )}
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.1}
      refreshing={isFetching}
      onRefresh={onRefresh}
      ListFooterComponent={
        <View style={styles(theme).footer}>
          {isFetching ? (
            <ActivityIndicator
              style={styles(theme).indicator}
              size="small"
              color={theme.colors.primary}
            />
          ) : null}
        </View>
      }
    />
  );
};

export default ProductFlatList;
