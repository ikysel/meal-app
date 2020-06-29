import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import CATEGORIES from "../data/dummy-data";

import Colors from '../constans/Colors';

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return (
    <View style={styles.screen}>
      <Text>Categories screen</Text>
      <Text>Selected category: {selectedCategory.title}</Text>
      <Button
        title="Go to MealDetail Screen"
        onPress={() => {
          props.navigation.navigate({ routeName: "MealDetail" });
        }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData)=>{
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Colors.primaryColor
    },
    headerTintColor: 'white'
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
