import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { BackButton } from '@/components';
import { HomeScreen } from '@/screens';
import TopTabsMomChecklist from './MomChecklistTopTabsNavigator';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="MomChecklistScreen"
          component={TopTabsMomChecklist}
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
