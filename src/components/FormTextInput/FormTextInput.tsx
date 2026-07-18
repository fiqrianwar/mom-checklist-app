import React from 'react';

import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { Text } from 'react-native';

import { Controller, FieldValues } from 'react-hook-form';
import { FormTextInputProps } from './types';

const FormTextInput = <T extends FieldValues>({
  control,
  name,
  label,
  style,
  ...props
}: FormTextInputProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <BottomSheetTextInput
            {...props}
            placeholder="Exp: Pregnancy"
            style={style}
            onChangeText={onChange}
            value={value}
          />
          {!!error && (
            <Text
              style={{
                color: 'red',
              }}
            >
              {error.message}
            </Text>
          )}
        </>
      )}
    />
  );
};

export default FormTextInput;
