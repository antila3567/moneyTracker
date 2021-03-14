import { Icon, Input, Item } from "native-base";
import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View, Image } from "react-native";
import { useDispatch } from "react-redux";
import { lightTheme, darkTheme } from "../../assets/styles/auth";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import I18n from "../../localization/locale";

const Registration = ({navigation}:any) => {
    const [secure, setSecure] = useState(true)
    const dispatch = useDispatch()
    const switchColor = useTypedSelector(state => state.switchTheme.theme)
    const styles = switchColor ? lightTheme : { ...lightTheme, ...darkTheme };
  
    const goToSignIn = () => {
      navigation.navigate('SignIn')
    }
  
    return (
        <SafeAreaView style={styles.wrapper}>
          <View>
            <Image style={styles.logo} source={require('../../assets/image/logotypes/logoTransparent.png')}/>
          </View>
          <View style={styles.loginSection}>
              <Text style={styles.loginText}>{I18n.t('registration')}</Text>
              <View>
                <Item style={styles.loginInputs}>
                  <Icon style={styles.icons} active name='ios-person' />
                  <Input style={styles.inputs} placeholder='username'/>
                </Item>
                <Item style={styles.loginInputs}>
                  <Icon style={styles.icons} active name='ios-key'/>
                  <Input style={styles.inputs} placeholder='password' secureTextEntry={secure}/>
                  <TouchableOpacity onPress={() => setSecure(!secure)}>
                    <Icon style={styles.icons} active name='eye' />
                  </TouchableOpacity>
                </Item>
              </View>
              <View style={styles.loginButtons}>
                <TouchableOpacity style={styles.signUpButton} onPress={() => goToSignIn()}>
                  <Text style={styles.loginBtnText}>{I18n.t('signUp')}</Text>
                </TouchableOpacity>
              </View>
          </View>
        </SafeAreaView>
    );
}

export default Registration