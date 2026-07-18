import { size } from '@/theme/tokens';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  content: {
    padding: 16,
    flexDirection: 'column',
    gap: 20,
  },
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
  input: {
    borderBottomWidth: 1,
    padding: 4,
    fontSize: 20,
    fontWeight: '700',
    borderColor: '#E4E3E6',
  },
  divider: {
    borderWidth: 6,
    borderColor: '#F0EFF0',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#E4E3E6',
    marginVertical: 24,
  },
  footerButtonLeft: { flex: 1, marginRight: 8 },
  footerButtonRight: { flex: 1, marginLeft: 8 },
});

export default styles;
