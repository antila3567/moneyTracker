import { Icon, Input, Item } from 'native-base';
import React, { ReactElement, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import { lightTheme, darkTheme } from '../../assets/styles/auth';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import I18n from 'i18next';
import auth from '@react-native-firebase/auth';
import { useActions } from '../../hooks/useActions';
import { grad } from '../../assets/styles/blocks/gradient';
import LinearGradient from 'react-native-linear-gradient';

const Registration = (): ReactElement => {
  // const expressionEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const theme = useTypedSelector((state) => state.settings.theme);
  const styles = theme ? lightTheme : { ...lightTheme, ...darkTheme };
  const signUp = useTypedSelector((state) => state.auth);
  const {
    setUserEmail,
    setUserPassword,
    setUserError,
    switchSecure,
    isFirstInit,
  } = useActions();

  useEffect(() => {
    if (signUp.user !== null) {
      isFirstInit(false);
      setUserError(null)
    }
  }, [signUp.user]);

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
    <LinearGradient
      colors={theme ? grad.lightBackground : grad.darkBg}
      style={styles.wrapper}
    >
      <SafeAreaView>
        <KeyboardAvoidingView behavior="padding">
          <View>
            <Image
              style={styles.logo}
              source={require('../../assets/image/logotypes/logoTransparent.png')}
            />
          </View>
          <View>
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
                  <Icon
                    style={styles.icons}
                    active
                    name={signUp.secure ? 'eye-off' : 'eye'}
                  />
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
          <View style={{ height: 60 }}></View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Registration;
