import React from 'react';
import {Product} from '../../../types/types';
import {CustomTheme} from '../../../theme/themes';
import ProductFlatListCard from './ProductFlatListCard';
import {useThemeContext} from '../../../theme/themeContext';
import LoaderAndError from '../../../components/LoaderEndError';
import {FlatList, View, ActivityIndicator, StyleSheet} from 'react-native';

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

const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    listContainer: {
      flex: 1,
    },
    columnWrap: {
      justifyContent: 'space-between',
    },
    contentContainer: {
      paddingBottom: theme.size.lg,
      rowGap: theme.size.md,
    },
    footer: {
      height: 48,
    },
    indicator: {
      marginVertical: theme.size.xl,
      paddingBottom: theme.size.xxl,
    },
  });

export default ProductFlatList;
