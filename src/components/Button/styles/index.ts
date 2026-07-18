import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  secondary: {
    backgroundColor: '#A775C8',
    flexDirection: 'row',
    padding: 12,
    gap: 8,
    borderRadius: 8,
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
    padding: 12,
    gap: 8,
    borderRadius: 8,
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
    padding: 12,
    marginTop: 12,
    gap: 8,
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
    padding: 12,
    marginTop: 12,
    gap: 8,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'center',
  },

  textLinkText: {
    color: '#A775C8',
    fontWeight: '700',
  },

  textFormPrimary: {
    color: 'white',
    fontWeight: '700',
  },
});

export default styles;
