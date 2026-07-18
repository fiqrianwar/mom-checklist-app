import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';

import React, { forwardRef, useMemo } from 'react';
import styles from './styles';
import { PropsBottomSheet } from './types';

const AppBottomSheet = forwardRef<BottomSheetModal, PropsBottomSheet>(
  ({ children, style }, ref) => {
    const snapPoints = useMemo(() => ['50%'], []);

    const renderBackdrop = (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} opacity={0.6} />
    );

    return (
      <BottomSheetModal
        ref={ref}
        snapPoints={snapPoints}
        index={0}
        backdropComponent={renderBackdrop}
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
        android_keyboardInputMode="adjustResize"
        enableDynamicSizing={false}
      >
        <BottomSheetScrollView
          style={[styles.containerBottomSheer, style]}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </BottomSheetScrollView>
      </BottomSheetModal>
    );
  },
);

export default AppBottomSheet;

AppBottomSheet.displayName = 'AppBottomSheet';
