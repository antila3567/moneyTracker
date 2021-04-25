import React, { ReactElement, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { grad } from '../../assets/styles/blocks/gradient';
import { lightTheme, darkTheme } from '../../assets/styles/onboarding';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import I18n from 'i18next';
import * as RNLocalize from 'react-native-localize';
import { useTranslation } from 'react-i18next';
import { useActions } from '../../hooks/useActions';

const OnboardingScreen = ({}): ReactElement => {
  const navigation = useNavigation();
  const { isFirstInit } = useActions();
  const theme = useTypedSelector((state) => state.settings.theme);
  const styles = theme ? lightTheme : { ...lightTheme, ...darkTheme };
  const locales = RNLocalize.getLocales();
  const { i18n } = useTranslation();
  
  useEffect(() => {
    i18n.changeLanguage(locales[0].languageCode);
  }, []);

  const goToAuth = (): void => {
    navigation.navigate('SignIn');
    isFirstInit(false);
  };

  return (
    <LinearGradient
      colors={theme ? grad.lightBackground : grad.darkBg}
      style={styles.wrapper}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.headerBlock}>
          <Image
            style={styles.logoImg}
            source={
              theme
                ? require('../../assets/image/logotypes/logoText.png')
                : require('../../assets/image/logotypes/logoWhiteText.png')
            }
          />
        </View>
        <View>
          <Image
            style={styles.onboardImg}
            source={require('../../assets/image/onboarding/onboarding.png')}
          />
        </View>
        <View style={styles.description}>
          <Text style={styles.descrTitleText}>{I18n.t('onboardTitle')}</Text>
          <Text style={styles.descrContentText}>
            {I18n.t('onboardContent')}
          </Text>
        </View>
        <View style={styles.startBlock}>
          <TouchableOpacity style={styles.btnBlock} onPress={() => goToAuth()}>
            <Text style={styles.startBtn}>{I18n.t('start')}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default OnboardingScreen;
