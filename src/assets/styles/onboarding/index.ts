import { StyleSheet } from 'react-native';

export const lightTheme = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
  },
  headerBlock: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImg: {
    width: 200,
    height: 50,
  },
  onboardImg: {
    width: 'auto',
    height: 250,
  },
  description: {
    height: 'auto',
    width: '95%',
    marginLeft: '2.5%',
  },
  descrTitleText: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  descrContentText: {
    marginTop: 20,
    textAlign: 'left',
    fontSize: 18,
    color: '#707070',
    fontFamily: 'serif',
  },
  startBlock: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
  },
  btnBlock: {
    width: '50%',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#ADD8E6',
    paddingHorizontal: 2,
    paddingVertical: 13,
    backgroundColor: '#F0FFFF',
    shadowColor: '#000',
    elevation: 10,
  },
  startBtn: {
    fontSize: 20,
    fontFamily: 'serif',
    color: '#000',
    textAlign: 'center',
  },
});

export const darkTheme = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#000',
  },
  descrTitleText: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'serif',
  },
  btnBlock: {
    width: '50%',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#d3d3d3',
    paddingHorizontal: 2,
    paddingVertical: 13,
    backgroundColor: '#000',
    shadowColor: '#fff',
    elevation: 10,
  },
  startBtn: {
    fontSize: 20,
    fontFamily: 'serif',
    color: '#fff',
    textAlign: 'center',
  },
});
