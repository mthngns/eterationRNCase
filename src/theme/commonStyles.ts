import {ViewStyle} from 'react-native';

// Common styles için tip tanımı
type CommonStylesType = {
  center: ViewStyle;
  flexCenter: ViewStyle;
  rowCenter: ViewStyle;
};

// Stil nesnesini bu tipe bağlayarak oluşturun
export const commonStyles: CommonStylesType = {
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
