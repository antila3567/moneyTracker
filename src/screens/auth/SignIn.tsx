import { Icon, Input, Item } from 'native-base';
import React, { ReactElement } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { lightTheme, darkTheme } from '../../assets/styles/auth';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import I18n from 'i18next';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { useNavigation } from '@react-navigation/native';
import { grad } from '../../assets/styles/blocks/gradient';
import LinearGradient from 'react-native-linear-gradient';

const SignIn = ({}): ReactElement => {
  const navigation = useNavigation();
  const theme = useTypedSelector((state) => state.settings.theme);
  const styles = theme ? lightTheme : { ...lightTheme, ...darkTheme };
  const login = useTypedSelector((state) => state.auth);
  const {
    setUserEmail,
    setUserPassword,
    setUserError,
    switchSecure,
    setUserToken,
  } = useActions();

  const signInWithFacebook = async () => {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);
    if (result.isCancelled) {
      console.log('User cancelled the login process');
    }
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
      console.log('Something went wrong obtaining access token');
    }
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken
    );
    return auth().signInWithCredential(facebookCredential);
  };

  const signInWithGoogle = async () => {
    const { idToken } = await GoogleSignin.signIn();
    setUserToken(idToken);
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  };

  const signIn = async () => {
    if (login.email !== '' && login.password !== '') {
      auth()
        .signInWithEmailAndPassword(login.email, login.password)
        .catch((error) => {
          if (error.code === 'auth/invalid-email') {
            setUserError(I18n.t('invalidEmail'));
          }
          if (error.code === 'auth/wrong-password') {
            setUserError(I18n.t('wrongPass'));
          }
          if (login.password.length < 6) {
            setUserError(I18n.t('passValidation'));
          }
        });
    } else {
      setUserError(I18n.t('emptyFields'));
    }
  };

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <LinearGradient
      colors={theme ? grad.lightBackground : grad.darkBg}
      style={styles.wrapper}
    >
      <SafeAreaView>
        <View>
          <Image
            style={styles.logo}
            source={require('../../assets/image/logotypes/logoTransparent.png')}
          />
        </View>
        <View>
          <Text style={styles.loginText}>{I18n.t('login')}</Text>
          <View>
            <Item style={styles.loginInputs}>
              <Icon style={styles.icons} active name="ios-person" />
              <Input
                onChangeText={(text) => setUserEmail(text)}
                style={styles.inputs}
                placeholder={I18n.t('username')}
              />
            </Item>
            <Item style={styles.loginInputs}>
              <Icon style={styles.icons} active name="ios-key" />
              <Input
                onChangeText={(text) => setUserPassword(text)}
                style={styles.inputs}
                placeholder={I18n.t('password')}
                secureTextEntry={login.secure}
              />
              <TouchableOpacity onPress={() => switchSecure(!login.secure)}>
                <Icon
                  style={styles.icons}
                  active
                  name={login.secure ? 'eye-off' : 'eye'}
                />
              </TouchableOpacity>
            </Item>
          </View>
          <View style={styles.socialBlock}>
            <View style={styles.loginSocial}>
              <Text style={styles.socialText}>{I18n.t('loginHelp')}</Text>
              <TouchableOpacity onPress={() => signInWithGoogle()}>
                <Image
                  style={styles.socialImg}
                  source={require('../../assets/image/social/google.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => signInWithFacebook()}>
                <Image
                  style={styles.socialImg}
                  source={require('../../assets/image/social/facebook.png')}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={styles.forgotPass}>{I18n.t('forgotPass')}</Text>
            </TouchableOpacity>
          </View>
          {login.error ? (
            <Text style={styles.errorMsg}>{login.error}</Text>
          ) : null}
          <View style={styles.loginButtons}>
            <TouchableOpacity style={styles.loginBtn} onPress={() => signIn()}>
              <Text style={styles.loginBtnText}>{I18n.t('signIn')}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.signUpBtn}
            onPress={() => goToSignUp()}
          >
            <Text style={styles.signUpBtnText}>{I18n.t('signUp')}</Text>
            <Icon style={styles.icons} active name="ios-log-in" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SignIn;
