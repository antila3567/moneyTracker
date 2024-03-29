import { StyleSheet } from 'react-native';

export const lightTheme = StyleSheet.create({
  cardBtn: {
    backgroundColor: 'red',
  },
  content: {
    backgroundColor: '#F0FFFF',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#000',
  },
  contentView: {
    justifyContent: 'flex-end',
    marginBottom: 45,
  },
  addBtnCard: {
    bottom: 40,
    height: 82,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtn: {
    borderRadius: 100,
    height: 70,
    width: 70,
    fontSize: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth: 8,
    backgroundColor: '#F0FFFF',
    borderColor: '#00e0fa',
  },
  iconTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#141414',
    fontFamily: 'serif',
  },
  iconsBlock: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderColor: 'gray',
  },
  icon: {
    borderWidth: 1,
    borderRadius: 30,
    padding: 5,
    margin: 5,
  },
  selectColor: {
    borderWidth: 1,
    padding: 20,
    borderRadius: 30,
    margin: 5,
  },
  buttonsBlock: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
  },
  btnAdd: {
    marginTop: 10,
    borderRadius: 10,
    width: 130,
    padding: 10,
    elevation: 4,
    backgroundColor: '#006586',
  },
  btnCLose: {
    marginTop: 10,
    borderRadius: 10,
    width: 130,
    padding: 10,
  },
  createBtnTextClose: {
    fontSize: 17,
    textAlign: 'center',
    color: 'gray',
    fontFamily: 'serif',
  },
  createBtnText: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'serif',
  },
  iconsImg: {
    width: 30,
    height: 30,
  },
  inputName: {
    color: '#000',
    textAlign: 'center',
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
  contentTitle: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#fff',
  },
  iconTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#d5d5d5',
    fontFamily: 'serif',
  },
  createBtn: {
    marginTop: 10,
    borderRadius: 10,
    width: 120,
    padding: 10,
    elevation: 7,
    backgroundColor: '#d3d3d3',
  },
  inputName: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'serif',
  },
  addBtn: {
    borderRadius: 100,
    height: 70,
    width: 70,
    fontSize: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth: 8,
    backgroundColor: '#d3d3d3',
    borderColor: '#000',
  },
  btnAdd: {
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
