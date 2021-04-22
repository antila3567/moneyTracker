import React, { ReactElement, useEffect, useRef } from 'react';
import { Icon, Input, Item, Toast } from 'native-base';
import { View, Text, TouchableOpacity, Animated, Image } from 'react-native';
import Modal from 'react-native-modal';
import { selectIcon } from '../../assets/styles/blocks/icons';
import { selectColor } from '../../assets/styles/blocks/theme';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import I18n from '../../localization/locale';
import { lightTheme, darkTheme } from '../../assets/styles/mainStack/addModal';
import { useNavigation } from '@react-navigation/native';

const AddPayBlock = (): ReactElement => {
  const navigation = useNavigation();
  const category = useTypedSelector((state) => state.home);
  const lastId = Math.max(...category.categories.map((item) => item.id));
  const {
    openAddModal,
    newCategoryName,
    newCategoryIcons,
    newCategoryColors,
    createNewCategory,
  } = useActions();
  const theme = useTypedSelector((state) => state.switchTheme.theme);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const styles = theme ? lightTheme : { ...lightTheme, ...darkTheme };

  const addNewCategory = () => {
    if (category.name === '') {
      Toast.show({
        text: I18n.t('emptyField'),
        buttonText: 'ok',
        type: 'danger',
        duration: 5000,
      });
    } else {
      const data = {
        color: category.colors,
        expenses: [{ id: 0, total: 0.01 }],
        icons: category.icons,
        id: !isFinite(lastId) ? 1 : lastId + 1,
        name: category.name,
      };
      navigation.navigate('Home', {});
      createNewCategory(data);
      openAddModal(false);
    }
  };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      useNativeDriver: false,
      toValue: 1,
      duration: 1200,
    }).start();
  }, [category.addModal]);

  return (
    <>
      <TouchableOpacity
        style={styles.addBtnCard}
        onPress={() => openAddModal(true)}
      >
        <Icon name="ios-add" style={[styles.addBtn]} />
      </TouchableOpacity>
      <View>
        <Modal
          backdropOpacity={0.5}
          animationInTiming={1000}
          animationOutTiming={1000}
          backdropTransitionInTiming={800}
          backdropTransitionOutTiming={800}
          isVisible={category.addModal}
          avoidKeyboard={true}
          onBackdropPress={() => openAddModal(false)}
          style={styles.contentView}
        >
          <Animated.View style={{ ...styles.content, opacity: fadeAnim }}>
            <Text style={styles.contentTitle}>{I18n.t('addCategory')}</Text>
            <Text style={styles.iconTitle}>{I18n.t('icons')}</Text>
            <View style={styles.iconsBlock}>
              {selectIcon.map((item, index) => (
                <TouchableOpacity
                  style={[
                    styles.icon,
                    {
                      backgroundColor:
                        category.icons === item.name ? category.colors : '#fff',
                    },
                  ]}
                  key={index}
                  onPress={() => newCategoryIcons(item.name)}
                >
                  <Image style={styles.iconsImg} source={item.uri} />
                </TouchableOpacity>
              ))}
            </View>
            <Text style={styles.iconTitle}>{I18n.t('color')}</Text>
            <View style={styles.iconsBlock}>
              {selectColor.map((item, index) => (
                <TouchableOpacity
                  onPress={() => newCategoryColors(item)}
                  key={index}
                  style={[styles.selectColor, { backgroundColor: item }]}
                />
              ))}
            </View>
            <Item>
              <Input
                style={styles.inputName}
                onChangeText={(text) => newCategoryName(text)}
                value={category.name}
                placeholder={I18n.t('inputName')}
              />
            </Item>
            <View style={styles.buttonsBlock}>
              <TouchableOpacity
                onPress={() => openAddModal(false)}
                style={styles.btnCLose}
              >
                <Text style={styles.createBtnTextClose}>
                  {I18n.t('close')} ?
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnAdd}
                onPress={() => addNewCategory()}
              >
                <Text style={styles.createBtnText}>{I18n.t('create')}</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </Modal>
      </View>
    </>
  );
};

export default AddPayBlock;
