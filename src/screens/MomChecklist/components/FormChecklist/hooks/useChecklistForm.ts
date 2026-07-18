import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

import { ChecklistForm, checklistSchema } from '@/schemas/checklist.schema';
import { Checklist, useChecklistStore } from '@/store';

export const useChecklistForm = (routeName: string) => {
  const { add, update } = useChecklistStore();

  const closeForm = (onClose: () => void) => {
    resetForm();
    onClose();
  };

  const closeSheet = () => {
    resetForm();
  };

  const [editingChecklist, setEditingChecklist] = useState<Checklist | null>(null);

  const [editingIds, setEditingIds] = useState<Record<string, boolean>>({});

  const { control, handleSubmit, reset } = useForm<ChecklistForm>({
    resolver: zodResolver(checklistSchema),
    defaultValues: {
      title: '',
      checklistItems: [
        {
          id: Date.now().toString(),
          title: '',
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'checklistItems',
  });

  const resetForm = () => {
    setEditingChecklist(null);

    const id = Date.now().toString();

    reset({
      title: '',
      checklistItems: [
        {
          id,
          title: '',
        },
      ],
    });

    setEditingIds({
      [id]: true,
    });
  };

  const openForm = (checklist?: Checklist) => {
    if (checklist) {
      setEditingChecklist(checklist);

      reset({
        title: checklist.title,
        checklistItems: checklist.checklistItems.map((item) => ({
          id: item.id,
          title: item.title,
        })),
      });

      setEditingIds(
        checklist.checklistItems.reduce(
          (acc, item) => ({
            ...acc,
            [item.id]: false,
          }),
          {},
        ),
      );

      return;
    }

    resetForm();
  };

  const handleAddItem = () => {
    append({
      id: Date.now().toString(),
      title: '',
    });
  };

  const handleEdit = (id: string) => {
    setEditingIds((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  const handleSave = (id: string) => {
    setEditingIds((prev) => ({
      ...prev,
      [id]: false,
    }));
  };

  const onSubmit = (data: ChecklistForm, onClose: () => void) => {
    const payload = {
      title: data.title,
      completed: editingChecklist?.completed ?? false,
      checklistItems: data.checklistItems.map((item) => ({
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
    fields,
    editingIds,
    editingChecklist,
    openForm,
    resetForm,
    handleAddItem,
    handleEdit,
    handleSave,
    remove,
    onSubmit,
    closeForm,
    closeSheet,
  };
};
