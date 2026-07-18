import { icons } from '@/assets';
import { BottomSheet, Button } from '@/components';
import { useBottomSheet } from '@/hooks/useBottomSheet';
import { RootStackParamList } from '@/navigation';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import styles from './styles';

const HomeBottomSheet = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'MomChecklistScreen'>>();

  const { ref, open, close } = useBottomSheet();

  const navigationCard = [
    {
      title: 'New Moms Checklist',
      icon: icons.mom,
      onPress: () => {
        navigation.navigate('MomChecklistScreen');
        close();
      },
    },
    {
      title: 'Hospital Bag Checklist',
      icon: icons.bag,
      onPress: () => console.log(''),
    },
  ];

  return (
    <>
      <View style={{ flex: 1, marginVertical: '80%', padding: 16 }}>
        <Button onPress={open} title="Open Nav" variant="secondary" />
      </View>

      <BottomSheet ref={ref}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Select Checklist</Text>
          <Pressable onPress={close}>
            <Image source={icons.close} />
          </Pressable>
        </View>

        <View style={styles.container}>
          <View style={styles.cardOrange}>
            <Text style={styles.cardText}>
              Yuk, siapkan checklist untuk mempermudah persiapan kelahiran si Kecil!
            </Text>
          </View>

          {navigationCard.map(({ title, icon, onPress }, i) => (
            <Pressable key={i} onPress={onPress}>
              <View style={styles.cardPurple}>
                <View style={styles.momIconWrapper}>
                  <Image source={icon} />
                </View>
                <View style={styles.spacer} />

                <View style={styles.row}>
                  <Text style={styles.cardNavText}>{title}</Text>
                  <Image source={icons.rightArrow} />
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </BottomSheet>
    </>
  );
};

export default HomeBottomSheet;
