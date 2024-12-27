import React from 'react';
import CustomText from './CustomText';
import {CustomTheme} from '../theme/themes';
import {commonStyles} from '../theme/commonStyles';
import {useThemeContext} from '../theme/themeContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, StyleSheet, Image, ImageSourcePropType} from 'react-native';

interface CheckBoxProps {
  checked: boolean;
  size?: number;
  color?: string;
  label: string;
  source?: ImageSourcePropType | undefined;
  icon?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({checked, label, source}) => {
  const {theme} = useThemeContext();
  return (
    <View style={styles(theme).checkboxContainer}>
      <View style={styles(theme).brandContainer}>
        {source ? (
          <Image
            source={source}
            style={checked ? styles(theme).checkedIcon : styles(theme).ıcon}
            resizeMode="contain"
          />
        ) : (
          <View style={styles(theme).checkboxContainer}>
            <Icon
              name={checked ? 'checkbox-marked' : 'checkbox-blank-outline'}
              size={20}
              color={
                checked ? theme.colors.primary : theme.colors.secondaryText
              }
            />
          </View>
        )}

        <CustomText
          style={checked ? styles(theme).checkedText : styles(theme).text}>
          {label}
        </CustomText>
      </View>
    </View>
  );
};

export default CheckBox;

const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    checkboxContainer: {
      ...commonStyles.center,
    },
    brandContainer: {
      ...commonStyles.rowCenter,
      paddingVertical: theme.size.xxs,
      columnGap: theme.size.xs,
    },
    ıcon: {
      width: theme.size.xl,
      height: theme.size.xl,
      tintColor: theme.colors.secondaryText,
    },
    checkedIcon: {
      width: theme.size.xl,
      height: theme.size.xl,
      tintColor: theme.colors.primary,
    },
    text: {color: theme.colors.secondaryText},
    checkedText: {
      fontWeight: theme.fonts.heavy.fontWeight,
      color: theme.colors.primary,
    },
  });
