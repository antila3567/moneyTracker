import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import { Button } from 'native-base';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Settings = () => {
  const { goLogOut, switchCurrentTheme } = useActions();
  const color = useTypedSelector(state => state.switchTheme.theme)

  const logOut = () => {
    auth().signOut();
    goLogOut();
  };

  return (
    <View>
      <TouchableOpacity>
        <Text style={{ fontSize: 40 }}>Settings</Text>
      </TouchableOpacity>
      <Button onPress={() => logOut()}>
        <Text>Click Me!</Text>
      </Button>
      <Button onPress={() => switchCurrentTheme(!color)}>
        <Text>COLOR Me!</Text>
      </Button>
    </View>
  );
};

export default Settings;
