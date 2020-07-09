import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";

import { Categories, MEALS } from "../data/dummy-data";

import Colors from "../constans/Colors";
import MealList from "../components/MealList";

const CategoryMealsScreen = (props) => {
  

  const catId = props.navigation.getParam("categoryId");
  const dispalayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <MealList listData={dispalayedMeals} navigation={props.navigation}/>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = Categories.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};


export default CategoryMealsScreen;
