import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Modal, StyleSheet, Text, View, Pressable } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Button } from '../Button';
import styles from './styles';
import { AppModalProps, AppModalRef } from './types';

const AppModal = forwardRef<AppModalRef, AppModalProps>(
  ({ title, description, confirmText = 'Confirm', cancelText = 'Cancel', onConfirm }, ref) => {
    const [visible, setVisible] = useState(false);

    const open = () => setVisible(true);
    const close = () => setVisible(false);

    useImperativeHandle(ref, () => ({
      open,
      close,
    }));

    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.flex}>
          <Modal animationType="fade" transparent visible={visible} onRequestClose={close}>
            <View style={styles.overlay}>
              <View style={styles.modalView}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>{title}</Text>
                  <Text style={styles.modalDescription}>{description}</Text>
                </View>

                <View style={styles.modalActions}>
                  {onConfirm && (
                    <View style={styles.flex}>
                      <Button variant="formSecondary" title={confirmText} onPress={onConfirm} />
                    </View>
                  )}
                  <View style={styles.flex}>
                    <Button variant="formPrimary" title={cancelText} onPress={close} />
                  </View>
                </View>
              </View>
            </View>
          </Modal>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  },
);

AppModal.displayName = 'AppModal';

export default AppModal;
