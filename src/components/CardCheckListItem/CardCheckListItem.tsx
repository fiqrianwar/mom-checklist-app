import { View, Text, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { icons } from '@/assets';
import styles from './styles/index';
import { Button } from '../Button';

type Props = {};

const CardCheckListItem = (props: Props) => {
  const [checked, setChecked] = useState(false);

  const toggleCheck = () => setChecked(!checked);

  return (
    <View style={styles.wrapper}>
      <Pressable onPress={toggleCheck}>
        <View style={[styles.container, checked ? styles.checked : styles.unchecked]}>
          {checked ? (
            <Image source={icons.checkPurple} style={styles.checkIcon} />
          ) : (
            <View style={styles.circle} />
          )}

          <View style={styles.textContainer}>
            <Text style={[styles.title, checked && styles.lineThrough]}>Pregnancy Milk</Text>
            <Text style={[styles.subtitle, checked && styles.lineThrough]}>5 Products</Text>
          </View>
        </View>
      </Pressable>

      <View
        style={{
          marginTop: 12,
        }}
      >
        <Button
          title="Add New Item"
          variant="secondary"
          icon={icons.addPlusWhite}
          onPress={() => console.log('Pressed')}
        />
      </View>
    </View>
  );
};

export default CardCheckListItem;
