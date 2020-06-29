import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import CATEGORIES from "../data/dummy-data";
import Colors from '../constans/Colors'

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity style={{...styles.itemGrid, backgroundColor: itemData.item.color}} onPress={()=>{
        props.navigation.navigate({ routeName: 'CategoryMeals', params: {
          categoryId: itemData.item.id
        }})
      }}>
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
  headerStyle: {
    backgroundColor: Colors.primaryColor
  },
  headerTintColor: 'white'
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemGrid: {
    flex: 1,
    margin: 15,
    height: 150,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriesScreen;
