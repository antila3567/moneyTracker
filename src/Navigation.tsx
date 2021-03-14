import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SignIn, Registration } from "./screens/auth";
import { Category, Settings, History, Wallet } from "./screens/home";
import OnboardingScreen from "./screens/onboarding/OnboardingScreen";

const Auth = createStackNavigator();
const Tabs = createBottomTabNavigator();

export default () => {
  const [token, setToken] = useState("");
  return (
    <NavigationContainer>
      {token ? (
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
