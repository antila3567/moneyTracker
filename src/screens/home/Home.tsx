import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Animated,
} from 'react-native';
import { lightTheme, darkTheme } from '../../assets/styles/mainStack/home';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Icon } from 'native-base';
import { catetegoriesData } from './data';
import CategoriesBlock from '../../components/home/CategoriesBlock';
import { ICategories, IItem } from '../../utils/types/homeTypes';
import CatDesription from '../../components/home/CatDesription';

const HomeScreen = () => {
  const switchColor: boolean = useTypedSelector(
    (state) => state.switchTheme.theme
  );
  const styles = switchColor ? lightTheme : { ...lightTheme, ...darkTheme };
  const [menu, setMenu] = useState<boolean>(true);
  const [categories, setCategories] = useState<any[]>(catetegoriesData);
  const [selectedCategory, setSelectedCategory] = useState<IItem | null>(null);
  const [show, setShow] = useState<boolean>(false);
  const listHeight = useRef(new Animated.Value(130)).current;

  const showAllBlocks = () => {
    if (show) {
      Animated.timing(listHeight, {
        toValue: 130,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(listHeight, {
        toValue: 200,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
    setShow(!show);
  };

  const renderBlock = ({ item }: ICategories) => {
    return (
      <View style={styles.blockList}>
        <CategoriesBlock
          item={item}
          styles={styles}
          setSelectedCategory={setSelectedCategory}
        />
      </View>
    );
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>EXPENSES</Text>
        <View style={styles.calendar}>
          <View>
            <Icon name="ios-calendar" style={styles.iconCalendar} />
          </View>
          <Text style={styles.chooseDay}>07.08.2019</Text>
        </View>
      </View>
      <View style={styles.catagories}>
        <View>
          <Text style={styles.catagoriesTitle}>
            Categories - {categories.length}
          </Text>
          <View style={styles.showBlock}>
            <TouchableOpacity onPress={() => showAllBlocks()}>
              {menu ? <Text>{show ? 'HIDE ALL' : 'SHOW ALL ?'}</Text> : null}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.catagoriesBtn}>
          <TouchableOpacity onPress={() => setMenu(false)}>
            <Icon
              name="ios-barcode"
              style={!menu ? styles.activeBtn : styles.defaultBtn}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setMenu(true)}>
            <Icon
              name="ios-menu"
              style={menu ? styles.activeBtn : styles.defaultBtn}
            />
          </TouchableOpacity>
        </View>
      </View>
      {menu ? (
        <View>
          <Animated.View style={{ height: listHeight }}>
            <FlatList
              data={categories}
              renderItem={renderBlock}
              keyExtractor={(item) => String(item.id)}
              numColumns={2}
            />
          </Animated.View>
          <TouchableOpacity style={styles.addBlockBtn}>
            <View style={styles.addBtn}>
              <Text style={styles.addBtnText}>new category</Text>
            </View>
          </TouchableOpacity>
          <ScrollView horizontal>
            {selectedCategory !== null &&
              selectedCategory.expenses.map((item, index: number) => (
                <View key={index} style={styles.descriptionBlock}>
                  <CatDesription item={item} styles={styles} />
                </View>
              ))}
          </ScrollView>
        </View>
      ) : null}
    </View>
  );
};

export default HomeScreen;
