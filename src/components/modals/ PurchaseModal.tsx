import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { Input, Item } from 'native-base';
import { View, TouchableOpacity, Animated, Text } from 'react-native';
import Modal from 'react-native-modal';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import I18n from 'i18next'
import {
  lightTheme,
  darkTheme,
} from '../../assets/styles/mainStack/purchaseModal';
import { useActions } from '../../hooks/useActions';

const PurchaseModal = (): ReactElement => {
  const purchase = useTypedSelector((state) => state.home);
  const {
    addPurchaseModal,
    addNewExpense,
    changeBalance,
    addNewPurchase,
  } = useActions();
  const theme = useTypedSelector((state) => state.settings.theme);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const styles = theme ? lightTheme : { ...lightTheme, ...darkTheme };
  const [am, setAm] = useState('');
  const [newData, setNewData] = useState<any>([]);
  const [pur, setPur] = useState([{}]);
  const [description, setDescription] = useState('');
  const data = useTypedSelector((state) => state.home.categories);
  const filterData = data.filter((item) => item.id === purchase.categoryId);
  const balance = useTypedSelector((state) => state.wallet.balance);
  const expense = {
    id: Math.random() * 10000000000000,
    total: Number(am),
    date: new Date(),
    description: description,
  };

  const changeCurrentAmount = () => {
    const expenses = [...pur, expense];
    const concatData = { ...newData, expenses };
    addNewExpense(concatData);
    addPurchaseModal(false);
    changeBalance(balance - Number(am));
    addNewPurchase(Number(am));
    setAm('');
    setDescription('');
  };

  useEffect(() => {
    if (filterData) {
      filterData.map((item) => {
        setNewData(item);
        setPur(item.expenses);
      });
    }
  }, [filterData]);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      useNativeDriver: false,
      toValue: 1,
      duration: 2000,
    }).start();
  }, [purchase.isPurchaseModal]);

  return (
    <View>
      <Modal
        animationIn="zoomIn"
        animationOut="zoomOut"
        backdropOpacity={0.5}
        animationInTiming={1000}
        animationOutTiming={900}
        backdropTransitionInTiming={800}
        backdropTransitionOutTiming={800}
        isVisible={purchase.isPurchaseModal}
        avoidKeyboard={true}
        onBackdropPress={() => addPurchaseModal(false)}
        style={styles.contentView}
      >
        <Animated.View style={{ ...styles.content, opacity: fadeAnim }}>
          <View style={styles.contentBlock}>
            <Text numberOfLines={1} style={styles.categoryName}>
              {purchase.categoryName}
            </Text>
            <Item>
              <Input
                value={am}
                onChangeText={(text) => setAm(text.replace(/[^0-9]/g, ''))}
                keyboardType="numeric"
                style={styles.inputName}
                placeholder={I18n.t('amount')}
              />
            </Item>
            <Item>
              <Input
                value={description}
                onChangeText={(text) => setDescription(text)}
                style={styles.inputName}
                placeholder={I18n.t('description')}
              />
            </Item>
            <View style={styles.confirmBtnBLock}>
              <TouchableOpacity
                onPress={() => addPurchaseModal(false)}
                style={styles.closeBtn}
              >
                <Text style={styles.closeBtnText}>{I18n.t('close')} ?</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => changeCurrentAmount()}
                style={styles.confirmBtn}
              >
                <Text style={styles.confirmBtnText}>{I18n.t('confirm')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </Modal>
    </View>
  );
};

export default PurchaseModal;
