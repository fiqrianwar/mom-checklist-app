import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#D4B1EF',
    padding: 16,
  },
  wrapper: {
    flexDirection: 'column',
    paddingVertical: 16,
    gap: 24,
  },
  infoCard: {
    flexDirection: 'row',
    borderRadius: 8,
    backgroundColor: 'white',
  },
  iconWrapper: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: '#FFE6D5',
    borderTopRightRadius: 20,
  },
  textWrapper: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    flexShrink: 1,
  },
  infoText: {
    color: '#78707E',
    fontWeight: '700',
    fontSize: 12,
  },
  checklistContainer: {
    flexDirection: 'column',
    gap: 16,
  },
});

export default styles;
