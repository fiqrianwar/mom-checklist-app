import { spacing } from '@/theme/tokens';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 14,
    backgroundColor: '#fff',
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing['spacing-2'],
    paddingVertical: spacing['spacing-4'],
    backgroundColor: 'transparent',
  },
  tabFocused: {
    backgroundColor: '#D4B1EF',
  },
  firstTab: {
    borderTopRightRadius: 30,
  },
  lastTab: {
    borderTopLeftRadius: 30,
  },
  label: {
    fontWeight: '700',
  },
  labelFocused: {
    color: '#FFFFFF',
  },
  labelInactive: {
    color: '#ACA7AF',
  },
});

export default styles;
