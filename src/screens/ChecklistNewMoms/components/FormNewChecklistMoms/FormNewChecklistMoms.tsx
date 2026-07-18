import { icons } from '@/assets';
import { BottomSheet, Button, CardsInputEdit } from '@/components';
import { useBottomSheet } from '@/hooks/useBottomSheet';
import { RootStackParamList } from '@/navigation';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import styles from './styles';

type Props = {};

const FormNewChecklistMoms = (props: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'MomChecklistScreen'>>();

  const { ref, open, close } = useBottomSheet();

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
            <Text style={styles.headerTitle}>Add New Checklist</Text>
            <Pressable onPress={close}>
              <Image source={icons.close} />
            </Pressable>
          </View>

          <BottomSheetTextInput placeholder="Masukkan Checklist" style={styles.input} />
        </View>

        <View style={styles.divider} />

        <CardsInputEdit />

        <Button title="Add New Item" variant="linkText" icon={icons.addPlusPurple} />

        <View style={styles.footer}>
          <View style={styles.footerButtonLeft}>
            <Button title="Cancel" variant="formSecondary" onPress={close} />
          </View>
          <View style={styles.footerButtonRight}>
            <Button
              title="Add"
              variant="formPrimary"
              onPress={() => console.log('Add new checklist')}
            />
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default FormNewChecklistMoms;
