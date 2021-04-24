import React, { ReactElement } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Wave from 'react-native-waveview';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IBlock } from '../../utils/types/homeTypes';

const ExpenseFlatlist = ({ item, styles, selected }: IBlock): ReactElement => {
  const currency = useTypedSelector((state) => state.home.currency);
  const { addPurchaseModal, getCategoryId, getCategoryName } = useActions();
  const flatListText =
    selected && selected.name == item.name ? '#F0FFFF' : '#000';
  const flatListBg =
    selected && selected.name == item.name ? item.color : '#F0FFFF';

  const addNewPurchase = (id: number) => {
    getCategoryId(id);
    addPurchaseModal(true);
    getCategoryName(item.name);
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => addNewPurchase(item.id)}
        style={[
          styles.flatCircle,
          { borderColor: item.color, backgroundColor: flatListBg },
        ]}
      >
        <Wave
          style={styles.wave}
          H={Number(item.percentFlat)}
          waveParams={[
            { A: 10, T: 180, fill: item.color },
            { A: 15, T: 140, fill: item.color },
            { A: 20, T: 100, fill: item.color },
          ]}
          animated={true}
        />
        <View style={styles.circleInfoBlock}>
          <Text
            numberOfLines={1}
            style={[styles.flatTitle, { color: flatListText }]}
          >
            {item.name}
          </Text>
          <View>
            <Text style={[styles.currency, { color: flatListText }]}>
              {currency} - {Math.floor(item.y)}
            </Text>
          </View>
          <View>
            <Text style={[styles.currency, { color: flatListText }]}>
              {item.percentFlat}%
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ExpenseFlatlist;
