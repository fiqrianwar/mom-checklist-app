import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useFonts } from 'expo-font';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { fonts } from './assets/fonts';
import { RootNavigator } from './navigation';

export default function App() {
  const [loaded] = useFonts({
    'Satoshi-Regular': fonts['Satoshi-Regular'],
    'Satoshi-Medium': fonts['Satoshi-Medium'],
    'Satoshi-Bold': fonts['Satoshi-Bold'],
  });

  if (!loaded) {
    return (
      <View
        style={{
          flex: 1,

          justifyContent: 'center',

          alignItems: 'center',
        }}
      >
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <BottomSheetModalProvider>
          <RootNavigator />
        </BottomSheetModalProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
