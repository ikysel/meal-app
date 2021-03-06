import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import { useSelector } from 'react-redux';

import MealItem from '../components/MealItem';  

const MealList = (props) => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
  const renderMealItem = (itemData) => {
    const isFavorite = favoriteMeals.find(meal=> meal.id === itemData.item.id);
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity.toUpperCase()}
        affordability={itemData.item.affordability}
        imageUrl={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFav: isFavorite
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "85%", fontFamily: 'open-sans-bold' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: 'open-sans-bold'
  },
});

export default MealList;
