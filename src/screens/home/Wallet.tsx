import React, { ReactElement, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { grad } from '../../assets/styles/blocks/gradient';
import Androw from 'react-native-androw';
import ProgressBar from '../../components/other/ProgressBar';
import { Icon } from 'native-base';
import I18n from '../../localization/locale';
import PlansModal from '../../components/modals/PlansModal';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Wallet = ({}): ReactElement => {
  const [modal, setModal] = useState(false);
  const [whatIsModal, setWhatIsModal] = useState<string | null>(null);
  const [id, setId] = useState(1);
  const [goalName, setGoalName] = useState('');
  const [percent, setPercent] = useState(0);
  const goals = useTypedSelector((state) => state.wallet.goals);
  const balance = useTypedSelector((state) => state.wallet.balance);
  const currency = useTypedSelector((state) => state.home.currency);

  const changeBalance = (modal: string, id = 0, name = '', percent = 0) => {
    setModal(true);
    setWhatIsModal(modal);
    setId(id);
    setGoalName(name);
    setPercent(percent);
  };

  return (
    <LinearGradient colors={grad.lightBackground} style={styles.wrapper}>
      <PlansModal
        modal={modal}
        setModal={setModal}
        name={whatIsModal}
        id={id}
        balance={balance}
        goalName={goalName}
        percent={percent}
      />
      <SafeAreaView>
        <View style={[styles.headerBlock]}>
          <Text style={styles.textMoney}>${balance}</Text>
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}
        >
          <Androw style={[styles.shadow]}>
            {goals.map((item) => (
              <View style={styles.planBlock} key={item.id}>
                <ProgressBar percentage={item.percent} />
                <View>
                  <Text style={styles.planText}>{item.name}</Text>
                  <Text style={styles.planText}>
                    {item.total} - {currency}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    changeBalance('balance', item.id, item.name, item.percent)
                  }
                >
                  <Icon style={[styles.icons]} name={'add'} />
                </TouchableOpacity>
              </View>
            ))}
          </Androw>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  textMoney: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'serif',
    textAlign: 'center',
  },
  descriptionText: {
    textAlign: 'center',
    fontFamily: 'serif',
    opacity: 0.7,
  },
  headerBlock: {
    backgroundColor: '#F0FFFF',
    elevation: 10,
    paddingBottom: 20,
  },
  moneyButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  btn: {
    backgroundColor: '#006586',
    width: 150,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  btnText: {
    fontFamily: 'serif',
    fontSize: 20,
    color: '#ffffff',
  },
  scroll: {
    paddingBottom: 50,
    paddingHorizontal: 20,
  },
  planBlock: {
    backgroundColor: '#F0FFFF',
    padding: 10,
    marginTop: 20,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icons: {
    padding: 10,
    fontSize: 35,
    color: '#000000',
  },
  planText: {
    fontSize: 20,
    fontFamily: 'serif',
    opacity: 0.8,
    textAlign: 'center',
  },
  delete: {
    transform: [{ rotate: '45deg' }],
  },
});

export default Wallet;
