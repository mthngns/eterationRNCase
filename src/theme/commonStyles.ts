import {ViewStyle} from 'react-native';

type CommonStylesType = {
  center: ViewStyle;
  flexCenter: ViewStyle;
  rowCenter: ViewStyle;
  flexBox: ViewStyle;
};

export const commonStyles: CommonStylesType = {
  flexBox: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
};
