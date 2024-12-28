import {View, Image} from 'react-native';
import React, {ReactElement} from 'react';
import {styles} from './Thumbnail.styles';
import {useThemeContext} from '../../theme/themeContext';

const Thumbnail = ({uri}: {uri: string}): ReactElement => {
  const {theme} = useThemeContext();
  return (
    <View>
      <Image
        source={{uri: uri}}
        style={styles(theme).image}
        resizeMode="cover"
      />
    </View>
  );
};

export default Thumbnail;
