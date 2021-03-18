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

export default () => {
  GoogleSignin.configure({
    webClientId:
      '568283166698-kj00fldo4trvec20hsfv7p9vomtl90bv.apps.googleusercontent.com',
  });
  const Auth = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const authState = useTypedSelector((state) => state.auth);
  const switchColor = useTypedSelector((state) => state.switchTheme.theme);
  const { setInit, setUserInfo } = useActions();

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

  return (
    <NavigationContainer>
      {authState.user || authState.token ? (
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: '#006586',
            style: { backgroundColor: '#F0FFFF', position: 'relative' },
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: I18n.t('home'),
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
          <Auth.Screen
            name="Onboarding"
            component={OnboardingScreen}
            options={{ headerShown: false }}
          />
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

const activeStyles = {
  color: '#00BFFF',
  fontSize: 30,
};
const inActive = {
  color: '#006586',
  fontSize: 25,
};
