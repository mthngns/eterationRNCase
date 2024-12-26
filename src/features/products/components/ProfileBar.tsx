import React from 'react';
import {CustomTheme} from '../../../theme/themes';
import CustomText from '../../../components/CustomText';
import {commonStyles} from '../../../theme/commonStyles';
import {useThemeContext} from '../../../theme/themeContext';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileBar = () => {
  const {theme} = useThemeContext();
  return (
    <View style={styles(theme).container}>
      <CustomText style={styles(theme).text}>Eteration</CustomText>
      <TouchableOpacity style={styles(theme).iconContainer}>
        <Icon
          name="human-greeting-variant"
          size={theme.size.xl}
          color={theme.colors.light}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = (theme: CustomTheme) =>
  StyleSheet.create({
    container: {
      ...commonStyles.rowCenter,
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
