import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";

import { Categories, MEALS } from "../data/dummy-data";

import Colors from "../constans/Colors";
import MealItem from "../components/MealItem";

const CategoryMealsScreen = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity.toUpperCase()}
        affordability={itemData.item.affordability}
        imageUrl={itemData.item.imageUrl}
        onSelectMeal={() => {}}
      />
    );  
  };

  const catId = props.navigation.getParam("categoryId");
  const dispalayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={dispalayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "85%" }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = Categories.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
