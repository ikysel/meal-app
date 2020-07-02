import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";

import { Categories, MEALS } from "../data/dummy-data";

import Colors from "../constans/Colors";

const CategoryMealsScreen = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    );
  };

  const catId = props.navigation.getParam("categoryId");
  const dispalayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <FlatList
      data={dispalayedMeals}
      keyExtractor={(item, index) => item.id}
      renderItem={renderMealItem}
    />
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
