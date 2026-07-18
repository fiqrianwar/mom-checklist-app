import { size, spacing } from '@/theme/tokens';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: spacing['spacing-5'],
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: size['size-2'],
    padding: spacing['spacing-4'],
    shadowColor: '#000',
    shadowOffset: {
      width: size['size-0'],
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: size['size-1'],
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'column',
    gap: spacing['spacing-5'],
  },
  modalTitle: {
    fontWeight: '700',
    fontSize: size['size-4'],
  },
  modalDescription: {
    fontWeight: '500',
    fontSize: 14,
    color: '#333',
  },
  modalActions: {
    flexDirection: 'row',
    gap: 10,
    marginTop: spacing['spacing-5'],
  },
});

export default styles;
