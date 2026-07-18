import { spacing } from '@/theme/tokens';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#EADEF2',
    padding: spacing['spacing-3'],
    borderRadius: spacing['spacing-2'],
  },
  container: {
    paddingVertical: 6,
    paddingHorizontal: spacing['spacing-3'],
    borderRadius: spacing['spacing-2'],
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing['spacing-4'],
  },
  checked: {
    backgroundColor: '#EADEF2',
  },
  unchecked: {
    backgroundColor: '#FFFFFF',
  },
  checkIcon: {
    width: spacing['spacing-6'],
    height: spacing['spacing-6'],
  },
  circle: {
    width: spacing['spacing-6'],
    height: spacing['spacing-6'],
    borderWidth: 1,
    borderRadius: spacing['spacing-3'],
    borderColor: '#A775C8',
  },
  textContainer: {
    flexDirection: 'column',
    gap: spacing['spacing-1'],
  },
  title: {
    fontWeight: '700',
  },
  subtitle: {
    color: '#78707E',
  },
  lineThrough: {
    textDecorationLine: 'line-through',
  },
});

export default styles;
