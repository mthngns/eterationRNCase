import React, {useEffect} from 'react';
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
import SortOptions from './SortOptions';
import {useSelector} from 'react-redux';
import FilterOptions from './FilterOptions';
import {SortMethod} from '../../../types/types';
import {SORT_METHODS} from '../../../lib/constants';
import {useAppDispatch} from '../../../redux/store';
import {resetProductsState} from '../store/products';
import {commonStyles} from '../../../theme/commonStyles';
import {useThemeContext} from '../../../theme/themeContext';
import ScreenHeader from '../../../components/ScreenHeader/ScreenHeader';
import {Modal, ModalProps, KeyboardAvoidingView, Platform} from 'react-native';
import {CustomSafeArea} from '../../../components/CustomSafeArea/CustomSafeArea';

interface FiltersMenuModalProps extends ModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const FiltersMenuModal: React.FC<FiltersMenuModalProps> = ({
  isVisible,
  onClose,
  ...props
}) => {
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
        <CustomSafeArea>
          <ScreenHeader
            title="Filters"
            leftIcon="close"
            rightIcon="refresh"
            leftIconOnPress={onClose}
            rightIconOnPress={handleResetFilters}
          />
          <SortOptions
            title="Sort By"
            options={SORT_METHODS}
            selectedValue={selecetdSortMethod}
            onChange={handleSortMethod}
          />
          <FilterOptions
            title="Brands"
            options={brands}
            selectedOptions={selectedBrands}
            onSelect={handleSelectBrand}
          />
          <FilterOptions
            title="Models"
            options={selectedBrands.length ? modelsyBySelectedBrands : models}
            selectedOptions={selectedModels}
            onSelect={handleSelectModel}
          />
        </CustomSafeArea>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default FiltersMenuModal;
