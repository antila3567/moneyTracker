import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    cardBtn: {
      backgroundColor: 'red',
    },
    content: {
      backgroundColor: 'white',
      padding: 22,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    contentTitle: {
      fontSize: 20,
      marginBottom: 5,
      fontWeight: 'bold',
      fontFamily:'serif'
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
    },
    iconTitle: {
      fontSize: 15,
      fontWeight: 'bold',
      marginTop: 5,
      color:'#141414',
      fontFamily:'serif',
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
    createBtn: {
      marginTop: 10,
      borderRadius: 10,
      width: 120,
      borderBottomWidth: 2,
      borderColor: 'green',
    },
    closeBtn: {
      borderColor: 'red',
    },
    createBtnText: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#141414',
      fontFamily:'serif',
    },
    iconsImg: {
      width:30,
      height:30
    }
});
