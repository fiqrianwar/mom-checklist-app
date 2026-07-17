import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export type AppScreenProps = {
  children: React.ReactNode;
  scrollable?: boolean;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
};
