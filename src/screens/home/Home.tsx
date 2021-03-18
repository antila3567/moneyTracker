import React from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import { lightTheme, darkTheme } from '../../assets/styles/mainStack/home';
import Header from '../../components/mainPage/Header';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const HomeScreen = ({}) => {
  const switchColor = useTypedSelector((state) => state.switchTheme.theme);
  const styles = switchColor ? lightTheme : { ...lightTheme, ...darkTheme };

  return (
    <View style={styles.wrapper}>
      <View>
        <Header />
      </View>
    </View>
  );
};

export default HomeScreen;
