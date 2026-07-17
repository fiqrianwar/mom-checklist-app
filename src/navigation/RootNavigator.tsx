import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { RootStackParamList } from './types';
import { HomeScreen, MomChecklistScreen } from '@/screens';
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { icons } from '@/assets';
import { BackButton } from '@/components';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="MomChecklist"
          component={MomChecklistScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: '',
            headerBackTitleVisible: false,
            headerShadowVisible: false,
            headerLeft: () => <BackButton onPress={navigation.goBack} title="New Mom Checklist" />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
