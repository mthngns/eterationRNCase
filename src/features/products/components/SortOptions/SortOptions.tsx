import React from 'react';
import {styles} from './SortOptions.styles';
import {SortBy, SortMethod} from '../../../../types/types';
import {useThemeContext} from '../../../../theme/themeContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import CustomText from '../../../../components/CustomText/CustomText';

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
