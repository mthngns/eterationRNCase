import React, {ReactElement} from 'react';
import {styles} from './IconButton.styles';
import CustomText from '../CustomText/CustomText';
import {useThemeContext} from '../../theme/themeContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface IconButtonProps extends TouchableOpacityProps {
  icon: string;
  title?: string;
  size?: number;
}

const IconButton = ({
  icon,
  title,
  style,
  size,
  ...props
}: IconButtonProps): ReactElement => {
  const {theme} = useThemeContext();
  const iconSize = size || theme.size.xl;
  return (
    <TouchableOpacity
      disabled={props.disabled}
      style={[styles(theme).buttonBox, style]}
      onPress={props.onPress}>
      <Icon
        name={icon}
        size={iconSize}
        color={
          props.disabled ? theme.colors.disabledText : theme.colors.primary
        }
      />
      {title && (
        <CustomText style={styles(theme).secondaryText}>{title}</CustomText>
      )}
    </TouchableOpacity>
  );
};

export default IconButton;
