import React from 'react';
import {styles} from './CheckBox.styles';
import CustomText from '../CustomText/CustomText';
import {useThemeContext} from '../../theme/themeContext';
import {View, Image, ImageSourcePropType} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
