import React from 'react';
import { Text, View } from 'react-native';
import { IExpneses } from '../../utils/types/homeTypes';

interface ICatDescription {
  styles: any;
  item: IExpneses;
}
const CatDesription = ({ item, styles }: ICatDescription) => {
  return (
    <View>
      <View>
        <Text style={styles.descriptionTitle}>{item.title}</Text>
      </View>
      <View>
        <Text style={styles.descriptionText}>{item.description}</Text>
      </View>
      <View style={styles.moneyBlock}>
          <Text>сумма - {item.total}</Text>
          <Text>осталось 19239 UAH</Text>
      </View>
    </View>
  );
};

export default CatDesription;
