import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from '../../styles';
import { icons } from '@/assets';

type Props = {};

const HeaderStaticCard = (props: Props) => {
  return (
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
  );
};

export default HeaderStaticCard;
