import { StyleSheet, Dimensions } from 'react-native';

export const lightTheme = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
  },
  headerBlock: {
    backgroundColor: '#F0FFFF',
    elevation: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 22,
    fontFamily: 'serif',
    fontWeight: 'bold',
    color: '#000',
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  defText: {
    fontSize: 16,
    fontFamily: 'serif',
    opacity: 0.6,
  },
  countText: {
    fontSize: 20,
    fontFamily: 'serif',
    fontWeight: 'bold',
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  transaction: {
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 12,
  },
  card: {
    backgroundColor: '#F0FFFF',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  scrollWrap: {
    marginBottom: Dimensions.get('screen').height / 1.85,
  },
  scroll: {
    paddingBottom: 20,
  },
  transText: {
    maxWidth: '80%',
    fontSize: 14,
    fontFamily: 'serif',
    marginBottom: 10,
    opacity: 0.8,
  },
  transDate: {
    fontSize: 12,
    fontFamily: 'serif',
    opacity: 0.6,
  },
  transMoney: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  scrollWrapMain: {
    flexGrow: 1,
    marginBottom: Dimensions.get('screen').height / 20,
  },
  clear: {
    marginTop: Dimensions.get('screen').height / 4,
    alignItems: 'center',
  },
  clearText: {
    fontSize: 25,
    fontFamily: 'serif',
  },
  transBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollCategory: {
    marginBottom: Dimensions.get('screen').height / 3.4,
  },
});

export const darkTheme = StyleSheet.create({
  headerBlock: {
    backgroundColor: '#d3d3d3',
    elevation: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#d3d3d3',
  },
  shadow: {
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});
