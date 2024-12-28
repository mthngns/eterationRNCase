import React from 'react';
import {styles} from './ScreenHeader.styles';
import CustomText from '../CustomText/CustomText';
import {TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useThemeContext} from '../../theme/themeContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface ScreenHeaderProps {
  title: string;
  leftIcon?: string;
  rightIcon?: string;
  leftIconOnPress?: () => void;
  rightIconOnPress?: () => void;
}

const ScreenHeader = ({
  title,
  leftIcon,
  rightIcon,
  leftIconOnPress,
  rightIconOnPress,
}: ScreenHeaderProps) => {
  const {theme} = useThemeContext();
  const navigation = useNavigation();

  return (
    <View style={styles(theme).headerBox}>
      {leftIcon ? (
        <TouchableOpacity
          disabled={!leftIconOnPress}
          onPress={leftIconOnPress}
          style={styles(theme).headerButton}>
          <Icon
            name={leftIcon}
            size={theme.size.xl}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles(theme).headerButton}>
          <Icon
            name="arrow-left"
            size={theme.size.xl}
            color={theme.colors.text}
          />
        </TouchableOpacity>
      )}
      <CustomText style={styles(theme).headerTitle}>{title}</CustomText>
      {rightIcon && (
        <TouchableOpacity
          disabled={!rightIconOnPress}
          onPress={rightIconOnPress}
          style={styles(theme).headerButton}>
          <Icon
            name={rightIcon}
            size={theme.size.xl}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ScreenHeader;
