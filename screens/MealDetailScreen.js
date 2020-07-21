import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import { toggleFavorite } from "../store/actions/meals";

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const isCurrentMealIsFavorite = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId)
  );
  const availableMeals = useSelector((state) => state.meals.meals);

  const selectedMeal = availableMeals.find((meal) => {
    return meal.id === mealId;
  });

  const dispatch = useDispatch();
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(selectedMeal.id));
  }, [dispatch, selectedMeal.id]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(()=>{
    props.navigation.setParams({ isFav: isCurrentMealIsFavorite});
  }, [isCurrentMealIsFavorite])

  const ListItem = (props) => {
    return (
      <View style={styles.listItem}>
        <Text>{props.children}</Text>
      </View>
    );
  };

  return (
    <ScrollView>
      <View>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <View style={styles.details}>
          <DefaultText>{selectedMeal.duration}</DefaultText>
          <DefaultText>{selectedMeal.complexity}</DefaultText>
          <DefaultText>{selectedMeal.affordability}</DefaultText>
        </View>
        <Text style={styles.title}>Ingredients</Text>
        <View>
          {selectedMeal.ingredients.map((ingredient) => {
            return <ListItem>{ingredient}</ListItem>;
          })}
        </View>
        <Text style={styles.title}>Steps</Text>
        <View>
          {selectedMeal.steps.map((step) => {
            return <ListItem>{step}</ListItem>;
          })}
        </View>
      </View>
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  // const mealId = navigationData.navigation.getParam("mealId");
  // const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  const isFav = navigationData.navigation.getParam("isFav");
  return {
    headerTitle: mealTitle.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="favorite"
          iconName={isFav ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 10,
  },
  listItem: {
    borderColor: "#ccc",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
  },
});

export default MealDetailScreen;
