import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { IBlockItem, IItem } from '../../utils/types/homeTypes';

interface IBlock {
  item: IBlockItem;
  styles: any;
  historyCategory: (item: IItem) => void;
}

const CategoriesBlock = ({ item, styles, historyCategory }: IBlock) => {
  return (
    <TouchableOpacity
      style={styles.blockItem}
      onPress={() => historyCategory(item)}
    >
      <Text numberOfLines={1} style={styles.blockName}>{item.name}</Text>
      <Image
        source={item.icons}
        style={{ width: 30, height: 30, tintColor: item.color }}
      />
    </TouchableOpacity>
  );
};

export default CategoriesBlock;
