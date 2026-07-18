import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { ChecklistForm, checklistSchema } from '@/schemas/checklist.schema';
import { Checklist, useChecklistStore } from '@/store';
import { ChecklistItem } from '@/components/CardsInputEdit/types';

export const useChecklistForm = (routeName: string) => {
  const { add, update } = useChecklistStore();

  const [editingChecklist, setEditingChecklist] = useState<Checklist | null>(null);
  const [items, setItems] = useState<ChecklistItem[]>([
    { id: Date.now().toString(), title: '', editing: true },
  ]);

  const { control, handleSubmit, reset } = useForm<ChecklistForm>({
    resolver: zodResolver(checklistSchema),
    defaultValues: { title: '' },
  });

  const resetForm = () => {
    setEditingChecklist(null);
    reset({ title: '' });
    setItems([{ id: Date.now().toString(), title: '', editing: true }]);
  };

  const openForm = (checklist?: Checklist) => {
    if (checklist) {
      setEditingChecklist(checklist);
      reset({ title: checklist.title });
      setItems(
        checklist.checklistItems.map((item) => ({
          id: item.id,
          title: item.title,
          editing: false,
        })),
      );
    } else {
      resetForm();
    }
  };

  const handleAddItem = () =>
    setItems((prev) => [...prev, { id: Date.now().toString(), title: '', editing: true }]);

  const handleEdit = (id: string) =>
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, editing: true } : item)));

  const handleSave = (id: string, title: string) =>
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, title, editing: false } : item)),
    );

  const onSubmit = (data: ChecklistForm, onClose: () => void) => {
    const payload = {
      title: data.title,
      completed: editingChecklist?.completed ?? false,
      checklistItems: items.map((item) => ({
        id: item.id,
        title: item.title,
        completed: false,
      })),
    };

    if (editingChecklist) {
      update(editingChecklist.id, payload);
    } else {
      add({
        id: Date.now().toString(),
        type: routeName === 'NewMoms' ? 'new-moms' : 'lil-ones',
        ...payload,
      });
    }

    resetForm();
    onClose();
  };

  return {
    control,
    handleSubmit,
    items,
    editingChecklist,
    openForm,
    resetForm,
    handleAddItem,
    handleEdit,
    handleSave,
    onSubmit,
  };
};
