import React, { ReactElement, useState } from 'react';
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

const ScrollCalendar = (): ReactElement => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const monthA = [
    { title: I18n.t('1'), number: 1 },
    { title: I18n.t('2'), number: 2 },
    { title: I18n.t('3'), number: 3 },
    { title: I18n.t('4'), number: 4 },
    { title: I18n.t('5'), number: 5 },
    { title: I18n.t('6'), number: 6 },
    { title: I18n.t('7'), number: 7 },
    { title: I18n.t('8'), number: 8 },
    { title: I18n.t('9'), number: 9 },
    { title: I18n.t('10'), number: 10 },
    { title: I18n.t('11'), number: 11 },
    { title: I18n.t('12'), number: 12 },
  ];
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
                          { backgroundColor: '#00e0fa' },
                        ]
                  }
                  onPress={() => setCurrentMonth(item.number)}
                  key={index}
                >
                  <View style={styles.textBlock}>
                    <View key={index}>
                      <Text>{item.title}</Text>
                    </View>
                  </View>
                  <View style={styles.textBlock}>
                    <View>
                      <Text>{item.number}</Text>
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
