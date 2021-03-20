import { Icon } from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Modal from 'react-native-modal';

const AddPayBlock = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      useNativeDriver: true,
      toValue: 1,
      duration: 3000,
    }).start();
  }, [modalVisible]);

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.3}
        style={styles.addBtnCard}
        onPress={() => setModalVisible(true)}
      >
        <Icon name="ios-add" style={styles.addBtn} />
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
          onBackdropPress={() => setModalVisible(false)}
          style={styles.contentView}
        >
          <View style={styles.content}>
            <Animated.View style={{ ...styles.content, opacity: fadeAnim }}>
              <Text style={styles.contentTitle}>Hi </Text>
              <Text>Hello from Overlay!</Text>
            </Animated.View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default AddPayBlock;

const styles = StyleSheet.create({
  cardBtn: {
    backgroundColor: 'red',
  },
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  contentView: {
    justifyContent: 'flex-end',
    marginBottom: 45,
  },
  addBtnCard: {
    bottom: 40,
    height: 82,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtn: {
    backgroundColor: '#00BFFF',
    borderRadius: 100,
    height: 70,
    width: 70,
    fontSize: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth: 8,
    borderColor: '#ADD8E6',
  },
  iconCalendar: {
    color: '#000'
  }
});
