import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#EADEF2',
    padding: 12,
    borderRadius: 8,
  },
  container: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  checked: {
    backgroundColor: '#EADEF2',
  },
  unchecked: {
    backgroundColor: '#FFFFFF',
  },
  checkIcon: {
    width: 24,
    height: 24,
  },
  circle: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderRadius: 12, // ✅ use numeric radius instead of '50%'
    borderColor: '#A775C8',
  },
  textContainer: {
    flexDirection: 'column',
    gap: 4,
  },
  title: {
    fontWeight: '700',
  },
  subtitle: {
    color: '#78707E',
  },
  lineThrough: {
    textDecorationLine: 'line-through',
  },
});

export default styles;
