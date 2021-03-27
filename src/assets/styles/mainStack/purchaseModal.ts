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
    backgroundColor: '#00BFFF',
    elevation: 10,
    borderColor: '#ADD8E6',
    borderWidth: 1,
  },
  closeBtn: {
    width: 130,
    padding: 10,
    marginTop:10,
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
    color: '#141414',
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
});
