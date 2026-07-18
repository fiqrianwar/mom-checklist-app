import { size, spacing } from '@/theme/tokens';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  containerBackButton: {
    flexDirection: 'row',
    gap: spacing['spacing-4'],
    alignItems: 'center',
  },
  textBackButton: {
    fontWeight: '700',
    fontSize: size['size-4'],
  },
});

export default style;
