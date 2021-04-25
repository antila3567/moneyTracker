import { StyleSheet } from 'react-native';

export const lightTheme = StyleSheet.create({
  content: {
    backgroundColor: '#F0FFFF',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  contentView: {
    justifyContent: 'flex-end',
    marginBottom: 45,
  },
  contentBlock: {
    width: '100%',
  },
  categoryName: {
    fontFamily: 'serif',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  categoryTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  defTab: {
    padding: 10,
  },
  tabActive: {
    padding: 10,
    borderBottomWidth: 2,
    borderColor: '#ADD8E6',
    elevation: 10,
    backgroundColor: '#F0FFFF',
    borderRadius: 10,
  },
  tabText: {
    fontSize: 18,
    fontFamily: 'serif',
    color: 'gray',
    fontWeight: 'bold',
  },
  inputName: {
    marginTop: 20,
    fontFamily: 'serif',
    color: '#000',
  },
  confirmBtnBLock: {
    marginTop: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  confirmBtn: {
    marginTop: 10,
    borderRadius: 10,
    width: 150,
    padding: 10,
    backgroundColor: '#006586',
    elevation: 10,
  },
  closeBtn: {
    width: 130,
    padding: 10,
    marginTop: 10,
  },
  closeBtnText: {
    fontSize: 17,
    textAlign: 'center',
    color: 'gray',
    fontFamily: 'serif',
  },
  confirmBtnText: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'serif',
  },
});

export const darkTheme = StyleSheet.create({
  content: {
    backgroundColor: '#141414',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  categoryName: {
    fontFamily: 'serif',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#d3d3d3',
  },
  inputName: {
    marginTop: 20,
    fontFamily: 'serif',
    color: '#d3d3d3',
  },
  confirmBtn: {
    marginTop: 10,
    borderRadius: 10,
    width: 150,
    padding: 10,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    backgroundColor: '#000',
    shadowColor: '#000',
  },
});
