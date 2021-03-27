import React, { useEffect, useRef, useState } from 'react';
import { Icon, Input, Item } from 'native-base';
import { View, TouchableOpacity, Animated, Text, Alert } from 'react-native';
import Modal from 'react-native-modal';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import I18n from '../../localization/locale';
import {
  lightTheme,
  darkTheme,
} from '../../assets/styles/mainStack/purchaseModal';
import { useActions } from '../../hooks/useActions';

const PurchaseModal = () => {
  const purchase = useTypedSelector((state) => state.home);
  const [active, setActive] = useState('add');
  const { addPurchaseModal } = useActions();
  const theme = useTypedSelector((state) => state.switchTheme.theme);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const styles = theme ? lightTheme : { ...lightTheme, ...darkTheme };
  const [am, setAm] = useState('')

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
            <View style={styles.categoryTabs}>
              <TouchableOpacity
                onPress={() => setActive('add')}
                style={active === 'add' ? styles.tabActive : styles.defTab}
              >
                <Text style={styles.tabText}>{I18n.t('addMoney')}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setActive('del')}
                style={active === 'del' ? styles.tabActive : styles.defTab}
              >
                <Text style={styles.tabText}>{I18n.t('removeMoney')}</Text>
              </TouchableOpacity>
            </View>
            <Item>
              <Input
                value={am}
                onChangeText={(text) => setAm(text.replace(/[^0-9]/g, ''))}
                keyboardType="numeric"
                style={styles.inputName}
                placeholder={I18n.t('amount')}
              />
              <Icon name="close-circle" />
            </Item>
            <Item>
              <Input
                style={styles.inputName}
                placeholder={I18n.t('description')}
              />
            </Item>
            <View style={styles.confirmBtnBLock}>
              <TouchableOpacity style={styles.closeBtn}>
                <Text style={styles.closeBtnText}>{I18n.t('close')} ?</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.confirmBtn}>
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
