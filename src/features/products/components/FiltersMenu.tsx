import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ModalProps,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {
  getFilters,
  getModelsBySelectedBrands,
  getSelectedBrands,
  getSelectedModels,
  getSortMethod,
  resetFilters,
  setPage,
  setSelectedBrands,
  setSelectedModels,
  setSortMethod,
} from '../store/filters';
import SortOption from './SortOption';
import {useSelector} from 'react-redux';
import FilterOption from './FilterOption';
import {SortMethod} from '../../../types/types';
import {CustomTheme} from '../../../theme/themes';
import {SORT_METHODS} from '../../../lib/constants';
import {useAppDispatch} from '../../../redux/store';
import {resetProductsState} from '../store/products';
import {commonStyles} from '../../../theme/commonStyles';
import {useThemeContext} from '../../../theme/themeContext';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface MenuProps extends ModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const FiltersMenu: React.FC<MenuProps> = ({isVisible, onClose, ...props}) => {
  const insets = useSafeAreaInsets();
  const {theme} = useThemeContext();
  const dispatch = useAppDispatch();

  const {brands, models} = useSelector(getFilters);
  const selectedBrands = useSelector(getSelectedBrands);
  const selectedModels = useSelector(getSelectedModels);
  const selecetdSortMethod = useSelector(getSortMethod);
  const modelsyBySelectedBrands = useSelector(getModelsBySelectedBrands);

  const handleSelectBrand = (brand: string) => {
    dispatch(setSelectedBrands(brand));
  };
  const handleSelectModel = (brand: string) => {
    dispatch(setSelectedModels(brand));
  };
  const handleSortMethod = (value: SortMethod) => {
    dispatch(setSortMethod(value));
  };
  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  useEffect(() => {
    dispatch(resetProductsState());
    dispatch(setPage(1));
  }, [
    selectedBrands,
    selectedModels,
    selecetdSortMethod.order,
    selecetdSortMethod.sortBy,
    dispatch,
  ]);

  return (
    <Modal
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}
      {...props}>
      <KeyboardAvoidingView
        style={commonStyles(theme).flexBox}
        behavior={Platform.OS === 'ios' ? 'height' : undefined}>
        <View
          style={[
            styles(theme).container,
            {paddingTop: insets.top, paddingBottom: theme.size.xs},
          ]}>
          <View style={styles(theme).header}>
            <TouchableOpacity onPress={onClose}>
              <Icon
                name="close"
                size={theme.size.xl}
                color={theme.colors.text}
              />
            </TouchableOpacity>
            <Text style={styles(theme).headerTitle}>Filters</Text>
            <TouchableOpacity
              onPress={handleResetFilters}
              style={styles(theme).resetButton}>
              <Icon
                name="refresh"
                size={theme.size.xl}
                color={theme.colors.primary}
              />
            </TouchableOpacity>
          </View>
          <View style={styles(theme).content}>
            <SortOption
              title="Sort By"
              options={SORT_METHODS}
              selectedValue={selecetdSortMethod}
              onChange={handleSortMethod}
            />
            <FilterOption
              title="Brands"
              options={brands}
              selectedOptions={selectedBrands}
              onSelect={handleSelectBrand}
            />
            <FilterOption
              title="Models"
              options={selectedBrands.length ? modelsyBySelectedBrands : models}
              selectedOptions={selectedModels}
              onSelect={handleSelectModel}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default FiltersMenu;

const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: theme.size.xs,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    headerTitle: {
      fontSize: theme.size.lg,
      fontWeight: 'bold',
      color: theme.colors.text,
      flex: 1,
      textAlign: 'center',
    },
    resetButton: {
      alignSelf: 'flex-end',
      paddingVertical: theme.size.xs,
      columnGap: theme.size.xs,
      alignItems: 'center',
    },
    content: {
      flex: 1,
      padding: theme.size.md,
    },
    text: {
      fontSize: theme.size.md,
      color: theme.colors.text,
    },
  });
