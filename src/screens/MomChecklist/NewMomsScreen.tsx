// screens/NewMomsScreen.tsx
import React from 'react';
import { Image, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { icons } from '@/assets';
import { AppModal, AppScreen, CardChecklist, CardCheckListItem } from '@/components';
import { TopTabParamList } from '@/navigation';
import { FormChecklist } from './components';
import styles from './styles';
import { useChecklistManager } from './hooks/useChecklistManager';

type NewMomsScreenProps = NativeStackScreenProps<TopTabParamList, 'NewMoms'>;

const NewMomsScreen = ({ route }: NewMomsScreenProps) => {
  const {
    modalRef,
    formRef,
    dataItems,
    setSelectedChecklistId,
    openChecklistId,
    handleOpenChecklist,
    handleDeleteConfirm,
    toggleChecklistItem,
  } = useChecklistManager(route.name);

  return (
    <AppScreen useSafeArea={false} contentContainerStyle={styles.screen} scrollable>
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
          {dataItems.map((checklist) => {
            const completedCount = checklist.checklistItems.filter((i) => i.completed).length;
            const totalCount = checklist.checklistItems.length;
            const progress = totalCount === 0 ? 0 : completedCount / totalCount;

            return (
              <View key={checklist.id}>
                <CardChecklist
                  onDelete={() => {
                    setSelectedChecklistId(checklist.id);
                    modalRef.current?.open();
                  }}
                  onEdit={() => formRef.current?.open(checklist)}
                  onPress={() => handleOpenChecklist(checklist.id)}
                  title={`${checklist.title} (${completedCount}/${totalCount})`}
                  progress={progress}
                />
                {openChecklistId === checklist.id &&
                  checklist.checklistItems.map(({ title, id: itemId, completed }) => (
                    <View key={itemId} style={{ marginTop: 12 }}>
                      <CardCheckListItem
                        text={title}
                        checked={completed}
                        pressToggle={() => toggleChecklistItem(checklist.id, itemId)}
                      />
                    </View>
                  ))}
              </View>
            );
          })}
          <FormChecklist ref={formRef} routeName={route.name} />
        </View>
      </View>

      {/* Delete Modal */}
      <AppModal
        ref={modalRef}
        title="Delete Checklist"
        description="Kamu yakin ingin menghapus checklist ini?"
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleDeleteConfirm}
      />
    </AppScreen>
  );
};

export default NewMomsScreen;
