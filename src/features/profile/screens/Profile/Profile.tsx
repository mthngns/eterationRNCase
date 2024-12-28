import React from 'react';
import CustomText from '../../../../components/CustomText';
import {useThemeContext} from '../../../../theme/themeContext';
import ThemedButton from '../../../../components/ThemedButton';
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
