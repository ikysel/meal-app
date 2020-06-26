import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";

import CATEGORIES from '../data/dummy-data';

const renderGridItem = (itemData)=> {
return <View style={styles.itemGrid}><Text>{itemData.item.title}</Text></View>
}

const CategoriesScreen = (props) => {
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2}/>
  );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemGrid: {
      flex: 1,
      margin: 15,
      height: 150
    }
})

export default CategoriesScreen;