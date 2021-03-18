import { Icon, Input, Item } from 'native-base';
import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { lightTheme, darkTheme } from '../../assets/styles/auth';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import I18n from '../../localization/locale';
import auth from '@react-native-firebase/auth';
import { useActions } from '../../hooks/useActions';

const Registration = () => {
  // const expressionEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const switchColor = useTypedSelector((state) => state.switchTheme.theme);
  const styles = switchColor ? lightTheme : { ...lightTheme, ...darkTheme };
  const signUp = useTypedSelector((state) => state.auth);
  const {
    setUserEmail,
    setUserPassword,
    setUserError,
    switchSecure,
  } = useActions();

  const signUpNewUser = async () => {
    if (signUp.email !== '' && signUp.password !== '') {
      auth()
        .createUserWithEmailAndPassword(signUp.email, signUp.password)
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            setUserError(I18n.t('emailUse'));
          }
          if (error.code === 'auth/invalid-email') {
            setUserError(I18n.t('invalidEmail'));
          }
          if (signUp.password.length < 6) {
            setUserError(I18n.t('passValidation'));
          }
        });
    } else {
      setUserError(I18n.t('emptyFields'));
    }
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View>
        <Image
          style={styles.logo}
          source={require('../../assets/image/logotypes/logoTransparent.png')}
        />
      </View>
      <View style={styles.loginSection}>
        <Text style={styles.loginText}>{I18n.t('registration')}</Text>
        <View>
          <Item style={styles.loginInputs}>
            <Icon style={styles.icons} active name="ios-person" />
            <Input
              onChangeText={(text) => setUserEmail(text)}
              value={signUp.email}
              style={styles.inputs}
              placeholder={I18n.t('email')}
            />
          </Item>
          <Item style={styles.loginInputs}>
            <Icon style={styles.icons} active name="ios-key" />
            <Input
              onChangeText={(text) => setUserPassword(text)}
              value={signUp.password}
              style={styles.inputs}
              placeholder={I18n.t('password')}
              secureTextEntry={signUp.secure}
            />
            <TouchableOpacity onPress={() => switchSecure(!signUp.secure)}>
              <Icon style={styles.icons} active name="eye" />
            </TouchableOpacity>
          </Item>
        </View>
        {signUp.error ? (
          <Text style={styles.errorMsg}>{signUp.error}</Text>
        ) : null}
        <View style={styles.loginButtons}>
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => signUpNewUser()}
          >
            <Text style={styles.loginBtnText}>{I18n.t('signUp')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Registration;
