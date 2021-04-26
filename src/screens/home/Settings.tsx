import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import LinearGradient from 'react-native-linear-gradient';
import { grad } from '../../assets/styles/blocks/gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Button,
  ListItem,
  Icon,
  Left,
  Body,
  Right,
  Switch,
  Toast,
} from 'native-base';
import MyModal from '../../components/modals/MyModal';
import { useTranslation } from 'react-i18next';
import { languages } from '../../utils/pickers/languages';
import { selectCurrency } from '../../utils/pickers/currency';
import I18n from '../../localization/locale';
import { lightTheme, darkTheme } from '../../assets/styles/mainStack/settings';

const Settings = () => {
  const {
    isAccount,
    goLogOut,
    isFirstInit,
    switchCurrentTheme,
    changeLanguage,
    changeCurrency,
    changeSymbol,
  } = useActions();
  const lang = useTypedSelector((state) => state.settings.language);
  const currenc = useTypedSelector((state) => state.home.currency);
  const sym = useTypedSelector((state) => state.wallet.icon);
  const switch1 = { false: '#d3d3d3', true: '#d3d3d3' };
  const [modal, setModal] = useState(false);
  const [currency, setCurrency] = useState(false);
  const { i18n } = useTranslation();
  const theme = useTypedSelector((state) => state.settings.theme);
  const styles = theme ? lightTheme : { ...lightTheme, ...darkTheme };
  const authInfo: any = useTypedSelector((state) => state.auth.user);

  const changeLanguageUser = (bool: boolean, val: string) => {
    if (bool) {
      changeLanguage(val);
      i18n.changeLanguage(val);
    }
    setModal(false);
  };

  const changeCurrencyUser = (bool: boolean, cur: string, sym: string) => {
    if (bool) {
      changeCurrency(cur);
      changeSymbol(sym);
    }
    setCurrency(false);
  };

  const addAcc = () => {
    isAccount(true);
    isFirstInit(true);
  };

  const logOut = () => {
    goLogOut();
  };

  const excelExport = () => {
    Toast.show({
      text: I18n.t('progress'),
      buttonText: 'ok',
      type: 'warning',
      duration: 3000,
    });
  };

  return (
    <LinearGradient
      colors={theme ? grad.lightBackground : grad.darkBg}
      style={styles.wrapper}
    >
      <SafeAreaView>
        <MyModal
          modalVisible={modal}
          onClose={changeLanguageUser}
          data={languages}
        />
        <MyModal
          modalVisible={currency}
          onClose={changeCurrencyUser}
          data={selectCurrency}
        />
        {authInfo !== null && (
          <View style={styles.infoBlock}>
            <View>
              <Text style={styles.defText}>
                {!!authInfo._user.email && authInfo._user.email}
              </Text>
              {!!authInfo._user.displayName && (
                <Text style={styles.defText}>{authInfo._user.displayName}</Text>
              )}
            </View>
            <Image
              style={styles.img}
              source={
                !!authInfo._user.photoURL
                  ? {
                      uri: authInfo._user.photoURL,
                    }
                  : require('../../assets/image/user.png')
              }
            />
          </View>
        )}
        <ListItem icon style={styles.listItem}>
          <Left>
            <Button style={styles.btnBg}>
              <Text style={styles.textIcon}>T</Text>
            </Button>
          </Left>
          <Body>
            <Text style={styles.defText}>
              {theme ? I18n.t('whiteTheme') : I18n.t('theme')}
            </Text>
          </Body>
          <Right>
            <Switch
              trackColor={switch1}
              thumbColor={theme ? '#006586' : '#F0FFFF'}
              value={theme}
              onValueChange={(bool) => switchCurrentTheme(bool)}
            />
          </Right>
        </ListItem>
        {/* <ListItem icon style={styles.listItem}>
          <Left>
            <Button style={{ backgroundColor: '#007AFF' }}>
              <Icon active name={secure ? 'eye-off' : 'eye'} />
            </Button>
          </Left>
          <Body>
            <Text style={styles.defText}>{I18n.t('secure')}</Text>
          </Body>
          <Right>
            <Switch
              trackColor={switch1}
              thumbColor={theme ? '#006586' : '#F0FFFF'}
              value={secure}
              onValueChange={(bool) => switchSecure(bool)}
            />
          </Right>
        </ListItem> */}
        <ListItem icon style={styles.listItem}>
          <TouchableOpacity
            onPress={() => setModal(true)}
            style={{ flexDirection: 'row' }}
          >
            <Left>
              <Button style={{ backgroundColor: '#007AFF' }}>
                <Icon active name="md-information" />
              </Button>
            </Left>
            <Body>
              <Text style={styles.defText}>{I18n.t('lang')}</Text>
            </Body>
            <Right>
              <Text style={styles.defText2}>{lang}</Text>
              <Icon name="open" />
            </Right>
          </TouchableOpacity>
        </ListItem>
        <ListItem icon style={styles.listItem}>
          <TouchableOpacity
            onPress={() => setCurrency(true)}
            style={{ flexDirection: 'row' }}
          >
            <Left>
              <Button style={{ backgroundColor: '#d1c305' }}>
                <Text style={styles.textIcon}>{sym}</Text>
              </Button>
            </Left>
            <Body>
              <Text style={styles.defText}>{I18n.t('cur')}</Text>
            </Body>
            <Right>
              <Text style={styles.defText2}>{currenc}</Text>
              <Icon name="open" />
            </Right>
          </TouchableOpacity>
        </ListItem>
        <ListItem icon style={styles.listItem}>
          <TouchableOpacity
            onPress={() => excelExport()}
            style={{ flexDirection: 'row' }}
          >
            <Left>
              <Button style={{ backgroundColor: '#01a70f' }}>
                <Text style={styles.textIcon}>Ex</Text>
              </Button>
            </Left>
            <Body>
              <Text style={styles.defText}>{I18n.t('export')}</Text>
            </Body>
            <Right>
              <Text style={styles.defText2}>{I18n.t('export1')}</Text>
              <Icon name="folder" />
            </Right>
          </TouchableOpacity>
        </ListItem>
        <ListItem icon style={styles.listItem}>
          <TouchableOpacity
            onPress={() => addAcc()}
            style={{ flexDirection: 'row' }}
          >
            <Left>
              <Button style={{ backgroundColor: '#00adf1' }}>
                <Icon active name="ios-log-in" />
              </Button>
            </Left>
            <Body>
              <Text style={styles.defText}>{I18n.t('addAcc')}</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </TouchableOpacity>
        </ListItem>
        <ListItem icon style={styles.listItem}>
          <TouchableOpacity
            onPress={() => logOut()}
            style={{ flexDirection: 'row' }}
          >
            <Left>
              <Button style={{ backgroundColor: '#c90000' }}>
                <Icon active name="ios-log-out" />
              </Button>
            </Left>
            <Body>
              <Text style={styles.defText}>{I18n.t('remAcc')}</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </TouchableOpacity>
        </ListItem>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Settings;
