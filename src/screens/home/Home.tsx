import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { lightTheme, darkTheme } from '../../assets/styles/mainStack/home';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { catetegoriesData } from './data';
import CategoriesBlock from '../../components/home/CategoriesBlock';
import { ICategories, IItem } from '../../utils/types/homeTypes';
import ChartPie from '../../components/home/ChartPie';
import { Icon } from 'native-base';
import { useActions } from '../../hooks/useActions';
import I18n from '../../localization/locale';

const HomeScreen = ({ navigation }: any) => {
  const switchColor: boolean = useTypedSelector( (state) => state.switchTheme.theme );
  const styles = switchColor ? lightTheme : { ...lightTheme, ...darkTheme };
  const categories = useTypedSelector((state) => state.home.categories);
  const { pushHomeCategories } = useActions();

  useEffect(() => {
    pushHomeCategories(catetegoriesData);
  }, [catetegoriesData]);

  const historyCategory = (category: IItem) => {
    console.log(category);
    navigation.navigate('History', {
      historyCategory: category,
    });
  };

  const renderBlock = ({ item }: ICategories) => {
    return (
      <View style={styles.blockList}>
        <CategoriesBlock
          item={item}
          styles={styles}
          historyCategory={historyCategory}
        />
      </View>
    );
  };

  return (
    <>
      {categories !== null ? (
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{I18n.t('expenses')}</Text>
            <View style={styles.calendar}>
              <View>
                <Icon name="ios-calendar" style={styles.iconCalendar} />
              </View>
              <Text style={styles.chooseDay}>{new Date().toDateString()}</Text>
            </View>
          </View>
          <View>
            <View style={styles.scrollWrap}>
              <FlatList
                data={categories}
                renderItem={renderBlock}
                keyExtractor={(item) => String(item.id)}
                numColumns={2}
              />
            </View>
          </View>
          <ChartPie categories={categories} styles={styles} />
        </View>
      ) : null}
    </>
  );
};

export default HomeScreen;
