import React, { ReactElement } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { IBlockItem } from '../../utils/types/homeTypes';
import Androw from 'react-native-androw';

interface IBlock {
  item: IBlockItem;
  styles: any;
  historyCategory: (id: number) => void;
}

const CategoriesBlock = ({
  item,
  styles,
  historyCategory,
}: IBlock): ReactElement => {
  return (
    <Androw style={[styles.shadow]}>
      <TouchableOpacity
        style={styles.blockItem}
        onPress={() => historyCategory(item.id)}
      >
        <Text numberOfLines={1} style={styles.blockName}>
          {item.name}
        </Text>
        <Image
          source={item.icons}
          style={{ width: 30, height: 30, tintColor: item.color }}
        />
      </TouchableOpacity>
    </Androw>
  );
};

export default CategoriesBlock;
