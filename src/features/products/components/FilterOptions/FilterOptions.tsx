import React, {useMemo} from 'react';
import {styles} from './FilterOptions.styles';
import brandIcons from '../../../../utils/brandIcons';
import {useThemeContext} from '../../../../theme/themeContext';
import CheckBox from '../../../../components/CheckBox/CheckBox';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

interface FilterOptionsProps {
  title: string;
  options: string[];
  selectedOptions: string[];
  onSelect: (option: string) => void;
}

const FilterOptions: React.FC<FilterOptionsProps> = ({
  title,
  options,
  selectedOptions,
  onSelect,
}) => {
  const {theme} = useThemeContext();
  const sortedOptions = useMemo(() => {
    return [
      ...options.filter(option => selectedOptions.includes(option)),
      ...options.filter(option => !selectedOptions.includes(option)),
    ];
  }, [options, selectedOptions]);

  return (
    <View style={styles(theme).container}>
      <FlatList
        data={sortedOptions}
        style={styles(theme).listWrapper}
        keyExtractor={item => item}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={
          <View style={styles(theme).headerBox}>
            <Text style={styles(theme).title}>{title}</Text>
            <Text
              style={[
                selectedOptions.length
                  ? styles(theme).selectedText
                  : styles(theme).unSelectedText,
              ]}>
              Selected {selectedOptions.length}/{options.length}
            </Text>
          </View>
        }
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => onSelect(item)}
            style={styles(theme).optionContainer}>
            <CheckBox
              checked={selectedOptions.includes(item)}
              label={item}
              source={brandIcons[item.replaceAll(' ', '')]}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default FilterOptions;
