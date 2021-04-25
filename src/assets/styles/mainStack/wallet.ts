import { StyleSheet, Dimensions } from 'react-native';

export const lightTheme = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  textMoney: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'serif',
    textAlign: 'center',
  },
  descriptionText: {
    textAlign: 'center',
    fontFamily: 'serif',
    opacity: 0.7,
  },
  headerBlock: {
    backgroundColor: '#F0FFFF',
    elevation: 10,
    paddingBottom: 20,
  },
  moneyButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  btn: {
    backgroundColor: '#006586',
    width: 150,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  btnText: {
    fontFamily: 'serif',
    fontSize: 20,
    color: '#ffffff',
  },
  scroll: {
    paddingBottom: 50,
    paddingHorizontal: 20,
  },
  planBlock: {
    backgroundColor: '#F0FFFF',
    padding: 10,
    marginTop: 20,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icons: {
    padding: 10,
    fontSize: 35,
    color: '#000000',
  },
  planText: {
    fontSize: 17,
    fontFamily: 'serif',
    opacity: 0.8,
    textAlign: 'center',
  },
  delete: {
    transform: [{ rotate: '45deg' }],
  },
});

export const darkTheme = StyleSheet.create({
  headerBlock: {
    backgroundColor: '#d3d3d3',
    elevation: 10,
    paddingBottom: 20,
  },
  shadow: {
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  planBlock: {
    backgroundColor: '#d3d3d3',
    padding: 10,
    marginTop: 20,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    backgroundColor: '#000',
    width: 150,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});
