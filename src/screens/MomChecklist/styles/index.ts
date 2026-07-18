import { size, spacing } from '@/theme/tokens';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    backgroundColor: '#D4B1EF',
    padding: spacing['spacing-4'],
    paddingBottom: 42,
  },
  wrapper: {
    flexDirection: 'column',
    paddingVertical: spacing['spacing-4'],
    gap: spacing['spacing-6'],
  },
  infoCard: {
    flexDirection: 'row',
    borderRadius: size['size-2'],
    backgroundColor: 'white',
  },
  iconWrapper: {
    paddingHorizontal: spacing['spacing-3'],
    paddingVertical: spacing['spacing-2'],
    borderTopLeftRadius: spacing['spacing-2'],
    borderBottomLeftRadius: spacing['spacing-2'],
    backgroundColor: '#FFE6D5',
    borderTopRightRadius: spacing['spacing-5'],
  },
  textWrapper: {
    paddingHorizontal: spacing['spacing-3'],
    paddingVertical: 10,
    flexDirection: 'row',
    flexShrink: 1,
  },
  infoText: {
    color: '#78707E',
    fontWeight: '700',
    fontSize: size['size-3'],
  },
  checklistContainer: {
    flexDirection: 'column',
    gap: spacing['spacing-4'],
  },
});

export default styles;
