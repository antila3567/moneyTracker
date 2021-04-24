import React, { ReactElement, useMemo, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Dimensions,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { grad } from '../../assets/styles/blocks/gradient';
import { useActions } from '../../hooks/useActions';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'native-base';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import ListRow from '../../components/history/ListRow';
import { Categories } from '../../redux/types/homeTypes';
import { chartFormatter } from '../../utils/formatters/chartFormatter';
import translator from '../../utils/formatters/translator';
import I18n from '../../localization/locale';

const History = (): ReactElement => {
  translator();
  const { getCategoryAmountId, removeCategory } = useActions();
  const [data, setData] = useState<Categories | null>(null);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState<number>(0);
  const state = useTypedSelector((state) => state.home.categories);
  const id = useTypedSelector((state) => state.home.id);
  const newData = !!data ? [...data.expenses].reverse() : null;
  const formatChart = chartFormatter();
  const allCount =
    formatChart.reduce((a, b) => a + (b.expenseCount || 0), 0) - state.length;
  const allTotal = formatChart.reduce((a, b) => a + (b.y || 0), 0);

  useMemo(() => {
    state.map((item) => {
      const total = item.expenses.reduce((a, b) => a + (b.total || 0), 0);
      if (item.id === id) {
        setData(item);
        setTotal(total);
        setCount(item.expenses.length - 1);
      }
    });
  }, [state, id]);

  // useMemo(() => {

  // })

  const closeCategories = () => {
    setData(null);
    getCategoryAmountId(null);
  };

  const isRemove = (id: number) => {
    Alert.alert(I18n.t('removeCategory'), I18n.t('categoryInfo'), [
      {
        text: I18n.t('cancelBtn'),
      },
      { text: I18n.t('okBtn'), onPress: () => removeCategory(id) },
    ]);
  };

  return (
    <LinearGradient colors={grad.lightBackground} style={styles.wrapper}>
      {!!data ? (
        <SafeAreaView>
          <View style={[styles.headerBlock]}>
            <View style={styles.category}>
              <Text style={[styles.name]}>{data.name}</Text>
              <TouchableOpacity onPress={() => closeCategories()}>
                <Text style={{ fontSize: 40 }}>&times;</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.category}>
              <Text style={styles.defText}>{I18n.t('wholeAmount')}</Text>
              <Text style={styles.countText}>{total.toFixed(2)}</Text>
            </View>
            <View style={styles.category}>
              <Text style={styles.defText}>{I18n.t('allTrans')}</Text>
              <Text style={styles.countText}>{count}</Text>
            </View>
          </View>
          <View style={styles.scrollWrap}>
            <FlatList
              data={newData}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <ListRow data={data} styles={styles} item={item} />
              )}
            />
          </View>
        </SafeAreaView>
      ) : (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.scrollWrapMain}>
            <View style={[styles.headerBlock]}>
              <View style={styles.category}>
                <Text style={[styles.name]}>{I18n.t('allCat')}</Text>
                <View>
                  <Text style={styles.countText}>{state.length}</Text>
                </View>
              </View>
              <View style={styles.category}>
                <Text style={styles.defText}>{I18n.t('wholeAmount')}</Text>
                <Text style={styles.countText}>{allTotal.toFixed(2)}</Text>
              </View>
              <View style={styles.category}>
                <Text style={styles.defText}>{I18n.t('allTrans')}</Text>
                <Text style={styles.countText}>{allCount}</Text>
              </View>
            </View>
            {state.length !== 0 ? (
              <View style={styles.scrollCategory}>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={styles.scroll}
                >
                  {state.map((itm, i) => (
                    <TouchableOpacity
                      key={i}
                      onPress={() => getCategoryAmountId(itm.id)}
                      style={[
                        styles.headerBlock,
                        {
                          marginHorizontal: 10,
                          marginVertical: 10,
                          borderRadius: 12,
                        },
                      ]}
                    >
                      <View style={styles.category}>
                        <Text style={[styles.name]}>{itm.name}</Text>
                        <TouchableOpacity onPress={() => isRemove(itm.id)}>
                          <Icon active name="trash" />
                        </TouchableOpacity>
                      </View>
                      <View style={styles.category}>
                        <Text style={styles.defText}>{I18n.t('allTrans')}</Text>
                        <Text
                          style={[styles.countText, { marginRight: '2.2%' }]}
                        >
                          {itm.expenses.length - 1}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            ) : (
              <View style={styles.clear}>
                <Text style={styles.clearText}>{I18n.t('clear1')},</Text>
                <Text style={styles.clearText}>{I18n.t('clear2')}</Text>
              </View>
            )}
          </View>
        </SafeAreaView>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
  },
  headerBlock: {
    backgroundColor: '#F0FFFF',
    elevation: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 25,
    fontFamily: 'serif',
    fontWeight: 'bold',
    color: '#000',
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  defText: {
    fontSize: 16,
    fontFamily: 'serif',
    opacity: 0.6,
  },
  countText: {
    fontSize: 20,
    fontFamily: 'serif',
    fontWeight: 'bold',
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  transaction: {
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 12,
  },
  card: {
    backgroundColor: '#F0FFFF',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  scrollWrap: {
    marginBottom: Dimensions.get('screen').height / 1.85,
  },
  scroll: {
    paddingBottom: 20,
  },
  transText: {
    maxWidth: '80%',
    fontSize: 14,
    fontFamily: 'serif',
    marginBottom: 10,
    opacity: 0.8,
  },
  transDate: {
    fontSize: 12,
    fontFamily: 'serif',
    opacity: 0.6,
  },
  transMoney: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  scrollWrapMain: {
    flexGrow: 1,
    marginBottom: Dimensions.get('screen').height / 20,
  },
  clear: {
    marginTop: Dimensions.get('screen').height / 3,
    alignItems: 'center',
  },
  clearText: {
    fontSize: 25,
    fontFamily: 'serif',
  },
  transBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollCategory: {
    marginBottom: Dimensions.get('screen').height / 3.4,
  },
});

export default History;
