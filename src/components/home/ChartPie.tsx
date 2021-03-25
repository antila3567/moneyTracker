import React, { useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { VictoryPie } from 'victory-native';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import I18n from '../../localization/locale';
import { chartFormatter } from '../../utils/formatters/chartFormatter';
import { IChartPie, IPieTrans } from '../../utils/types/homeTypes';
import ExpenseFlatlist from './ExpenseFlatlist';

const ChartPie = ({ categories, styles }: IChartPie) => {
  const [refFlat, setRefFlat] = useState<any>();
  const selected = useTypedSelector(state => state.home.selected)
  const {pushCurrentItem} = useActions()
  const formatChart = chartFormatter();
  const chart = formatChart;
  const colors = chart.map((item) => item.color);
  const totalExpenseCount = chart.reduce((a, b) => a + (b.expenseCount || 0),0);
  const totalExpense = chart.reduce((a, b) => a + (b.y || 0), 0);

  const setSelectCategoryByName = (name: string, id: number) => {
    const category = categories.filter((a) => a.name == name);
    pushCurrentItem(category[0]);
    scrollToItem(id);
  };

  const scrollToItem = (id: number) => {
    refFlat.scrollToIndex({ animated: true, index: id });
  };

  const getLayout = (data: any, index: number) => {
    return { length: 105, offset: 105 * index, index };
  };

  const renderExpense = ({ item }: IPieTrans) => {
    return (
      <View style={styles.flatList}>
        <ExpenseFlatlist item={item} styles={styles} selected={selected} />
      </View>
    );
  };

  return (
    <View>
      <Svg width={400} height={350}>
        <Circle cx={200} cy={175} r={50} fill="#F0FFFF" />
        <VictoryPie
          standalone={false}
          height={350}
          width={400}
          data={chart}
          colorScale={colors}
          labels={(datum) => `${datum.y}`}
          radius={({ datum }) =>
            selected && selected.name == datum.name ? 140 : 130
          }
          innerRadius={50}
          labelRadius={80}
          style={{
            data: { fillOpacity: 0.9, stroke: '#000000', strokeWidth: 1.5 },
            labels: { fontSize: 13, fill: '#ffffff', fontFamily:'serif', },
          }}
          events={[
            {
              target: 'data',
              eventHandlers: {
                onPress: () => {
                  return [
                    {
                      target: 'labels',
                      mutation: (props) => {
                        let categoryName = chart[props.index].name;
                        let index = chart[props.index].id;
                        setSelectCategoryByName(categoryName, index);
                      },
                    },
                  ];
                },
              },
            },
          ]}
        />
      </Svg>
      <View style={styles.pieCircle}>
        <Text style={styles.pieText}>{totalExpense}</Text>
        <Text style={styles.pieText}>{I18n.t('allExpense')}</Text>
        <Text style={styles.pieText}>{totalExpenseCount}</Text>
      </View>
      <View>
        <FlatList
          data={formatChart}
          renderItem={renderExpense}
          keyExtractor={(item) => String(item.id)}
          horizontal
          getItemLayout={getLayout}
          ref={(ref) => setRefFlat(ref)}
        />
      </View>
    </View>
  );
};

export default ChartPie;
