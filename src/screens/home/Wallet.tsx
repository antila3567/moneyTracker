import React, { ReactElement, useMemo, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { grad } from '../../assets/styles/blocks/gradient';
import Androw from 'react-native-androw';
import ProgressBar from '../../components/other/ProgressBar';
import { Icon } from 'native-base';
import PlansModal from '../../components/modals/PlansModal';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import moment from 'moment-timezone';
import I18n from '../../localization/locale';
import translator from '../../utils/formatters/translator';
import { lightTheme, darkTheme } from '../../assets/styles/mainStack/wallet';

const Wallet = ({}): ReactElement => {
  translator();
  const { showAlert, getDateWallet, newDayAmount } = useActions();
  const [modal, setModal] = useState(false);
  const [whatIsModal, setWhatIsModal] = useState<string | null>(null);
  const [id, setId] = useState(1);
  const goals = useTypedSelector((state) => state.wallet.goals);
  const balance = useTypedSelector((state) => state.wallet.balance);
  const dateWallet = useTypedSelector((state) => state.wallet.date);
  const currency = useTypedSelector((state) => state.wallet.icon);
  const theme = useTypedSelector((state) => state.settings.theme);
  const styles = theme ? lightTheme : { ...lightTheme, ...darkTheme };

  useMemo(() => {
    const date = new Date();
    const dateNow = {
      day: moment(date).date(),
      weak: moment(date).week(),
      month: moment(date).month(),
      year: moment(date).year(),
    };
    if (dateWallet?.day !== dateNow.day) {
      newDayAmount(1);
      getDateWallet(dateNow);
    }
    if (dateWallet?.weak !== dateNow.weak) {
      newDayAmount(2);
      getDateWallet(dateNow);
    }
    if (dateWallet?.month !== dateNow.month) {
      newDayAmount(3);
      getDateWallet(dateNow);
    }
    if (dateWallet?.year !== dateNow.year) {
      newDayAmount(4);
      getDateWallet(dateNow);
    }
  }, [balance]);

  useMemo(() => {
    if (!!goals) {
      goals.map((item) => {
        const percentage = ((item.amount / item.total) * 100).toFixed(0);
        const isPercent = !isFinite(Number(percentage)) ? 0 : percentage;
        if (isPercent >= 999) {
          item.percent = 999;
        }
        if (isPercent <= 999) {
          item.percent = Number(isPercent);
        }
        if (item.percent > 100) {
          const alert = {
            id: item.id,
            name: item.name,
          };
          setTimeout(() => showAlert(alert), 10);
        }
      });
    }
  }, [balance, modal]);

  const changeBalance = (modal: string, id = 0) => {
    setModal(true);
    setWhatIsModal(modal);
    setId(id);
  };

  return (
    <LinearGradient
      colors={theme ? grad.lightBackground : grad.darkBg}
      style={styles.wrapper}
    >
      <PlansModal
        modal={modal}
        setModal={setModal}
        name={whatIsModal}
        id={id}
        balance={balance}
      />
      <SafeAreaView>
        <View style={[styles.headerBlock]}>
          <Text style={styles.textMoney}>
            {currency}
            {balance}
          </Text>
          <Text style={styles.descriptionText}>{I18n.t('balance')}</Text>
          <View style={styles.moneyButtons}>
            <Androw style={[styles.shadow]}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => changeBalance('increase')}
              >
                <Text style={styles.btnText}>{I18n.t('increase')}</Text>
              </TouchableOpacity>
            </Androw>
            <Androw style={[styles.shadow]}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => changeBalance('decrease')}
              >
                <Text style={styles.btnText}>{I18n.t('decrease')}</Text>
              </TouchableOpacity>
            </Androw>
          </View>
        </View>
        <View style={{ height: Dimensions.get('screen').height / 1.8 }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scroll}
          >
            <Androw style={[styles.shadow]}>
              {goals.map((item) => (
                <View style={styles.planBlock} key={item.id}>
                  <ProgressBar
                    percentage={item.percent}
                    overlimit={item.amount > item.total ? true : false}
                  />
                  <View>
                    <Text style={styles.planText}>
                      {item.name === 'daily' && I18n.t('daily')}
                      {item.name === 'weakly' && I18n.t('weakly')}
                      {item.name === 'month' && I18n.t('month')}
                      {item.name === 'year' && I18n.t('year')}
                    </Text>
                    {!!item.total ? (
                      <Text style={styles.planText}>
                        {item.amount} - {item.total}
                      </Text>
                    ) : (
                      <Text style={styles.planText}>{I18n.t('goal')}</Text>
                    )}
                  </View>
                  <TouchableOpacity
                    onPress={() => changeBalance('balance', item.id)}
                  >
                    <Icon style={[styles.icons]} name={'add'} />
                  </TouchableOpacity>
                </View>
              ))}
            </Androw>
          </ScrollView>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Wallet;
