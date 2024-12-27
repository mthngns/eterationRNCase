import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Box from '../../../../components/Box';
import {CustomTheme} from '../../../../theme/themes';
import brandIcons from '../../../../utils/brandIcons';
import CustomText from '../../../../components/CustomText';
import {commonStyles} from '../../../../theme/commonStyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useThemeContext} from '../../../../theme/themeContext';
import {useGetProductByIdQuery} from '../../services/products';
import LoaderAndError from '../../../../components/LoaderEndError';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ProductDetailProps} from '../../../../navigation/navigation.types';

export const ProductDetail = ({route, navigation}: ProductDetailProps) => {
  const {id} = route.params;
  const {theme} = useThemeContext();
  const {data: product, isLoading, isError} = useGetProductByIdQuery(id);

  if (isLoading) {
    return <LoaderAndError isLoading={isLoading} />;
  }

  if (!isError) {
    return (
      <SafeAreaView style={styles(theme).container}>
        <View style={styles(theme).headerBox}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles(theme).headerButton}>
            <Icon
              name="chevron-left"
              size={theme.size.xxl}
              color={theme.colors.text}
            />
            <CustomText style={styles(theme).headerTitle}>
              Go Back to Product List
            </CustomText>
          </TouchableOpacity>
        </View>
        <LoaderAndError isError={!isError} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles(theme).container}>
      {product && (
        <>
          <View style={styles(theme).headerBox}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles(theme).headerButton}>
              <Icon
                name="chevron-left"
                size={theme.size.xxl}
                color={theme.colors.text}
              />
              <CustomText style={styles(theme).headerTitle}>
                Go Back to Product List
              </CustomText>
            </TouchableOpacity>
          </View>
          <Image
            source={{uri: product.image}}
            style={styles(theme).image}
            resizeMode="cover"
          />
          <Box style={styles(theme).infoBox}>
            <View style={styles(theme).brandContainer}>
              <Image
                source={
                  brandIcons[product.brand.replaceAll(' ', '')] ||
                  brandIcons.Ferrari
                }
                style={styles(theme).brandIcon}
                resizeMode="contain"
              />
            </View>
            <View style={[styles(theme).boxItem, {flexGrow: theme.size.xxs}]}>
              <CustomText style={styles(theme).badgeTitle}>Brand</CustomText>
              <CustomText style={styles(theme).title} numberOfLines={1}>
                {product.brand}
              </CustomText>
            </View>
            <View style={[styles(theme).boxItem, {flexGrow: theme.size.xxs}]}>
              <CustomText style={styles(theme).badgeTitle}>Model</CustomText>
              <CustomText style={styles(theme).title} numberOfLines={1}>
                {product.model}
              </CustomText>
            </View>
            <View style={[styles(theme).boxItem, {flexGrow: theme.size.xs}]}>
              <CustomText style={styles(theme).badgeTitle}>Name</CustomText>
              <CustomText style={styles(theme).title} numberOfLines={1}>
                {product.name}
              </CustomText>
            </View>
          </Box>

          <ScrollView style={styles(theme).descriptionBox}>
            <CustomText style={styles(theme).title}>Description</CustomText>
            <CustomText style={styles(theme).description}>
              {product.description}
            </CustomText>
          </ScrollView>

          <View style={styles(theme).row}>
            <Box>
              <CustomText style={styles(theme).price}>
                $ {product.price}
              </CustomText>
            </Box>
            <View style={styles(theme).actionBox}>
              <TouchableOpacity style={styles(theme).buttonBox}>
                <Icon
                  name="shopping-outline"
                  size={theme.size.xl}
                  color={theme.colors.primary}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles(theme).buttonBox}>
                <Icon
                  name="heart-outline"
                  size={theme.size.xl}
                  color={theme.colors.primary}
                />
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: theme.size.sm,
      rowGap: theme.size.lg,
    },
    headerBox: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: theme.size.sm,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    headerButton: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerTitle: {
      fontSize: theme.size.md,
      fontWeight: theme.fonts.bold.fontWeight,
      color: theme.colors.text,
      marginLeft: theme.size.xxs,
    },
    image: {
      width: '100%',
      height: 150,
      borderWidth: theme.size.borderSm,
      borderColor: theme.colors.border,
      borderRadius: theme.size.sm,
    },
    infoBox: {
      ...commonStyles.rowCenter,
      columnGap: theme.size.lg,
      overflow: 'hidden',
      flexWrap: 'nowrap',
      padding: theme.size.sm,
    },
    brandContainer: {
      ...commonStyles.rowCenter,
      columnGap: theme.size.xs,
    },
    brandIcon: {
      width: theme.size.xxl,
      height: theme.size.xxl,
      tintColor: theme.colors.primary,
    },
    boxItem: {
      flexGrow: 1,
      flex: 1,
      flexWrap: 'nowrap',
      alignSelf: 'stretch',
      justifyContent: 'center',
      rowGap: theme.size.xxs,
    },
    title: {
      fontSize: theme.size.base,
      fontWeight: theme.fonts.bold.fontWeight,
      color: theme.colors.text,
    },
    badgeTitle: {
      fontSize: theme.size.sm,
      fontWeight: theme.fonts.heavy.fontWeight,
      fontStyle: 'italic',
      color: theme.colors.primary,
    },
    descriptionBox: {
      borderWidth: theme.size.borderSm,
      borderColor: theme.colors.border,
      borderRadius: theme.size.sm,
      backgroundColor: theme.colors.card,
      padding: theme.size.md,
    },
    description: {
      fontSize: theme.size.base,
      color: theme.colors.secondaryText,
      marginTop: theme.size.xs,
      marginBottom: theme.size.huge,
    },
    row: {
      ...commonStyles.rowCenter,
      columnGap: theme.size.md,
      flexWrap: 'nowrap',
      overflow: 'hidden',
      alignItems: 'stretch',
    },
    actionBox: {
      ...commonStyles.rowCenter,
      columnGap: theme.size.md,
      flexWrap: 'nowrap',
      overflow: 'hidden',
      justifyContent: 'flex-end',
      flexGrow: 1,
    },
    price: {
      fontSize: theme.size.lg,
      fontWeight: theme.fonts.heavy.fontWeight,
      color: theme.colors.primary,
    },
    buttonBox: {
      borderWidth: theme.size.borderSm,
      borderColor: theme.colors.border,
      borderRadius: theme.size.sm,
      backgroundColor: theme.colors.card,
      padding: theme.size.md,
    },
  });

export default ProductDetail;
