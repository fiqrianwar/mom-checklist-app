import { ImageSourcePropType } from 'react-native';

export type ButtonProps = {
  title: string;
  variant: 'secondary' | 'primary' | 'formSecondary' | 'formPrimary';
  icon?: ImageSourcePropType;
  onPress?: () => void;
};
