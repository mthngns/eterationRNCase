import React from 'react';
import {useThemeContext} from '../../../../theme/themeContext';
import CustomText from '../../../../components/CustomText/CustomText';
import ThemedButton from '../../../../components/ThemedButton/ThemedButton';
import {CustomSafeArea} from '../../../../components/CustomSafeArea/CustomSafeArea';

export const Profile = () => {
  const {theme, isDarkTheme, toggleTheme} = useThemeContext();

  return (
    <CustomSafeArea>
      <CustomText style={{color: theme.colors.text}}>
        Current Theme: {isDarkTheme ? 'Dark' : 'Light'}
      </CustomText>
      <ThemedButton title="Toggle Theme" onPress={toggleTheme} />
    </CustomSafeArea>
  );
};
