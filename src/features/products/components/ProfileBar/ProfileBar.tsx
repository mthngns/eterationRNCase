import React from 'react';
import {styles} from './ProfileBar.styles';
import {TouchableOpacity} from 'react-native';
import Box from '../../../../components/Box/Box';
import {useThemeContext} from '../../../../theme/themeContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomText from '../../../../components/CustomText/CustomText';

const ProfileBar = () => {
  const {theme} = useThemeContext();
  return (
    <Box style={styles(theme).container}>
      <CustomText style={styles(theme).text}>Eteration</CustomText>
      <TouchableOpacity style={styles(theme).iconContainer}>
        <Icon
          name="human-greeting-variant"
          size={theme.size.xl}
          color={theme.colors.light}
        />
      </TouchableOpacity>
    </Box>
  );
};

export default ProfileBar;
