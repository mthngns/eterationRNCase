import React from 'react';
import {useSelector} from 'react-redux';
import {styles} from './Favorites.styles';
import {FlatList, View} from 'react-native';
import {Product} from '../../../../types/types';
import {useAppDispatch} from '../../../../redux/store';
import {useThemeContext} from '../../../../theme/themeContext';
import IconButton from '../../../../components/IconButton/IconButton';
import {FavoritesProps} from '../../../../navigation/navigation.types';
import {getFavorites, resetFavoritesState} from '../../store/favorites';
import ScreenHeader from '../../../../components/ScreenHeader/ScreenHeader';
import ListEmptyState from '../../../../components/ListEmptyState/ListEmptyState';
import {CustomSafeArea} from '../../../../components/CustomSafeArea/CustomSafeArea';
import HorizontalProductCard from '../../../../components/HorizontalProductCard/HorizontalProductCard';

export const Favorites = ({navigation}: FavoritesProps) => {
  const {theme} = useThemeContext();
  const dispatch = useAppDispatch();
  const favorites = useSelector(getFavorites);
  const isFavEmpty = favorites.productList.length === 0;

  const handleResetFavs = () => {
    dispatch(resetFavoritesState());
  };
  const handleNavigateDetailPage = (id: Product['id']) => {
    navigation.navigate('Home', {
      screen: 'ProductDetail',
      params: {id: id},
    });
  };
  return (
    <CustomSafeArea>
      <ScreenHeader title="Favorites" rightIcon="heart" />
      <View style={styles(theme).content}>
        <IconButton
          disabled={isFavEmpty}
          onPress={handleResetFavs}
          icon={'refresh'}
          title="Reset Favorites"
        />
        <FlatList
          data={favorites.productList}
          style={styles(theme).listContainer}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <HorizontalProductCard
              product={item}
              onPress={() => handleNavigateDetailPage(item.id)}
            />
          )}
          ListEmptyComponent={<ListEmptyState title="Favorites is empty..." />}
        />
      </View>
    </CustomSafeArea>
  );
};
