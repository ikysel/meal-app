import React from "react";

import { useSelector } from "react-redux";

import { View, StyleSheet } from "react-native";

import { Categories } from "../data/dummy-data";

import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText";

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const dispalayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  if (dispalayedMeals.length <= 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals:( check your filters</DefaultText>
      </View>
    );
  }
  return <MealList listData={dispalayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = Categories.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoryMealsScreen;
