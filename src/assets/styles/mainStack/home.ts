import { StyleSheet } from 'react-native';

export const lightTheme = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#ADD8E6',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F0FFFF',
    height: 70,
    elevation: 10,
  },
  calendar: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:'#00BFFF',
    paddingHorizontal: 10,
    height: 50,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth: 2,
    borderRightWidth: 0,
    borderColor: '#00BFFF',
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  chooseDay: {
    fontSize: 20,
    marginLeft: 10,
    color: '#000',
  },
  iconCalendar: {
    color: '#000',
  },
  catagories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  catagoriesBtn: {
    flexDirection: 'row',
  },
  catagoriesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  defaultBtn: {
    fontSize: 50,
  },
  activeBtn: {
    borderBottomWidth: 2,
    borderColor: '#00BFFF',
    color: '#00BFFF',
    fontSize: 50,
  },
  blockIcons: {
    width: 30,
    height: 30,
  },
  blockList: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  blockItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F0FFFF',
    width: 'auto',
    alignItems: 'center',
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    elevation: 5,
  },
  blockName: {
    marginLeft: 5,
  },
  scrollWrap: {
    paddingBottom: 60,
  },
  showBlock: {
    flexDirection: 'row',
  },
  addBlockBtn: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  addBtn: {
    borderWidth: 2,
    borderRadius: 10,
    width: 150,
    padding: 15,
    borderColor:'#00BFFF',
    backgroundColor:'#fff',
  },
  addBtnText: {
    textAlign: 'center',
    fontWeight:'bold'
  },
  descriptionBlock: {
    marginTop: 20,
    width: 320,
    height: 250,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: '#F0FFFF',
  },
  descriptionTitle: {
    fontSize:18,
    fontWeight:'bold',
    borderBottomWidth:1,
    borderColor:'#00BFFF',
    textAlign: 'center',
    padding: 15,
    backgroundColor:'#fff',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    elevation:10
  },
  descriptionText: {
    fontSize:15,
    color:'#000',
    padding:5,
    height: '60%'
  },
  moneyBlock: {
    flexDirection:'row',
    justifyContent:'space-between',
    padding:5,
  }
});

export const darkTheme = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#000',
  },
  blockItem: {
    flexDirection: 'row',
    backgroundColor: '#F0FFFF',
    width: 'auto',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 10,
  },
});
