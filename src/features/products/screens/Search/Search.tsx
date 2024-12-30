import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  FlatList,
  ActivityIndicator,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Search.styles';
import {useThemeContext} from '../../../../theme/themeContext';
import SearchInput from '../../components/SearchInput/SearchInput';
import {SearchProps} from '../../../../navigation/navigation.types';
import CustomText from '../../../../components/CustomText/CustomText';
import {useGetProductsBySearchTermQuery} from '../../services/products';
import {CustomSafeArea} from '../../../../components/CustomSafeArea/CustomSafeArea';
import HorizontalProductCard from '../../../../components/HorizontalProductCard/HorizontalProductCard';

const Search = ({navigation}: SearchProps) => {
  const {theme} = useThemeContext();
  const [searchQuery, setSearchQuery] = useState('');

  const {data, isLoading, isFetching, error} = useGetProductsBySearchTermQuery(
    searchQuery,
    {
      skip: !searchQuery,
    },
  );

  return (
    <KeyboardAvoidingView
      style={styles(theme).avoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <CustomSafeArea>
          <View style={styles(theme).searchContainer}>
            <SearchInput
              style={styles(theme).input}
              autoFocus={true}
              placeholder="Search by name..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              returnKeyType="done"
            />
            <TouchableOpacity
              style={styles(theme).button}
              onPress={() => navigation.goBack()}>
              <CustomText style={styles(theme).buttonText}>Vazgeç</CustomText>
            </TouchableOpacity>
          </View>
          {(isFetching || isLoading) && (
            <ActivityIndicator size="large" color={theme.colors.primary} />
          )}
          {!isFetching && !isLoading && error && (
            <CustomText style={styles(theme).errorText}>
              No products found. Please try something else.
            </CustomText>
          )}
          {data && !error && !isFetching && !isLoading && (
            <View style={styles(theme).resultsContainer}>
              <FlatList
                data={data}
                contentContainerStyle={styles(theme).listContent}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <HorizontalProductCard
                    product={item}
                    onPress={() =>
                      navigation.navigate('ProductDetail', {id: item.id})
                    }
                  />
                )}
              />
            </View>
          )}
        </CustomSafeArea>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Search;
