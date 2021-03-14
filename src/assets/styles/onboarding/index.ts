import { StyleSheet } from "react-native";

export const lightTheme = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#F0FFFF",
  },
  headerBlock: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImg: {
    width: 200,
    height:50
  },
  onboardImg: {
    width: "auto",
    height: 250,
  },
  description: {
    height:'auto',
    width:'95%',
    marginLeft:"2.5%"
  },
  descrTitleText: {
    fontSize:35,
    textAlign:'center',
    fontWeight:'bold',
 
  },
  descrContentText: {
    marginTop:20,
    textAlign:'left',
    fontSize:24,
    color:'#707070',
  },
  btnBlock: {
    alignItems:'center',
  },
  mainCircle:{
    borderWidth:3,
    width:100,
    height:100,
    borderRadius:100,
    borderColor:'#000',
    backgroundColor:'#fff'
  },
  secondCircle: {
    justifyContent:'center',
    alignItems:'center',
    height:95
  },
  thirtCircle:{
    borderWidth:2,
    borderColor:'#000',
    width:70,
    height:70,
    borderRadius:100,
    backgroundColor:'#FFFAFA'
  },
  arrowRight:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:40,
    color:'#000'
  },
});

export const darkTheme = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#000",
  },
  descrTitleText: {
    fontSize:35,
    textAlign:'center',
    fontWeight:'bold',
    color:'#fff'
  },
});
