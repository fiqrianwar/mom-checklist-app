import { size } from '@/theme/tokens';
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
    gap: 24,
    paddingVertical: 24,
  },
  cardOrange: {
    padding: 16,
    backgroundColor: '#FFF0E5',
    borderRadius: 8,
  },
  cardPurple: {
    padding: 24,
    paddingBottom: 12,
    backgroundColor: '#EADEF2',
    borderRadius: 8,
    borderTopRightRadius: 24,
    position: 'relative',
  },
  momIconWrapper: {
    position: 'absolute',
    top: '-20%',
    left: '8%',
  },
  spacer: {
    paddingTop: 16,
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
