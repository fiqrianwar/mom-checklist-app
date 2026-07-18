import { View, Text, Pressable, Image } from 'react-native';
import React from 'react';
import { icons } from '@/assets';
import style from './styles';
import { Props } from './types';

const BackButton = ({ title, onPress }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <View style={style.containerBackButton}>
        <Image source={icons.leftArrow} />
        <Text style={style.textBackButton}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default BackButton;
