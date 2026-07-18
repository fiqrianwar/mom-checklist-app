import { size, spacing } from '@/theme/tokens';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  content: {
    padding: spacing['spacing-4'],
    flexDirection: 'column',
    gap: spacing['spacing-5'],
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
    padding: spacing['spacing-1'],
    fontSize: spacing['spacing-5'],
    fontWeight: '700',
    borderColor: '#E4E3E6',
  },
  divider: {
    borderWidth: 5,
    borderColor: '#F0EFF0',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: spacing['spacing-4'],
    borderTopWidth: 1,
    borderColor: '#E4E3E6',
    marginVertical: spacing['spacing-6'],
  },
  footerButtonLeft: {
    flex: 1,
    marginRight: spacing['spacing-2'],
  },
  footerButtonRight: {
    flex: 1,
    marginLeft: spacing['spacing-2'],
  },
});

export default styles;
