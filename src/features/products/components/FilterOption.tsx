import React, {useMemo} from 'react';
import {CustomTheme} from '../../../theme/themes';
import brandIcons from '../../../utils/brandIcons';
import CheckBox from '../../../components/CheckBox';
import {commonStyles} from '../../../theme/commonStyles';
import {useThemeContext} from '../../../theme/themeContext';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

interface FilterOptionProps {
  title: string;
  options: string[];
  selectedOptions: string[];
  onSelect: (option: string) => void;
}

const FilterOption: React.FC<FilterOptionProps> = ({
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
        style={styles(theme).listWrapper}
        data={sortedOptions}
        keyExtractor={item => item}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={
          <View style={styles(theme).headerBox}>
            <Text style={styles(theme).title}>{title}</Text>
            <Text
              style={[
                selectedOptions.length
                  ? styles(theme).selectedTitle
                  : {
                      color: theme.colors.secondaryText,
                      fontSize: theme.size.sm,
                    },
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

export default FilterOption;

const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: theme.size.md,
      backgroundColor: theme.colors.card,
    },
    listWrapper: {
      borderWidth: theme.size.borderSm,
      borderColor: theme.colors.border,
      backgroundColor: theme.colors.card,
      paddingHorizontal: theme.size.sm,
    },
    headerBox: {
      ...commonStyles.rowCenter,
      justifyContent: 'space-between',
      paddingVertical: theme.size.sm,
      borderBottomWidth: 1,
      borderColor: theme.colors.border,
      backgroundColor: theme.colors.card,
    },
    title: {
      fontSize: theme.size.md,
      fontWeight: 'bold',
      color: theme.colors.text,
    },
    selectedTitle: {
      fontSize: theme.size.sm,
      fontWeight: theme.fonts.bold.fontWeight,
      color: theme.colors.primary,
    },
    optionContainer: {
      ...commonStyles.rowCenter,
      paddingVertical: theme.size.xs,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    optionText: {
      fontSize: theme.size.md,
      color: theme.colors.text,
    },
    selectedOptionText: {
      color: theme.colors.primary,
      fontWeight: 'bold',
    },
  });
