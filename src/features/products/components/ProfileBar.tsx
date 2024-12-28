import React from 'react';
import {CustomTheme} from '../../../theme/themes';
import CustomText from '../../../components/CustomText';
import {commonStyles} from '../../../theme/commonStyles';
import {useThemeContext} from '../../../theme/themeContext';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Box from '../../../components/Box';

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

const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    container: {
      ...commonStyles(theme).rowCenter,
      justifyContent: 'space-between',
    },
    text: {
      fontSize: theme.size.xl,
      fontWeight: theme.fonts.heavy.fontWeight,
      letterSpacing: 0.3,
      color: theme.colors.text,
    },
    iconContainer: {
      padding: theme.size.xxs,
      borderRadius: theme.size.xxl,
      backgroundColor: theme.colors.primary,
    },
  });

export default ProfileBar;
