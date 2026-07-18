import { spacing } from '@/theme/tokens';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  secondary: {
    backgroundColor: '#A775C8',
    flexDirection: 'row',
    padding: spacing['spacing-3'],
    gap: spacing['spacing-2'],
    borderRadius: spacing['spacing-2'],
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSecondary: {
    color: 'white',
    fontWeight: '700',
  },
  primary: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: spacing['spacing-3'],
    gap: spacing['spacing-2'],
    borderRadius: spacing['spacing-2'],
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textPrimary: {
    color: '#A775C8',
    fontWeight: '700',
  },
  formSecondary: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#A775C8',
    flexDirection: 'row',
    padding: spacing['spacing-3'],
    marginTop: spacing['spacing-3'],
    gap: spacing['spacing-2'],
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFormSecondary: {
    color: 'black',
    fontWeight: '700',
  },
  formPrimary: {
    backgroundColor: '#A775C8',
    flexDirection: 'row',
    padding: spacing['spacing-3'],
    marginTop: spacing['spacing-3'],
    gap: spacing['spacing-2'],
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: {
    backgroundColor: '#EADEF2',
    flexDirection: 'row',
    padding: spacing['spacing-3'],
    marginTop: spacing['spacing-3'],
    gap: spacing['spacing-2'],
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing['spacing-2'],
    justifyContent: 'center',
  },

  textLinkText: {
    color: '#A775C8',
    fontWeight: '700',
  },

  textDisabled: {
    color: '#FFFFFF',
    fontWeight: '700',
  },

  textFormPrimary: {
    color: 'white',
    fontWeight: '700',
  },
});

export default styles;
