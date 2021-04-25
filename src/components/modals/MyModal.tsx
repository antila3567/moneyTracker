import React, { ReactElement, ReactNode, useEffect, useRef } from 'react';
import {
  Modal,
  StyleProp,
  ViewStyle,
  Animated,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import { lightTheme, darkTheme } from '../../assets/styles/mainStack/myModal';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface IMyModalProps {
  modalVisible: boolean;
  onClose: any;
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  data?: any[];
}

const MyModal = React.memo(
  ({ modalVisible, onClose, children, data }: IMyModalProps): ReactElement => {
    const scaleValue = useRef(new Animated.Value(0)).current;
    const theme = useTypedSelector((state) => state.settings.theme);
    const styles = theme ? lightTheme : { ...lightTheme, ...darkTheme };

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
                      onPress={() => onClose(true, item.value, item.symbol)}
                      style={styles.card}
                    >
                      <Text>{item.label}</Text>
                      <Text>{item.symbol}</Text>
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

export default MyModal;
