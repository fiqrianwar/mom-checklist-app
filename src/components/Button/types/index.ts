import { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';

export type ButtonProps = {
  title: string;
  variant: 'secondary' | 'primary' | 'formSecondary' | 'formPrimary' | 'linkText';
  icon?: ImageSourcePropType;
  onPress?: () => void;
};
