import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { ProgressBarProps } from './types';

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  height = 5,
  color = '#FFBC8F',
  fullColor = '#A775C8',
  backgroundColor = '#FFE6D5',
  borderRadius = 8,
}) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 1);
  const barColor = clampedProgress >= 1 ? fullColor : color;

  return (
    <View style={[styles.track, { height, backgroundColor, borderRadius }]}>
      <View
        style={[
          styles.bar,
          {
            width: `${clampedProgress * 100}%`,
            backgroundColor: barColor,
            borderRadius,
          },
        ]}
      />
    </View>
  );
};

export default ProgressBar;
