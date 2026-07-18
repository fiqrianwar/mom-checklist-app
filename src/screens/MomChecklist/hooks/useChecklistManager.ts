import { useState, useRef } from 'react';
import { AppModalRef } from '@/components';
import { useChecklistStore } from '@/store';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TopTabParamList } from '@/navigation';

type ProfileScreenProps = NativeStackScreenProps<TopTabParamList, 'LilOnes'>;

export const useChecklistManager = (route: string) => {
  const modalRef = useRef<AppModalRef>(null);
  const formRef = useRef<any>(null);

  const { items, toggleChecklistItem, remove } = useChecklistStore();

  const [selectedChecklistId, setSelectedChecklistId] = useState<string | null>(null);
  const [openChecklistId, setOpenChecklistId] = useState<string | null>(null);

  const newMomItems = items.filter((item) => item.type === 'new-moms');
  const newLilOnesItems = items.filter((item) => item.type === 'lil-ones');

  const handleOpenChecklist = (id: string) => {
    setOpenChecklistId((prev) => (prev === id ? null : id));
  };

  const handleDeleteConfirm = () => {
    if (selectedChecklistId) {
      remove(selectedChecklistId);
      if (openChecklistId === selectedChecklistId) {
        setOpenChecklistId(null);
      }
      setSelectedChecklistId(null);
    }
    modalRef.current?.close();
  };

  return {
    modalRef,
    formRef,
    dataItems: route === 'NewMoms' ? newMomItems : newLilOnesItems,
    selectedChecklistId,
    setSelectedChecklistId,
    openChecklistId,
    handleOpenChecklist,
    handleDeleteConfirm,
    toggleChecklistItem,
  };
};
