import { size, spacing } from '@/theme/tokens';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFE6D5',
    padding: spacing['spacing-4'],
    borderRadius: size['size-2'],
    shadowColor: '#000',
    shadowOffset: { width: size['size-0'], height: size['size-2'] },
    shadowOpacity: 0.15,
    shadowRadius: size['size-1'],
    elevation: 3,
  },
  cardOpen: {
    borderBottomRightRadius: size['size-0'],
    borderBottomLeftRadius: size['size-0'],
  },
  cardClosed: {
    borderBottomRightRadius: spacing['spacing-2'],
    borderBottomLeftRadius: spacing['spacing-2'],
  },
  cardContent: {
    flexDirection: 'column',
    gap: spacing['spacing-2'],
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerCompleteText: {
    flexDirection: 'row',
    gap: spacing['spacing-2'],
  },
  completeText: {
    color: '#A775C8',
    fontWeight: '700',
  },
  cardTitle: {
    fontWeight: '700',
  },
  progressBar: {
    borderWidth: 2,
    borderRadius: 7,
    borderColor: '#FFBC8F',
  },
  ctaContainer: {
    backgroundColor: '#A775C8',
    paddingVertical: 10,
    paddingHorizontal: spacing['spacing-5'],
    flexDirection: 'row',
    borderBottomRightRadius: spacing['spacing-2'],
    borderBottomLeftRadius: spacing['spacing-2'],
    gap: spacing['spacing-5'],
    justifyContent: 'flex-end',
  },
  ctaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing['spacing-1'],
  },
  ctaText: {
    color: 'white',
  },
});

export default styles;
