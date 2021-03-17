import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SignIn, Registration } from "./screens/auth";
import { Category, Settings, History, Wallet } from "./screens/home";
import OnboardingScreen from "./screens/onboarding/OnboardingScreen";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useActions } from "./hooks/useActions";

const Auth = createStackNavigator();
const Tabs = createBottomTabNavigator();

export default () => {
  const authState = useTypedSelector(state => state.auth)
  const {setInit, setUserInfo} = useActions()
  
  GoogleSignin.configure({
    webClientId: '568283166698-kj00fldo4trvec20hsfv7p9vomtl90bv.apps.googleusercontent.com',
  });

  const onAuthStateChanged = (user: any) => {
    setUserInfo(user);
    if(authState.initializing) setInit(false);
  };
  
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, []);

  return (
    <NavigationContainer>
      {authState.user || authState.token ? (
        <Tabs.Navigator>
          <Tabs.Screen name="Category" component={Category} />
          <Tabs.Screen name="Wallet" component={Wallet} />
          <Tabs.Screen name="History" component={History} />
          <Tabs.Screen name="Settings" component={Settings} />
        </Tabs.Navigator>
      ) : (
        <Auth.Navigator>
          <Auth.Screen name="Onboarding" component={OnboardingScreen} options={{headerShown: false}} />
          <Auth.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
          <Auth.Screen name="SignUp" component={Registration} options={{headerShown: false}} />
        </Auth.Navigator>
      )}
    </NavigationContainer>
  );
};
