import { StyleProp, ViewStyle, TextInputProps } from 'react-native';

import { Control, FieldPath, FieldValues } from 'react-hook-form';

export interface FormTextInputProps<T extends FieldValues> extends TextInputProps {
  control: Control<T>;
  name: FieldPath<T>;
  styles?: StyleProp<ViewStyle>;
  label?: string;
}
