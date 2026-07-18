import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { Button } from '../Button';
import { icons } from '@/assets';
import styles from './styles';

const CardsInputEdit = () => {
  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    setEditing(false);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        {editing ? (
          <View style={styles.editingRow}>
            <BottomSheetTextInput placeholder="Masukkan Item List" style={styles.textInput} />
            <View>
              <Button title="Save" variant="formPrimary" onPress={handleSave} />
            </View>
          </View>
        ) : (
          <View style={styles.editCard}>
            <View style={styles.editCardLeft}>
              <View style={styles.dividerGroup}>
                <View style={styles.divider} />
                <View style={styles.divider} />
              </View>
              <Text style={styles.cardTitle}>Your checklist item</Text>
            </View>
            <Pressable onPress={handleEdit}>
              <Image source={icons.editPurple} />
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
};

export default CardsInputEdit;
