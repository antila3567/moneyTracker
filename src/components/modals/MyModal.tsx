import React, { ReactElement, ReactNode, useEffect, useRef } from 'react';
import {
  Modal,
  StyleProp,
  StyleSheet,
  ViewStyle,
  Animated,
  TouchableOpacity,
  Dimensions,
  Text,
  View,
} from 'react-native';

interface IMyModalProps {
  modalVisible: boolean;
  onClose: (bool: boolean, val?: string) => void;
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  data?: any[];
}

const MyModal = React.memo(
  ({ modalVisible, onClose, children, data }: IMyModalProps): ReactElement => {
    const scaleValue = useRef(new Animated.Value(0)).current;

    const animation = () => {
      if (modalVisible) {
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }).start();
      }
    };

    useEffect(() => {
      animation();
    }, [modalVisible]);

    return (
      <Modal transparent visible={modalVisible}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => onClose(false)}
          style={[styles.modalBackground]}
        >
          <TouchableOpacity activeOpacity={1}>
            <Animated.View
              style={[
                styles.modalContainer,
                {
                  transform: [{ scale: scaleValue }],
                },
              ]}
            >
              {!!data &&
                data.map((item, index) => (
                  <View key={index}>
                    <TouchableOpacity
                      onPress={() => onClose(true, item.value)}
                      style={styles.card}
                    >
                      <Text>{item.label}</Text>
                      <Text>{item.flag}</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              {children}
            </Animated.View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    );
  }
);

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: Dimensions.get('screen').width / 1.2,
    borderRadius: 16,
    paddingHorizontal: 40,
    paddingVertical: 30,
  },
  closeBtn: {
    textAlign: 'right',
    fontSize: 40,
  },
  card: {
    backgroundColor: '#F0FFFF',
    marginVertical: 10,
    padding: 20,
    elevation: 10,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default MyModal;
