import { View, Text, Pressable, Image } from 'react-native';
import React from 'react';
import { icons } from '@/assets';

type Props = {
  title: string;
  onPress: () => void;
};

const BackButton = ({ title, onPress }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          gap: 16,
          alignItems: 'center',
        }}
      >
        <Image source={icons.leftArrow} />
        <Text
          style={{
            fontWeight: '700',
            fontSize: 16,
          }}
        >
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

export default BackButton;
