import React, { ReactElement } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { lightTheme, darkTheme } from '../../assets/styles/mainStack/home';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import CategoriesBlock from '../../components/home/CategoriesBlock';
import { ICategories, IItem } from '../../utils/types/homeTypes';
import ChartPie from '../../components/home/ChartPie';
import { useActions } from '../../hooks/useActions';
import I18n from '../../localization/locale';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { grad } from '../../assets/styles/blocks/gradient';
import ScrollCalendar from '../../components/home/ScrollCalendar';
import PurchaseModal from '../../components/modals/ PurchaseModal';

const HomeScreen = ({}): ReactElement => {
  const navigation = useNavigation();
  const switchColor: boolean = useTypedSelector(
    (state) => state.switchTheme.theme
  );
  const styles = switchColor ? lightTheme : { ...lightTheme, ...darkTheme };
  const categories = useTypedSelector((state) => state.home.categories);
  const { removeCategory } = useActions();

  const historyCategory = (category: IItem) => {
    navigation.navigate('History', {
      historyCategory: category,
    });
  };

  const removeCurrentCategory = (id: number) => {
    Alert.alert(I18n.t('removeCategory'), I18n.t('categoryInfo'), [
      {
        text: I18n.t('cancelBtn'),
      },
      { text: I18n.t('okBtn'), onPress: () => removeCategory(id) },
    ]);
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
