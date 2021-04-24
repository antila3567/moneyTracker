import React, { ReactElement, useEffect, useMemo, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import Svg from 'react-native-svg';
import { VictoryPie } from 'victory-native';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import I18n from '../../localization/locale';
import { chartFormatter } from '../../utils/formatters/chartFormatter';
import translator from '../../utils/formatters/translator';
import { IChartPie, IPieTrans } from '../../utils/types/homeTypes';
import ExpenseFlatlist from './ExpenseFlatlist';

const ChartPie = ({ categories, styles }: IChartPie): ReactElement => {
  const [refFlat, setRefFlat] = useState<any>();
  const selected = useTypedSelector((state) => state.home.selected);
  const { pushCurrentItem } = useActions();
  const formatChart = chartFormatter();
  const chart = formatChart;
  const colors = chart.map((item) => item.color);
  const allCount = chart.reduce((a, b) => a + (b.expenseCount || 0), 0);
  const allTotal = chart.reduce((a, b) => a + (b.y || 0), 0);
  translator();


  const setSelectCategoryByName = (id: number, index: number) => {
    const category = categories.filter((item) => item.id == id);
    pushCurrentItem(category[0]);
    scrollToItem(index);
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
        <VictoryPie
          standalone={false}
          height={350}
          width={400}
          data={chart}
          colorScale={colors}
          labels={(datum) => `${datum.y}`}
          radius={({ datum }) =>
            selected && selected.id == datum.id ? 140 : 130
          }
          innerRadius={50}
          labelRadius={80}
          style={{
            data: { fillOpacity: 0.9, stroke: '#ffffff', strokeWidth: 1.5 },
            labels: {
              fontSize: 13,
              fill: '#ffffff',
              fontFamily: 'serif',
              fontWeight: 'bold',
            },
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
                        let categoryName = chart[props.index].id;
                        let id = props.index;
                        setSelectCategoryByName(categoryName, id);
                      },
                    },
                  ];
                },
              },
            },
          ]}
        />
      </Svg>
      {allCount !== 0 ? (
        <View style={styles.pieCircle}>
          <Text style={styles.pieText}>{allTotal.toFixed(2)}</Text>
          <Text style={styles.pieText}>{I18n.t('allExpense')}</Text>
          <Text style={styles.pieText}>{allCount - categories.length}</Text>
        </View>
      ) : null}
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
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
