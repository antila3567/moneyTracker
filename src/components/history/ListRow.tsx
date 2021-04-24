import React, { ReactElement } from 'react';
import { Text, View, Image } from 'react-native';
import { Button, Icon, SwipeRow } from 'native-base';
import { formatTime } from '../../utils/formatters/dataFormatter';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IListRow } from '../../utils/types/historyTypes';
import { useActions } from '../../hooks/useActions';
import Androw from 'react-native-androw';

const ListRow = ({ styles, data, item }: IListRow): ReactElement => {
  const { removeAmountExpense } = useActions();
  const removePurchase = (id: number) => {
    removeAmountExpense(id);
  };

  const currency = useTypedSelector((state) => state.home.currency);
  return (
    <>
      {item.total > 0.000001 && (
        <Androw style={[styles.transaction, styles.shadow]}>
          <SwipeRow
            disableRightSwipe={true}
            style={styles.card}
            rightOpenValue={-75}
            body={
              <View style={styles.cardContent}>
                {!!item.description ? (
                  <View style={styles.transBlock}>
                    <Image
                      source={data.icons}
                      style={{
                        width: 30,
                        height: 30,
                        tintColor: data.color,
                        marginRight: 5,
                      }}
                    />
                    <View>
                      <Text style={styles.transText}>{item.description}</Text>
                      <Text style={styles.transDate}>
                        {formatTime(item.date)}
                      </Text>
                    </View>
                  </View>
                ) : (
                  <View style={styles.transBlock}>
                    <Image
                      source={data.icons}
                      style={{
                        width: 30,
                        height: 30,
                        tintColor: data.color,
                        marginRight: 5,
                      }}
                    />
                    <Text style={styles.transDate}>
                      {formatTime(item.date)}
                    </Text>
                  </View>
                )}
                <Text style={styles.transMoney}>
                  - &nbsp;{item.total}
                  &nbsp;{currency}
                </Text>
              </View>
            }
            right={
              <Button danger onPress={() => removePurchase(item.id)}>
                <Icon active name="trash" />
              </Button>
            }
          />
        </Androw>
      )}
    </>
  );
};

export default ListRow;
