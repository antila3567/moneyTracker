import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SignIn, Registration } from './screens/auth';
import { HomeScreen, Settings, History, Wallet } from './screens/home';
import { Icon } from 'native-base';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useTypedSelector } from './hooks/useTypedSelector';
import { useActions } from './hooks/useActions';
import { IAuthUser } from './redux/types/authTypes';
import OnboardingScreen from './screens/onboarding/OnboardingScreen';
import auth from '@react-native-firebase/auth';
import AddPayBlock from './components/modals/addPayModal';
import I18n from './localization/locale';
import { kred } from './services/google';
import * as RNLocalize from 'react-native-localize';
import { useTranslation } from 'react-i18next';

export default () => {
  GoogleSignin.configure({
    webClientId: kred,
  });
  const Auth = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const authState = useTypedSelector((state) => state.auth);
  const theme = useTypedSelector((state) => state.settings.theme);
  const lang = useTypedSelector((state) => state.settings.language);
  const isInit = useTypedSelector((state) => state.settings.isInit);
  const acc = useTypedSelector((state) => state.settings.isAccount);
  const { setInit, setUserInfo, changeLanguage } = useActions();
  const locales = RNLocalize.getLocales();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang === '') {
      changeLanguage(locales[0].languageCode);
      i18n.changeLanguage(locales[0].languageCode);
    } else {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  const onAuthStateChanged = (user: IAuthUser | any) => {
    setUserInfo(user);
    if (authState.initializing) setInit(false);
  };

  const PayScreenComponent = () => {
    return null;
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const activeStyles = {
    color: theme ? '#00BFFF' : '#d3d3d3',
    fontSize: 30,
  };
  const inActive = {
    color: theme ? '#006586' : 'gray',
    fontSize: 25,
  };

  return (
    <NavigationContainer>
      {!isInit ? (
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: theme ? '#006586' : '#d3d3d3',
            labelStyle: { fontFamily: 'serif' },
            style: {
              backgroundColor: theme ? '#F0FFFF' : '#141414',
              position: 'relative',
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: i18n.t('home'),
              tabBarIcon: ({ focused }) => (
                <Icon name="home" style={focused ? activeStyles : inActive} />
              ),
            }}
          />
          <Tab.Screen
            name="Wallet"
            component={Wallet}
            options={{
              tabBarLabel: I18n.t('wallet'),
              tabBarIcon: ({ focused }) => (
                <Icon
                  name="ios-wallet"
                  style={focused ? activeStyles : inActive}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Pay"
            component={PayScreenComponent}
            options={{
              tabBarButton: () => <AddPayBlock />,
            }}
          />
          <Tab.Screen
            name="History"
            component={History}
            options={{
              tabBarLabel: I18n.t('operations'),
              tabBarIcon: ({ focused }) => (
                <Icon
                  name="ios-card"
                  style={focused ? activeStyles : inActive}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarLabel: I18n.t('settings'),
              tabBarIcon: ({ focused }) => (
                <Icon
                  name="ios-settings"
                  style={focused ? activeStyles : inActive}
                />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <Auth.Navigator>
          {isInit && !acc && (
            <Auth.Screen
              name="Onboarding"
              component={OnboardingScreen}
              options={{ headerShown: false }}
            />
          )}
          <Auth.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Auth.Screen
            name="SignUp"
            component={Registration}
            options={{ headerShown: false }}
          />
        </Auth.Navigator>
      )}
    </NavigationContainer>
  );
};
