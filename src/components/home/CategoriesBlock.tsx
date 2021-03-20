import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { IBlockItem, IItem } from '../../utils/types/homeTypes';

interface IBlock {
  item: IBlockItem;
  styles: any;
  setSelectedCategory: (item: IItem) => void;
}

const CategoriesBlock = ({ item, styles, setSelectedCategory }: IBlock) => {
  return (
    <TouchableOpacity
      style={styles.blockItem}
      onPress={() => setSelectedCategory(item)}
    >
      <Text style={styles.blockName}>{item.name}</Text>
      <Image
        source={item.icons}
        style={{
          width: 30,
          height: 30,
          tintColor: item.color,
        }}
      />
    </TouchableOpacity>
  );
};

export default CategoriesBlock;
