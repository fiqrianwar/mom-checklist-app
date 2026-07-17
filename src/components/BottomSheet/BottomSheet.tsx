import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

import React, { forwardRef, useMemo } from 'react';
import styles from './styles';
import { PropsBottomSheet } from './types';

const AppBottomSheet = forwardRef<BottomSheetModal, PropsBottomSheet>(({ children }, ref) => {
  const snapPoints = useMemo(() => ['30%'], []);

  const renderBackdrop = (props: BottomSheetBackdropProps) => (
    <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} opacity={0.6} />
  );

  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      handleIndicatorStyle={{
        backgroundColor: '#E4E3E6',
      }}
      index={1}
    >
      <BottomSheetView style={styles.containerBottomSheer}>{children}</BottomSheetView>
    </BottomSheetModal>
  );
});

export default AppBottomSheet;

AppBottomSheet.displayName = 'AppBottomSheet';
