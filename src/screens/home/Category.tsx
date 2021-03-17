import { Button } from 'native-base'
import React from 'react'
import { View, Text, Alert, TouchableOpacity } from 'react-native'

const Category = ({}) => {
    return (
        <View >
        <TouchableOpacity >
             <Text style={{fontSize:40}}>Settings</Text>
        </TouchableOpacity>
            <Button onPress={() => Alert.alert('work')}>
                <Text>Click Me!</Text>
            </Button>
        </View>
    )
}

export default Category
