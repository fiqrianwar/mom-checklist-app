import { icons } from '@/assets';
import { BottomSheet, Button, CardsInputEdit, FormTextInput } from '@/components';
import { useBottomSheet } from '@/hooks/useBottomSheet';
import { Checklist } from '@/store';
import React, { forwardRef, useImperativeHandle } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { useChecklistForm } from './hooks/useChecklistForm';
import styles from './styles';
import { ChecklistFormRef, PropsFormChecklist } from './types';

const FormChecklist = forwardRef<ChecklistFormRef, PropsFormChecklist>(({ routeName }, refs) => {
  const { ref, open, close } = useBottomSheet();
  const {
    control,
    handleSubmit,
    editingChecklist,
    editingIds,
    openForm,
    handleEdit,
    handleSave,
    onSubmit,
    handleAddItem,
    closeForm,
    closeSheet,
    fields,
  } = useChecklistForm(routeName);

  const hasUnsavedItem = fields.some((field) => editingIds[field.id]);

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
        onDismis={closeSheet}
        style={{
          padding: 0,
        }}
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>
              {editingChecklist ? 'Edit Checklist' : 'Add New Checklist'}
            </Text>
            <Pressable onPress={() => closeForm(close)}>
              <Image source={icons.close} />
            </Pressable>
          </View>

          <FormTextInput control={control} name="title" label="Title" style={styles.input} />
        </View>

        <View style={styles.divider} />

        {fields.map((field, index) => (
          <CardsInputEdit
            key={field.id}
            control={control}
            index={index}
            editing={editingIds[field.id] ?? true}
            onEdit={() => handleEdit(field.id)}
            onSave={() => handleSave(field.id)}
          />
        ))}

        <Button
          title="Add New Item"
          variant="linkText"
          icon={icons.addPlusPurple}
          onPress={handleAddItem}
        />

        <View style={styles.footer}>
          <View style={styles.footerButtonLeft}>
            <Button title="Cancel" variant="formSecondary" onPress={() => closeForm(close)} />
          </View>
          <View style={styles.footerButtonRight}>
            {!hasUnsavedItem ? (
              <Button
                title={editingChecklist ? 'Update' : 'Add'}
                variant="formPrimary"
                onPress={handleSubmit((data) => onSubmit(data, close))}
              />
            ) : (
              <Button title={editingChecklist ? 'Update' : 'Add'} variant="disabled" />
            )}
          </View>
        </View>
      </BottomSheet>
    </View>
  );
});

FormChecklist.displayName = 'FormChecklist';

export default FormChecklist;
