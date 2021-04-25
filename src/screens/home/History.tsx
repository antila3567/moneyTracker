import React, { ReactElement, useMemo, useState } from 'react';
import { Text, View, TouchableOpacity, Alert, FlatList } from 'react-native';
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
import { lightTheme, darkTheme } from '../../assets/styles/mainStack/history';

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
  const allCount = formatChart.reduce((a, b) => a + (b.expenseCount || 0), 0);
  const allTotal = formatChart.reduce((a, b) => a + (b.y || 0), 0);
  const theme = useTypedSelector((state) => state.settings.theme);
  const styles = theme ? lightTheme : { ...lightTheme, ...darkTheme };

  useMemo(() => {
    state.map((item) => {
      const total = item.expenses.reduce((a, b) => a + (b.total || 0), 0);
      if (item.id === id) {
        setData(item);
        setTotal(total);
        setCount(item.expenses.length);
      }
    });
  }, [state, id]);

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
    <LinearGradient
      colors={theme ? grad.lightBackground : grad.darkBg}
      style={styles.wrapper}
    >
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
              <Text style={styles.countText}>{count - 1}</Text>
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

export default History;
