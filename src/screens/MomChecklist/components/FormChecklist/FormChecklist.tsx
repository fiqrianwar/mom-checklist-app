import React, { forwardRef, useImperativeHandle } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { BottomSheet, Button, CardsInputEdit, FormTextInput } from '@/components';
import { useBottomSheet } from '@/hooks/useBottomSheet';
import { Checklist } from '@/store';
import styles from './styles';
import { icons } from '@/assets';
import { useChecklistForm } from './hooks/useChecklistForm';
import { ChecklistFormRef, PropsFormChecklist } from './types';

const FormChecklist = forwardRef<ChecklistFormRef, PropsFormChecklist>(({ routeName }, refs) => {
  const { ref, open, close } = useBottomSheet();
  const {
    control,
    handleSubmit,
    items,
    editingChecklist,
    openForm,
    handleAddItem,
    handleEdit,
    handleSave,
    onSubmit,
  } = useChecklistForm(routeName);

  useImperativeHandle(refs, () => ({
    open: (checklist?: Checklist) => {
      openForm(checklist);
      open();
    },
    close,
  }));

  return (
    <View>
      <Button
        title="Add New Checklist"
        icon={icons.addPlusPurple}
        variant="primary"
        onPress={open}
      />

      <BottomSheet
        ref={ref}
        style={{
          padding: 0,
        }}
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>
              {editingChecklist ? 'Edit Checklist' : 'Add New Checklist'}
            </Text>
            <Pressable onPress={close}>
              <Image source={icons.close} />
            </Pressable>
          </View>

          <FormTextInput control={control} name="title" label="Title" style={styles.input} />
        </View>

        <View style={styles.divider} />

        {items.map((item) => (
          <CardsInputEdit key={item.id} item={item} onEdit={handleEdit} onSave={handleSave} />
        ))}

        <Button
          title="Add New Item"
          variant="linkText"
          icon={icons.addPlusPurple}
          onPress={handleAddItem}
        />

        <View style={styles.footer}>
          <View style={styles.footerButtonLeft}>
            <Button title="Cancel" variant="formSecondary" onPress={close} />
          </View>
          <View style={styles.footerButtonRight}>
            <Button
              title={editingChecklist ? 'Update' : 'Add'}
              variant="formPrimary"
              onPress={handleSubmit((data) => onSubmit(data, close))}
            />
          </View>
        </View>
      </BottomSheet>
    </View>
  );
});

FormChecklist.displayName = 'FormChecklist';

export default FormChecklist;
