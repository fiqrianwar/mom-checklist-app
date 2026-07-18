import { View, Text, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { icons } from '@/assets';
import styles from './styles/index';
import { Button } from '../Button';
import { Props } from './types';

const CardCheckListItem = ({ text, checked, pressToggle }: Props) => {
  return (
    <View style={styles.wrapper}>
      <Pressable onPress={pressToggle}>
        <View style={[styles.container, checked ? styles.checked : styles.unchecked]}>
          {checked ? (
            <Image source={icons.checkPurple} style={styles.checkIcon} />
          ) : (
            <View style={styles.circle} />
          )}

          <View style={styles.textContainer}>
            <Text style={[styles.title, checked && styles.lineThrough]}>{text}</Text>
            <Text style={[styles.subtitle, checked && styles.lineThrough]}>5 Products</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default CardCheckListItem;
