import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Wave from 'react-native-waveview';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IBlock } from '../../utils/types/homeTypes';

const ExpenseFlatlist = ({ item, styles, selected }: IBlock) => {
  const currency = useTypedSelector((state) => state.home.currency);
  const flatListText =
    selected && selected.name == item.name ? '#F0FFFF' : '#000';
  const flatListBg =
    selected && selected.name == item.name ? item.color : '#F0FFFF';

  return (
    <TouchableOpacity
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
      </View>
    </TouchableOpacity>
  );
};

export default ExpenseFlatlist;