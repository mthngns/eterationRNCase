import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {CustomTheme} from '../../../../theme/themes';
import SearchInput from '../../components/SearchInput';
import CustomText from '../../../../components/CustomText';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useThemeContext} from '../../../../theme/themeContext';
import ProductSearchCard from '../../components/ProductSearchCard';
import {SearchProps} from '../../../../navigation/navigation.types';
import {useGetProductsBySearchTermQuery} from '../../services/products';

const Search = ({navigation}: SearchProps) => {
  const {theme} = useThemeContext();
  const [searchQuery, setSearchQuery] = useState('');

  const {data, isFetching, error} = useGetProductsBySearchTermQuery(
    searchQuery,
    {
      skip: !searchQuery,
    },
  );

  return (
    <KeyboardAvoidingView style={styles(theme).avoidingView}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles(theme).container}>
          <View style={styles(theme).searchContainer}>
            <SearchInput
              style={styles(theme).input}
              autoFocus={true}
              placeholder="Search by name..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              returnKeyType="done"
              keyboardType="default"
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
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <ProductSearchCard
                    product={item}
                    onPress={() =>
                      navigation.navigate('ProductDetail', {id: item.id})
                    }
                  />
                )}
                contentContainerStyle={styles(theme).listContent}
              />
            )}
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Search;

const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    avoidingView: {
      flex: 1,
    },
    container: {
      flex: 1,
      rowGap: theme.size.md,
    },
    searchContainer: {
      flexDirection: 'row',
      margin: theme.size.xs,
      columnGap: theme.size.xxs,
      alignItems: 'center',
    },
    input: {
      flex: 1,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    button: {
      flex: 1,
      backgroundColor: theme.colors.card,
      borderWidth: theme.size.borderSm,
      borderColor: theme.colors.border,
      borderTopRightRadius: 50,
      borderBottomRightRadius: 50,
      paddingHorizontal: theme.size.sm,
      justifyContent: 'center',
    },
    buttonText: {
      fontSize: theme.size.sm,
      fontWeight: theme.fonts.medium.fontWeight,
      color: theme.colors.primary,
    },
    resultsContainer: {
      flex: 1,
    },
    errorText: {
      color: theme.colors.error,
      textAlign: 'center',
    },
    listContent: {
      paddingBottom: theme.size.lg,
    },
  });
