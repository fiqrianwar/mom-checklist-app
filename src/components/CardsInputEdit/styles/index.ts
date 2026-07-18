import { spacing } from '@/theme/tokens';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    padding: spacing['spacing-4'],
  },
  card: {
    backgroundColor: '#F4EEF8',
    margin: spacing['spacing-3'],
    paddingHorizontal: spacing['spacing-3'],
    paddingVertical: 10,
    borderRadius: spacing['spacing-2'],
  },
  editCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  editCardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing['spacing-3'],
  },
  dividerGroup: {
    flexDirection: 'row',
    gap: spacing['spacing-1'],
    alignItems: 'center',
  },
  divider: {
    width: 1,
    height: 18,
    backgroundColor: '#CFB4E1',
    marginVertical: spacing['spacing-3'],
  },
  cardTitle: {
    fontWeight: '700',
  },
  editingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: spacing['spacing-4'],
  },
  textInput: {
    flex: 1,
    borderBottomWidth: 1,
    paddingVertical: spacing['spacing-4'],
    borderColor: '#C9AADD',
  },
});

export default styles;
