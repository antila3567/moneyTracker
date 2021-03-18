import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { lightTheme, darkTheme } from '../../assets/styles/onboarding';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import I18n from '../../localization/locale';

const OnboardingScreen = ({ navigation }: any) => {
  const switchColor = useTypedSelector((state) => state.switchTheme.theme);
  const styles = switchColor ? lightTheme : { ...lightTheme, ...darkTheme };

  const goToAuth = (): void => {
    navigation.navigate('SignIn');
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.headerBlock}>
        <Image
          style={styles.logoImg}
          source={
            switchColor
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
        <Text style={styles.descrContentText}>{I18n.t('onboardContent')}</Text>
      </View>
      <TouchableOpacity style={styles.btnBlock} onPress={() => goToAuth()}>
        <View style={styles.mainCircle}>
          <View style={styles.secondCircle}>
            <View style={styles.thirtCircle}>
              <Text style={styles.arrowRight}>→</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
