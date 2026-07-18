import { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';

export type ButtonProps = {
  title: string;
  variant: 'secondary' | 'primary' | 'formSecondary' | 'formPrimary' | 'linkText' | 'disabled';
  icon?: ImageSourcePropType;
  onPress?: () => void;
};
