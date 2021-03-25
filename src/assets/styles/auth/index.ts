import {StyleSheet} from 'react-native';

export const lightTheme = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#ADD8E6',
  },
  logo: {
    width: 'auto',
    height: 280,
  },
  icons: {
    color: '#000',
  },
  inputs: {
    color: '#000',
  },
  loginSection: {
    flex: 1,
    backgroundColor: '#F0FFFF',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  loginText: {
    textAlign: 'center',
    fontSize: 35,
    color: '#000',
    fontFamily:'serif'
  },
  loginInputs: {
    marginTop: 10,
    paddingHorizontal: 25,
  },
  socialBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  loginSocial: {
    flexDirection: 'row',
  },
  socialText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily:'serif'
  },
  socialImg: {
    marginLeft: 5,
    width: 30,
    height: 30,
  },
  forgotPass: {
    fontSize: 14,
    color: 'gray',
    fontFamily:'serif'
  },
  loginButtons: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  loginBtn: {
    width: '45%',
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#ADD8E6',
    paddingHorizontal: 2,
    paddingVertical: 13,
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 10,
  },
  loginBtnText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    color: '#000',
    fontFamily:'serif'
  },
  signUpBtn: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUpBtnText: {
    fontSize: 18,
    color: 'gray',
    fontWeight: 'bold',
    fontFamily:'serif'
  },
  signUpButton: {
    width: '60%',
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#ADD8E6',
    paddingHorizontal: 2,
    paddingVertical: 13,
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 10,
  },
  errorMsg: {
    textAlign: 'center',
    marginTop: 5,
    color: 'red',
  },
});

export const darkTheme = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#d3d3d3',
  },
  loginSection: {
    flex: 1,
    backgroundColor: '#000',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  icons: {
    color: '#d3d3d3',
  },
  inputs: {
    color: '#d3d3d3',
  },
  loginText: {
    textAlign: 'center',
    fontSize: 35,
    color: '#d3d3d3',
    fontFamily:'serif'
  },
  loginBtn: {
    width: '45%',
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#d3d3d3',
    paddingHorizontal: 2,
    paddingVertical: 13,
    backgroundColor: '#000',
    shadowColor: '#000',
    elevation: 10,
  },
  signUpButton: {
    width: '60%',
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#d3d3d3',
    paddingHorizontal: 2,
    paddingVertical: 13,
    backgroundColor: '#000',
    shadowColor: '#000',
    elevation: 10,
  },
  loginBtnText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    color: '#d3d3d3',
    fontFamily:'serif'
  },
  socialText: {
    color: '#d3d3d3',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily:'serif',
  },
});
