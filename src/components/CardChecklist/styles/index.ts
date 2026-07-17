import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFE6D5',
    padding: 16,
    borderRadius: 8,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    // Shadow for Android
    elevation: 3,
  },
  cardOpen: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  cardClosed: {
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  cardContent: {
    flexDirection: 'column',
    gap: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontWeight: '700',
  },
  progressBar: {
    borderWidth: 2,
    borderRadius: 7,
    borderColor: '#FFBC8F',
  },
  ctaContainer: {
    backgroundColor: '#A775C8',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    gap: 20,
    justifyContent: 'flex-end',
  },
  ctaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ctaText: {
    color: 'white',
  },
});

export default styles;
