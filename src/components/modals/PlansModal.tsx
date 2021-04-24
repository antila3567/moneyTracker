import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { Input, Item, Toast } from 'native-base';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import Modal from 'react-native-modal';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import I18n from 'i18next'
import {
  lightTheme,
  darkTheme,
} from '../../assets/styles/mainStack/purchaseModal';
import { useActions } from '../../hooks/useActions';

interface IPlansModal {
  modal: boolean;
  setModal: (bool: boolean) => void;
  name: string | null;
  id: number;
  children?: never;
  balance: number;
}

const PlansModal = ({
  modal,
  setModal,
  name,
  id,
  balance,
}: IPlansModal): ReactElement => {
  const theme = useTypedSelector((state) => state.settings.theme);
  const styles = theme ? lightTheme : { ...lightTheme, ...darkTheme };
  const { changeBalance, changeGoal, getGoalId } = useActions();
  const [sum, setSum] = useState('');
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (id !== 0) {
      getGoalId(id);
    }
  });

  const addNewGoal = () => {
    if (name === 'increase') {
      changeBalance(balance + Number(sum));
    }
    if (name === 'decrease') {
      changeBalance(balance - Number(sum));
    }
    if (name === 'balance' && !!id && sum.length < 11) {
      changeGoal(Number(sum));
    }
    if (sum.length > 11) {
      Toast.show({
        text: I18n.t('maxSum'),
        buttonText: 'ok',
        type: 'warning',
        duration: 5000,
      });
    }
    setModal(false);
    setSum('');
  };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      useNativeDriver: false,
      toValue: 1,
      duration: 1200,
    }).start();
  }, [modal]);

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
        isVisible={modal}
        avoidKeyboard={true}
        onBackdropPress={() => setModal(false)}
        style={styles.contentView}
      >
        <Animated.View style={{ ...styles.content, opacity: fadeAnim }}>
          <View style={styles.contentBlock}>
            <Text numberOfLines={1} style={styles.categoryName}>
              {I18n.t('changeSum')}
            </Text>
            <Item>
              <Input
                value={sum}
                onChangeText={(text) => setSum(text.replace(/[^0-9]/g, ''))}
                keyboardType="numeric"
                style={styles.inputName}
                placeholder={I18n.t('amount')}
              />
            </Item>
            <View style={styles.confirmBtnBLock}>
              <TouchableOpacity
                onPress={() => setModal(false)}
                style={styles.closeBtn}
              >
                <Text style={styles.closeBtnText}>{I18n.t('close')} ?</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => addNewGoal()}
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

export default PlansModal;
