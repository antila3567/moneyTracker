import React, { ReactElement, useMemo } from 'react';
import { View, FlatList } from 'react-native';
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
import { Toast } from 'native-base';
import { useActions } from '../../hooks/useActions';
import I18n from 'i18next'

const HomeScreen = ({}): ReactElement => {
  const { getCategoryAmountId } = useActions();
  const navigation = useNavigation();
  const switchColor: boolean = useTypedSelector(
    (state) => state.settings.theme
  );
  const styles = switchColor ? lightTheme : { ...lightTheme, ...darkTheme };
  const categories = useTypedSelector((state) => state.home.categories);
  const over = useTypedSelector((state) => state.wallet.overLimit);

  useMemo(() => {
    setTimeout(() => {
      if (over.length !== 0) {
        over.map((item) => {
          Toast.show({
            text: `Вы превысили лимит в категории (${item.name})`,
            buttonText: 'ok',
            type: 'warning',
            duration: 5000,
          });
        });
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
    <>
      {categories !== null && (
        <LinearGradient colors={grad.lightBackground} style={styles.wrapper}>
          <PurchaseModal />
          <View>
            <View style={[styles.header]}>
              <ScrollCalendar />
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
        </LinearGradient>
      )}
    </>
  );
};

export default HomeScreen;
