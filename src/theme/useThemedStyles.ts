import {useThemeContext} from './themeContext';
import {CustomTheme} from './themes';
import {commonStyles} from './commonStyles';

export const useThemedStyles = <T>(
  styles: (theme: CustomTheme, common: typeof commonStyles) => T,
): T => {
  const {theme} = useThemeContext();
  return styles(theme, commonStyles);
};
