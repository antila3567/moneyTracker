import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import auth from '@react-native-firebase/auth';
import { Button } from 'native-base';
import { useActions } from '../../hooks/useActions';

const Settings = () => {
    const { goLogOut } = useActions()

    const logOut = () => {
        auth().signOut()
        goLogOut()
    }
    
    return (
        <View >
            <TouchableOpacity >
                 <Text style={{fontSize:40}}>Settings</Text>
            </TouchableOpacity>
            <Button onPress={() => logOut()}>
            <Text>Click Me!</Text>
          </Button>
        </View>
    )
}

export default Settings
