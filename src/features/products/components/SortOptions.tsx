import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SortBy, SortMethod} from '../../../types/types';
import {useThemeContext} from '../../../theme/themeContext';
import CustomText from '../../../components/CustomText';
import {CustomTheme} from '../../../theme/themes';
import {commonStyles} from '../../../theme/commonStyles';

interface SortOptionsProps {
  title: string;
  options: SortBy;
  selectedValue: SortMethod;
  onChange: (value: SortMethod) => void;
}

const SortOptions: React.FC<SortOptionsProps> = ({
  title,
  options,
  onChange,
  selectedValue,
}) => {
  const {theme} = useThemeContext();
  return (
    <View style={styles(theme).container}>
      <FlatList
        style={styles(theme).listWrapper}
        data={Object.keys(options)}
        keyExtractor={item => item}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={
          <View style={styles(theme).headerBox}>
            <Text style={styles(theme).title}>{title}</Text>
          </View>
        }
        renderItem={({item}) => {
          const label = options[item as keyof SortBy] as SortMethod;
          return (
            <TouchableOpacity
              style={styles(theme).optionContainer}
              onPress={() => onChange(label)}>
              <Icon
                name={
                  JSON.stringify(selectedValue) === JSON.stringify(label)
                    ? 'checkbox-marked'
                    : 'checkbox-blank-outline'
                }
                size={20}
                color={
                  JSON.stringify(selectedValue) === JSON.stringify(label)
                    ? theme.colors.primary
                    : theme.colors.secondaryText
                }
              />
              <CustomText
                style={
                  JSON.stringify(selectedValue) === JSON.stringify(label)
                    ? styles(theme).checkedText
                    : styles(theme).text
                }>
                {item}
              </CustomText>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default SortOptions;

const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    container: {
      borderRadius: theme.size.sm,
      borderWidth: theme.size.borderSm,
      borderColor: theme.colors.border,
      overflow: 'hidden',
    },
    listWrapper: {
      borderWidth: theme.size.borderSm,
      borderColor: theme.colors.border,
      backgroundColor: theme.colors.card,
      paddingHorizontal: theme.size.sm,
    },
    headerBox: {
      ...commonStyles(theme).rowCenter,
      justifyContent: 'space-between',
      paddingVertical: theme.size.sm,
      borderBottomWidth: 1,
      borderColor: theme.colors.border,
      backgroundColor: theme.colors.card,
    },
    selectedTitle: {
      fontSize: theme.size.sm,
      fontWeight: theme.fonts.bold.fontWeight,
      color: theme.colors.primary,
    },
    title: {
      fontSize: theme.size.md,
      fontWeight: 'bold',
      color: theme.colors.text,
    },
    optionContainer: {
      ...commonStyles(theme).rowCenter,
      paddingVertical: theme.size.xs,
      columnGap: theme.size.xs,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    text: {color: theme.colors.secondaryText},
    checkedText: {
      fontWeight: theme.fonts.heavy.fontWeight,
      color: theme.colors.primary,
    },
  });
