import React, { ReactElement, useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Androw from 'react-native-androw';
import { lightTheme, darkTheme } from '../../assets/styles/mainStack/calendar';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import I18n from '../../localization/locale';
import { monthA } from '../../utils/formatters/dataFormatter';
import translator from '../../utils/formatters/translator';

const ScrollCalendar = (): ReactElement => {
  translator();
  const { filterDateAmount } = useActions();
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const allCat = useTypedSelector((state) => state.home.categories);
  const theme = useTypedSelector((state) => state.settings.theme);
  const styles = theme ? lightTheme : { ...lightTheme, ...darkTheme };

  useEffect(() => {
    const cutDate = allCat.map((item) => {
      const findItem = !!item.expenses.find(
        (item) => new Date(item.date).getMonth() + 1 === currentMonth
      );

      if (findItem) {
        return item;
      }
    });
    const cutNull: any = cutDate.filter((item) => !!item);
    filterDateAmount(cutNull);

    if (currentMonth === 0) {
      filterDateAmount(allCat);
    }
  }, [currentMonth, allCat]);

  return (
    <SafeAreaView>
      <View>
        <Androw style={styles.shadow}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={[styles.listOfDays]}>
              {monthA.map((item, index) => (
                <TouchableOpacity
                  style={
                    currentMonth !== item.number
                      ? [styles.days, styles.shadow]
                      : [
                          styles.days,
                          styles.shadow,
                          { backgroundColor: theme ? '#006586' : '#000' },
                        ]
                  }
                  onPress={() => setCurrentMonth(item.number)}
                  key={index}
                >
                  <View style={styles.textBlock}>
                    <View key={index}>
                      <Text
                        style={{
                          color: currentMonth == item.number ? '#fff' : '#000',
                        }}
                      >
                        {item.title === 'all' && I18n.t('all')}
                        {item.title === '1' && I18n.t('1')}
                        {item.title === '2' && I18n.t('2')}
                        {item.title === '3' && I18n.t('3')}
                        {item.title === '4' && I18n.t('4')}
                        {item.title === '5' && I18n.t('5')}
                        {item.title === '6' && I18n.t('6')}
                        {item.title === '7' && I18n.t('7')}
                        {item.title === '8' && I18n.t('8')}
                        {item.title === '9' && I18n.t('9')}
                        {item.title === '10' && I18n.t('10')}
                        {item.title === '11' && I18n.t('11')}
                        {item.title === '12' && I18n.t('12')}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.textBlock}>
                    <View>
                      <Text
                        style={{
                          color: currentMonth == item.number ? '#fff' : '#000',
                        }}
                      >
                        {item.sym}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </Androw>
      </View>
    </SafeAreaView>
  );
};

export default ScrollCalendar;
