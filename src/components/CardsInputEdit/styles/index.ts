import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
  },
  card: {
    backgroundColor: '#F4EEF8',
    padding: 12,
    borderRadius: 8,
  },
  editCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  editCardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  dividerGroup: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  divider: {
    width: 1,
    height: 18,
    backgroundColor: '#CFB4E1',
    marginVertical: 12,
  },
  cardTitle: {
    fontWeight: '700',
  },
  editingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
  },
  textInput: {
    flex: 1,
    borderBottomWidth: 1,
    paddingVertical: 16,
    borderColor: '#C9AADD',
  },
});

export default styles;
