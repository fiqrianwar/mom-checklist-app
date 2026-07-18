import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import React, { useRef } from 'react';
import { AppModal, AppModalRef, AppScreen, CardChecklist, CardCheckListItem } from '@/components';
import { icons } from '@/assets';
import { FormNewChecklistMoms } from './components';
import styles from './styles';

const ChecklistNewMomsScreen = () => {
  const modalRef = useRef<AppModalRef>(null);

  return (
    <AppScreen useSafeArea={false} contentContainerStyle={styles.screen}>
      <View style={styles.wrapper}>
        <View style={styles.infoCard}>
          <View style={styles.iconWrapper}>
            <Image source={icons.books} />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.infoText}>
              Yuk, siapkan checklist untuk mempermudah persiapan kelahiran si Kecil!
            </Text>
          </View>
        </View>

        <View style={styles.checklistContainer}>
          <CardChecklist onDelete={() => modalRef.current?.open()} />
          <CardCheckListItem />
          <FormNewChecklistMoms />
        </View>
      </View>

      <AppModal
        ref={modalRef}
        title="Delete Checklist"
        description="Kamu yakin ingin menghapus checklist ini?"
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={() => {
          console.log('Deleted!');
          modalRef.current?.close();
        }}
      />
    </AppScreen>
  );
};

export default ChecklistNewMomsScreen;
