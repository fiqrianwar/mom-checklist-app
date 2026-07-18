import { size, spacing } from '@/theme/tokens';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: size['size-4'],
    fontWeight: '700',
    color: '#25182E',
  },
  container: {
    flexDirection: 'column',
    gap: spacing['spacing-6'],
    paddingVertical: spacing['spacing-6'],
  },
  cardOrange: {
    padding: spacing['spacing-4'],
    backgroundColor: '#FFF0E5',
    borderRadius: 8,
  },
  cardPurple: {
    padding: spacing['spacing-6'],
    paddingBottom: spacing['spacing-3'],
    backgroundColor: '#EADEF2',
    borderRadius: spacing['spacing-2'],
    borderTopRightRadius: spacing['spacing-6'],
    position: 'relative',
  },
  momIconWrapper: {
    position: 'absolute',
    top: '-20%',
    left: '8%',
  },
  spacer: {
    paddingTop: spacing['spacing-4'],
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardText: {
    textAlign: 'center',
    color: '#A775C8',
    fontWeight: '700',
  },
  cardNavText: {
    color: '#61468E',
    fontWeight: '700',
  },
});

export default styles;
