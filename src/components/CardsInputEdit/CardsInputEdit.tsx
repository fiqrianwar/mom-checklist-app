import { icons } from '@/assets';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import React, { useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { Button } from '../Button';
import styles from './styles';
import { Props } from './types';

const CardsInputEdit = ({ item, onEdit, onSave }: Props) => {
  const [value, setValue] = useState(item.title);

  useEffect(() => {
    setValue(item.title);
  }, [item.title]);

  return (
    <View style={styles.card}>
      {item.editing ? (
        <View style={styles.editingRow}>
          <BottomSheetTextInput
            value={value}
            onChangeText={setValue}
            placeholder="Exp: Stretch Mark Care"
            style={styles.textInput}
          />

          <Button title="Save" variant="formPrimary" onPress={() => onSave(item.id, value)} />
        </View>
      ) : (
        <View style={styles.editCard}>
          <View style={styles.editCardLeft}>
            <View style={styles.dividerGroup}>
              <View style={styles.divider} />
              <View style={styles.divider} />
            </View>

            <Text style={styles.cardTitle}>{item.title}</Text>
          </View>

          <Pressable onPress={() => onEdit(item.id)}>
            <Image source={icons.editPurple} />
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default CardsInputEdit;
