import { StyleSheet } from 'react-native';

export const lightTheme = StyleSheet.create({
  listOfDays: {
    flexDirection: 'row',
  },
  days: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 8,
    backgroundColor: '#F0FFFF',
    width: 50,
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  textBlock: {
    paddingVertical: 5,
  },
});

export const darkTheme = StyleSheet.create({
  listOfDays: {
    flexDirection: 'row',
  },
  days: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 8,
    backgroundColor: '#d3d3d3',
    width: 50,
  },
  shadow: {
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 1,
  },
});
