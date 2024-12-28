import React from 'react';
import {styles} from './Favorites.styles';
import CustomText from '../../../../components/CustomText';
import {useThemeContext} from '../../../../theme/themeContext';
import {CustomSafeArea} from '../../../../components/CustomSafeArea/CustomSafeArea';
import ScreenHeader from '../../../../components/ScreenHeader/ScreenHeader';
import {FlatList, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HorizontalProductCard from '../../../../components/HorizontalProductCard/HorizontalProductCard';
import {FavoritesProps} from '../../../../navigation/navigation.types';
import ListEmptyState from '../../../../components/ListEmptyState/ListEmptyState';
import {useSelector} from 'react-redux';
import {getFavorites, resetFavoritesState} from '../../store/favorites';
import {useAppDispatch} from '../../../../redux/store';

export const Favorites = ({navigation}: FavoritesProps) => {
  const {theme} = useThemeContext();
  const dispatch = useAppDispatch();
  const favorites = useSelector(getFavorites);
  const isFavEmpty = favorites.productList.length === 0;

  const handleResetFavs = () => {
    dispatch(resetFavoritesState());
  };
  return (
    <CustomSafeArea>
      <ScreenHeader title="Favorites" rightIcon="heart" />
      <View style={styles(theme).content}>
        <TouchableOpacity
          disabled={isFavEmpty}
          style={styles(theme).buttonBox}
          onPress={handleResetFavs}>
          <Icon
            name="refresh"
            size={theme.size.xl}
            color={
              isFavEmpty ? theme.colors.disabledText : theme.colors.primary
            }
          />
          <CustomText style={styles(theme).secondaryText}>
            Reset Favorites
          </CustomText>
        </TouchableOpacity>
        <FlatList
          data={favorites.productList}
          style={styles(theme).listContainer}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <HorizontalProductCard
              product={item}
              onPress={() =>
                navigation.navigate('Home', {
                  screen: 'ProductDetail',
                  params: {id: item.id},
                })
              }
            />
          )}
          ListEmptyComponent={<ListEmptyState title="Favorites is empty..." />}
        />
      </View>
    </CustomSafeArea>
  );
};
