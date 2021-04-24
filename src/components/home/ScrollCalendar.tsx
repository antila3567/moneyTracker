import React, { ReactElement, useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Androw from 'react-native-androw';
import I18n from '../../localization/locale';
import { monthA } from '../../utils/formatters/dataFormatter';
import translator from '../../utils/formatters/translator';

const ScrollCalendar = (): ReactElement => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  translator();
  
  return (
    <SafeAreaView>
      <View style={[styles.container]}>
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
                          { backgroundColor: '#006586' },
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
                        {item.number}
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

const styles = StyleSheet.create({
  container: {},
  listOfDays: {
    flexDirection: 'row',
  },
  days: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 8,
    backgroundColor: '#F0FFFF',
    width: 50,
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  textBlock: {
    paddingVertical: 5,
  },
});
