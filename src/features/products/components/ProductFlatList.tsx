import React from 'react';
import {Product} from '../../../types/types';
import {CustomTheme} from '../../../theme/themes';
import ProductFlatListCard from './ProductFlatListCard';
import {useThemeContext} from '../../../theme/themeContext';
import {FlatList, View, ActivityIndicator, StyleSheet} from 'react-native';

interface ProductFlatListProps {
  data: Product[] | undefined;
  isFetching: boolean;
  isLoading: boolean;
  onRefresh: () => void;
  onLoadMore: () => void;
  onItemPress: (item: Product) => void;
}

const ProductFlatList: React.FC<ProductFlatListProps> = ({
  data,
  isFetching,
  isLoading,
  onRefresh,
  onLoadMore,
  onItemPress,
}) => {
  const {theme} = useThemeContext();

  return (
    <FlatList
      style={styles(theme).listContainer}
      contentContainerStyle={styles(theme).contentContainer}
      data={data}
      numColumns={2}
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
    contentContainer: {
      paddingBottom: theme.size.lg,
    },
    footer: {
      height: 50,
    },
    indicator: {
      marginVertical: theme.size.xl,
      paddingBottom: theme.size.xxl,
    },
  });

export default ProductFlatList;
