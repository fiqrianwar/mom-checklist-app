import { icons } from '@/assets';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import React from 'react';
import { Controller, useWatch, useFormState } from 'react-hook-form';
import { Image, Pressable, Text, View } from 'react-native';
import { Button } from '../Button';
import styles from './styles';
import { Props } from './types';

const CardsInputEdit = ({ control, index, editing, onEdit, onSave }: Props) => {
  const title = useWatch({
    control,
    name: `checklistItems.${index}.title`,
  });

  const isEmpty = !title?.trim();

  const { errors } = useFormState({
    control,
  });

  const error = errors.checklistItems?.[index]?.title;

  return (
    <View style={styles.card}>
      {editing ? (
        <View style={styles.editingRow}>
          <Controller
            control={control}

            name={`checklistItems.${index}.title`}

            render={({ field, fieldState }) => (
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                <BottomSheetTextInput
                  value={field.value}
                  onChangeText={field.onChange}
                  placeholder="Exp: Stretch Mark Care"
                  style={styles.textInput}
                />
                <View>
                  {fieldState.error && (
                    <Text style={{ color: 'red' }}>{fieldState.error.message}</Text>
                  )}
                </View>
              </View>
            )}
          />

          {!error && !isEmpty ? (
            <Button title="Save" variant={'formPrimary'} onPress={onSave} />
          ) : (
            <Button title="Save" variant={'disabled'} />
          )}
        </View>
      ) : (
        <View style={styles.editCard}>
          <View style={styles.editCardLeft}>
            <View style={styles.dividerGroup}>
              <View style={styles.divider} />
              <View style={styles.divider} />
            </View>

            <Text style={styles.cardTitle}>{title}</Text>
          </View>

          <Pressable onPress={onEdit}>
            <Image source={icons.editPurple} />
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default CardsInputEdit;
