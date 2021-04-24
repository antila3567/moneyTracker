import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import LinearGradient from 'react-native-linear-gradient';
import { grad } from '../../assets/styles/blocks/gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, ListItem, Icon, Left, Body, Right, Switch } from 'native-base';
import MyModal from '../../components/modals/MyModal';
import { useTranslation } from 'react-i18next';
import { languages } from '../../utils/pickers/languages';

const Settings = () => {
  const {
    goLogOut,
    switchCurrentTheme,
    switchSecure,
    changeLanguage,
  } = useActions();
  const color = useTypedSelector((state) => state.settings.theme);
  const secure = useTypedSelector((state) => state.settings.secure);
  const lang = useTypedSelector((state) => state.settings.language);
  const switch1 = { false: '#d3d3d3', true: '#d3d3d3' };
  const [modal, setModal] = useState(false);
  const { i18n } = useTranslation();

  const changeLanguageUser = (bool: boolean, val = '') => {
    if (bool) {
      changeLanguage(val);
      i18n.changeLanguage(val);
      setModal(false);
    } else {
      setModal(false);
    }
  };

  const logOut = () => {
    auth().signOut();
    goLogOut();
  };

  return (
    <LinearGradient colors={grad.lightBackground} style={styles.wrapper}>
      <SafeAreaView>
        <MyModal
          modalVisible={modal}
          onClose={changeLanguageUser}
          data={languages}
        />
        <ListItem icon style={styles.listItem}>
          <Left>
            <Button style={styles.btnBg}>
              <Text style={styles.textIcon}>T</Text>
            </Button>
          </Left>
          <Body>
            <Text style={styles.defText}>Main theme</Text>
          </Body>
          <Right>
            <Switch
              trackColor={switch1}
              thumbColor={color ? '#006586' : '#F0FFFF'}
              value={color}
              onValueChange={(bool) => switchCurrentTheme(bool)}
            />
          </Right>
        </ListItem>
        <ListItem icon style={styles.listItem}>
          <Left>
            <Button style={{ backgroundColor: '#007AFF' }}>
              <Icon active name={secure ? 'eye-off' : 'eye'} />
            </Button>
          </Left>
          <Body>
            <Text style={styles.defText}>Secure</Text>
          </Body>
          <Right>
            <Switch
              trackColor={switch1}
              thumbColor={color ? '#006586' : '#F0FFFF'}
              value={secure}
              onValueChange={(bool) => switchSecure(bool)}
            />
          </Right>
        </ListItem>
        <ListItem icon style={styles.listItem}>
          <Left>
            <Button style={{ backgroundColor: '#007AFF' }}>
              <Icon active name="md-information" />
            </Button>
          </Left>
          <Body>
            <Text style={styles.defText}>Language</Text>
          </Body>
          <TouchableOpacity onPress={() => setModal(true)}>
            <Right>
              <Text style={styles.defText2}>{lang}</Text>
              <Icon name="open" />
            </Right>
          </TouchableOpacity>
        </ListItem>
        <ListItem icon style={styles.listItem}>
          <Left>
            <Button style={{ backgroundColor: '#c90000' }}>
              <Icon active name="ios-log-out" />
            </Button>
          </Left>
          <Body>
            <Text style={styles.defText}>Log out</Text>
          </Body>
          <TouchableOpacity onPress={() => logOut()}>
            <Right>
              <Text style={styles.defText2}>exit</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </TouchableOpacity>
        </ListItem>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
  },
  listItem: {
    marginTop: 10,
  },
  textIcon: {
    color: '#fff',
  },
  btnBg: {
    backgroundColor: '#000',
  },
  btnBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  defText: {
    fontFamily: 'serif',
  },
  defText2: {
    fontFamily: 'serif',
    opacity: 0.6,
  },
});

export default Settings;
