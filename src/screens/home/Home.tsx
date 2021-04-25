import React, { ReactElement, useEffect, useMemo } from 'react';
import { View, FlatList, Image } from 'react-native';
import { lightTheme, darkTheme } from '../../assets/styles/mainStack/home';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import CategoriesBlock from '../../components/home/CategoriesBlock';
import { ICategories } from '../../utils/types/homeTypes';
import ChartPie from '../../components/home/ChartPie';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { grad } from '../../assets/styles/blocks/gradient';
import ScrollCalendar from '../../components/home/ScrollCalendar';
import PurchaseModal from '../../components/modals/ PurchaseModal';
import { Text, Toast } from 'native-base';
import { useActions } from '../../hooks/useActions';
import I18n from '../../localization/locale';

const HomeScreen = ({}): ReactElement => {
  const { getCategoryAmountId, clearLimit } = useActions();
  const navigation = useNavigation();
  const theme = useTypedSelector((state) => state.settings.theme);
  const styles = theme ? lightTheme : { ...lightTheme, ...darkTheme };
  const categories = useTypedSelector((state) => state.home.categories);
  const over = useTypedSelector((state) => state.wallet.overLimit);

  useMemo(() => {
    setTimeout(() => {
      if (!!over && over.length !== 0) {
        over.map((item) => {
          Toast.show({
            text: `${I18n.t('limit')} (${item.name})`,
            buttonText: 'ok',
            type: 'warning',
            duration: 5000,
          });
        });
        clearLimit();
      }
    }, 2000);
  }, [over]);

  const historyCategory = (id: number) => {
    getCategoryAmountId(id);
    navigation.navigate('History', {});
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
    <LinearGradient
      colors={theme ? grad.lightBackground : grad.darkBg}
      style={styles.wrapper}
    >
      <PurchaseModal />
      <View>
        <View style={[styles.header]}>
          <ScrollCalendar />
        </View>
        {categories.length !== 0 ? (
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
        ) : (
          <View style={styles.scrollWrap}>
            <View style={styles.firstCat}>
              <Text style={styles.firstText}>Добавьте первую категорию</Text>
              <Image
                source={require('../../assets/image/home/arrowDown.png')}
              />
            </View>
          </View>
        )}
        <ChartPie categories={categories} styles={styles} />
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;
