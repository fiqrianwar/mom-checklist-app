import { StyleProp, ViewStyle } from 'react-native';

export type PropsBottomSheet = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onDismis?: () => void;
};
