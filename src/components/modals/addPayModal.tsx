import { Icon, Input, Item } from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Animated, Image } from 'react-native';
import Modal from 'react-native-modal';
import { selectIcon } from '../../assets/styles/blocks/icons';
import { selectColor } from '../../assets/styles/blocks/theme';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import I18n from '../../localization/locale';
import { styles } from '../../assets/styles/mainStack/addModal';

const AddPayBlock = () => {
  const [name, setName] = useState('');
  const [icon, setIcon] = useState('');
  const [color, setColor] = useState('#F0FFFF');
  const modalVisible = useTypedSelector((state) => state.home.addModal);
  const currency = useTypedSelector((state) => state.home.currency);
  const { openAddModal, getUserCurrency } = useActions();
  const theme = useTypedSelector((state) => state.switchTheme.theme);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const bgBtn = theme ? '#00BFFF' : '#d3d3d3';
  const borderBtn = theme ? '#ADD8E6' : '#000';

  useEffect(() => {
    Animated.timing(fadeAnim, {
      useNativeDriver: true,
      toValue: 1,
      duration: 1200,
    }).start();
  }, [modalVisible]);

  return (
    <>
      <TouchableOpacity
        style={styles.addBtnCard}
        onPress={() => openAddModal(true)}
      >
        <Icon
          name="ios-add"
          style={[
            styles.addBtn,
            { backgroundColor: bgBtn, borderColor: borderBtn },
          ]}
        />
      </TouchableOpacity>
      <View>
        <Modal
          backdropOpacity={0.5}
          animationInTiming={1000}
          animationOutTiming={1000}
          backdropTransitionInTiming={800}
          backdropTransitionOutTiming={800}
          isVisible={modalVisible}
          avoidKeyboard={true}
          onBackdropPress={() => openAddModal(false)}
          style={styles.contentView}
        >
          <Animated.View style={{ ...styles.content, opacity: fadeAnim }}>
            <Text style={styles.contentTitle}>{I18n.t('addCategory')}</Text>
            <Text style={styles.iconTitle}>icons</Text>
            <View style={styles.iconsBlock}>
              {selectIcon.map((item, index) => (
                <TouchableOpacity
                  style={[
                    styles.icon,
                    {
                      backgroundColor: icon === item.name ? color : '#fff',
                    },
                  ]}
                  key={index}
                  onPress={() => setIcon(item.name)}
                >
                  <Image style={styles.iconsImg} source={item.uri} />
                </TouchableOpacity>
              ))}
            </View>
            <Text style={styles.iconTitle}>color icon</Text>
            <View style={styles.iconsBlock}>
              {selectColor.map((item, index) => (
                <TouchableOpacity
                  onPress={() => setColor(item)}
                  key={index}
                  style={[
                    styles.selectColor,
                    {
                      backgroundColor: item,
                    },
                  ]}
                />
              ))}
            </View>
            <Picker
              mode="dropdown"
              selectedValue={currency}
              onValueChange={(item) => getUserCurrency(item)}
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
            <Item>
              <Input
                style={{ textAlign: 'center', fontFamily: 'serif' }}
                onChangeText={(text) => setName(text)}
                value={name}
                placeholder="введите название категории"
              />
            </Item>
            <View style={styles.buttonsBlock}>
              <TouchableOpacity
                onPress={() => openAddModal(false)}
                style={[styles.createBtn, styles.closeBtn]}
              >
                <Text style={styles.createBtnText}>close</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.createBtn}>
                <Text style={styles.createBtnText}>create</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </Modal>
      </View>
    </>
  );
};

export default AddPayBlock;
