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
import { monthA } from '../../utils/formatters/dataFormatter';

const ScrollCalendar = (): ReactElement => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);

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
                        style={currentMonth == item.number && { color: '#fff' }}
                      >
                        {item.title}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.textBlock}>
                    <View>
                      <Text
                        style={currentMonth == item.number && { color: '#fff' }}
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
