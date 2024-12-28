import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  FlatList,
  ActivityIndicator,
  Platform,
} from 'react-native';
import {styles} from './Search.styles';
import SearchInput from '../../components/SearchInput';
import CustomText from '../../../../components/CustomText';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useThemeContext} from '../../../../theme/themeContext';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearchProps} from '../../../../navigation/navigation.types';
import {useGetProductsBySearchTermQuery} from '../../services/products';
import HorizontalProductCard from '../../../../components/HorizontalProductCard/HorizontalProductCard';

const Search = ({navigation}: SearchProps) => {
  const insets = useSafeAreaInsets();
  const {theme} = useThemeContext();
  const [searchQuery, setSearchQuery] = useState('');

  const {data, isFetching, error} = useGetProductsBySearchTermQuery(
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
        <View
          style={[
            styles(theme).container,
            {paddingTop: insets.top, paddingBottom: theme.size.md},
          ]}>
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

          <View style={styles(theme).resultsContainer}>
            {isFetching && (
              <ActivityIndicator size="large" color={theme.colors.primary} />
            )}
            {!isFetching && data && searchQuery && !error && (
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
            )}
            {error && (
              <CustomText style={styles(theme).errorText}>
                No products found. Please try something else.
              </CustomText>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Search;
