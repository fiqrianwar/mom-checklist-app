import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AppScreen, BottomSheet } from '@/components';
import { useBottomSheet } from '@/hooks/useBottomSheet';
import { HomeBottomSheet } from './components';
import { size } from '@/theme/tokens';

type Props = {};

const Home = (props: Props) => {
  return (
    <AppScreen scrollable>
      <Text
        style={{
          fontSize: size['size-4'],
        }}
      >
        Home
      </Text>

      <HomeBottomSheet />
    </AppScreen>
  );
};

export default Home;
