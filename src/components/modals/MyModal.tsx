import React, { ReactElement, ReactNode, useEffect, useRef } from 'react';
import {
  Modal,
  StyleProp,
  StyleSheet,
  ViewStyle,
  Animated,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

interface IMyModalProps {
  modalVisible: boolean;
  onClose: (bool: boolean) => void;
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const MyModal = React.memo(
  ({ modalVisible, onClose, children, style }: IMyModalProps): ReactElement => {
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
          style={[
            styles.modalBackground,
            {
              backgroundColor: '#000',
              opacity: 0.7,
            },
          ]}
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
    backgroundColor: 'white',
    borderRadius: 16,
    paddingHorizontal: 40,
    paddingVertical: 30,
  },
});

export default MyModal;
