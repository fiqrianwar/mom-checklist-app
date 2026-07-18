import { AppModal, AppScreen, CardChecklist, CardCheckListItem } from '@/components';
import { TopTabParamList } from '@/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { FormChecklist, HeaderStaticCard } from './components';
import { useChecklistManager } from './hooks/useChecklistManager';
import styles from './styles';

type ProfileScreenProps = NativeStackScreenProps<TopTabParamList, 'LilOnes'>;

const LilOnesScreen = ({ route }: ProfileScreenProps) => {
  const {
    modalRef,
    formRef,
    setSelectedChecklistId,
    openChecklistId,
    handleOpenChecklist,
    handleDeleteConfirm,
    toggleChecklistItem,
    dataItems,
  } = useChecklistManager(route.name);

  return (
    <AppScreen useSafeArea={false} contentContainerStyle={styles.screen} scrollable>
      <View style={styles.wrapper}>
        <HeaderStaticCard />

        <View style={styles.checklistContainer}>
          {dataItems.map((checklist) => {
            const completedCount = checklist.checklistItems.filter((item) => item.completed).length;

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
                  checklist.checklistItems?.map(({ title, id: itemId, completed }) => (
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

export default LilOnesScreen;
