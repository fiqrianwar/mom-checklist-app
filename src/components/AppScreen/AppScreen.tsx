import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { AppScreenProps } from './types';

const AppScreen = ({
  children,
  scrollable = false,
  style,
  contentContainerStyle,
  useSafeArea = true,
}: AppScreenProps & { useSafeArea?: boolean }) => {
  const Container = useSafeArea ? SafeAreaView : View;

  if (scrollable) {
    return (
      <Container style={[styles.container, style]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            flex: 1,
          }}
          contentContainerStyle={[
            contentContainerStyle,
            {
              flexGrow: 1,
            },
          ]}
        >
          {children}
        </ScrollView>
      </Container>
    );
  }

  return (
    <Container style={[styles.container, style]}>
      <View style={[styles.content, contentContainerStyle]}>{children}</View>
    </Container>
  );
};

export default AppScreen;
