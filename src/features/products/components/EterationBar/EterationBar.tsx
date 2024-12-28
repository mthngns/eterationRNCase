import React from 'react';
import {styles} from './EterationBar.styles';
import Box from '../../../../components/Box/Box';
import {useThemeContext} from '../../../../theme/themeContext';
import CustomText from '../../../../components/CustomText/CustomText';
import ToggleThemeSwitch from '../../../profile/components/ToggleThemeSwitch/ToggleThemeSwitch';

const EterationBar = () => {
  const {theme} = useThemeContext();
  return (
    <Box style={styles(theme).container}>
      <CustomText style={styles(theme).text}>Eteration</CustomText>
      <ToggleThemeSwitch />
    </Box>
  );
};

export default EterationBar;
