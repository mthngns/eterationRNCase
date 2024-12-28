import {View} from 'react-native';
import React, {ReactElement} from 'react';
import {TouchableOpacity} from 'react-native';
import {styles} from './ProductActionBar.styles';
import {commonStyles} from '../../theme/commonStyles';
import {useThemeContext} from '../../theme/themeContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProductActionBar = ({
  isInFav,
  isInBasket,
  forUsingBasket,
  handleFavIconPress,
  handleBasketIconPress,
  handleRemoveItemToBasket,
}: {
  isInFav: boolean;
  isInBasket: boolean;
  forUsingBasket: boolean;
  handleFavIconPress: () => void;
  handleBasketIconPress: () => void;
  handleRemoveItemToBasket: () => void;
}): ReactElement => {
  const {theme} = useThemeContext();
  return (
    <View
      style={{
        ...commonStyles(theme).rowCenter,
        columnGap: theme.size.xs,
      }}>
      <TouchableOpacity
        style={[styles(theme).iconButton]}
        onPress={handleFavIconPress}>
        <Icon
          name={isInFav ? 'favorite' : 'favorite-border'}
          size={theme.size.xl}
          color={theme.colors.primary}
        />
      </TouchableOpacity>
      {!forUsingBasket && (
        <TouchableOpacity
          style={[styles(theme).iconButton]}
          onPress={handleBasketIconPress}>
          <MIcon
            name={isInBasket ? 'shopping' : 'shopping-outline'}
            size={theme.size.xl}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
      )}
      {forUsingBasket && (
        <TouchableOpacity
          style={[styles(theme).iconButton]}
          onPress={handleRemoveItemToBasket}>
          <Icon
            name="delete-forever"
            size={theme.size.xl}
            color={theme.colors.error}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ProductActionBar;
