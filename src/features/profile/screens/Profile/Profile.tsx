import React from 'react';
import {styles} from './Profile.styles';
import brandIcons from '../../../../utils/brandIcons';
import {Image, TouchableOpacity, View} from 'react-native';
import {useThemeContext} from '../../../../theme/themeContext';
import CustomText from '../../../../components/CustomText/CustomText';
import IconButton from '../../../../components/IconButton/IconButton';
import ScreenHeader from '../../../../components/ScreenHeader/ScreenHeader';
import ThemedButton from '../../../../components/ThemedButton/ThemedButton';
import {CustomSafeArea} from '../../../../components/CustomSafeArea/CustomSafeArea';
import ToggleThemeSwitch from '../../components/ToggleThemeSwitch/ToggleThemeSwitch';

export const Profile = () => {
  const {theme} = useThemeContext();

  return (
    <CustomSafeArea>
      <ScreenHeader title={'Profile'} rightIcon="account" />
      <View style={styles(theme).content}>
        <View style={styles(theme).profileContainer}>
          <View style={styles(theme).avatarWrapper}>
            <Image source={brandIcons.profile} style={styles(theme).avatar} />
            <IconButton
              icon="pencil-circle"
              size={theme.size.xxxl}
              style={styles(theme).editButton}
            />
          </View>
          <CustomText style={styles(theme).name}>Saul Goodmate</CustomText>
          <CustomText style={styles(theme).email}>
            saulgo35@gmail.com
          </CustomText>
        </View>

        <View style={styles(theme).optionContainer}>
          <View style={styles(theme).optionRow}>
            <CustomText style={styles(theme).optionText}>Settings</CustomText>
          </View>

          <TouchableOpacity style={styles(theme).optionRow}>
            <CustomText style={styles(theme).optionText}>My Orders</CustomText>
          </TouchableOpacity>

          <TouchableOpacity style={styles(theme).optionRow}>
            <CustomText style={styles(theme).optionText}>
              Payment Method
            </CustomText>
          </TouchableOpacity>

          <View style={styles(theme).optionRow}>
            <CustomText style={styles(theme).optionText}>Dark Mode</CustomText>
            <ToggleThemeSwitch />
          </View>

          <TouchableOpacity style={styles(theme).optionRow}>
            <CustomText style={styles(theme).optionText}>
              Shipping Addresses
            </CustomText>
          </TouchableOpacity>
        </View>

        <ThemedButton
          title="Logout"
          design="inline"
          style={styles(theme).logoutButton}
        />
      </View>
    </CustomSafeArea>
  );
};
